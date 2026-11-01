"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  bookingWhatsApp,
  getVilla,
  villas,
  type Villa,
} from "@/lib/site";
import styles from "./BookingForm.module.css";

export type BookingFormProps = {
  villa?: Villa;
  /** Prefill villa slug when no villa object is passed. */
  defaultVillaSlug?: string;
  variant?: "inline" | "dialog";
  onSubmitted?: () => void;
};

function todayIso() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDaysIso(isoDate: string, days: number) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function BookingForm({
  villa,
  defaultVillaSlug,
  variant = "inline",
  onSubmitted,
}: BookingFormProps) {
  const initialSlug = villa?.slug ?? defaultVillaSlug ?? villas[0]?.slug ?? "";
  const [villaSlug, setVillaSlug] = useState(initialSlug);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const selected = useMemo(
    () => villa ?? getVilla(villaSlug),
    [villa, villaSlug],
  );
  const maxGuests = selected?.facts.guests ?? 12;
  const minCheckIn = todayIso();
  const minCheckOut = checkIn ? addDaysIso(checkIn, 1) : addDaysIso(minCheckIn, 1);

  function handleCheckInChange(value: string) {
    setCheckIn(value);
    if (checkOut && value && checkOut <= value) {
      setCheckOut(addDaysIso(value, 1));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!villaSlug) {
      setError("Please choose a villa.");
      return;
    }
    if (!checkIn || !checkOut) {
      setError("Please add check-in and check-out dates.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    if (guests < 1 || guests > maxGuests) {
      setError(`Guests must be between 1 and ${maxGuests}.`);
      return;
    }

    const href = bookingWhatsApp({
      villaSlug,
      checkIn,
      checkOut,
      guests,
      name,
      notes,
    });

    onSubmitted?.();
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className={`${styles.form} ${
        variant === "inline" ? styles.inline : styles.dialogForm
      }`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.grid}>
        {!villa ? (
          <div className={styles.field}>
            <label htmlFor="booking-villa">Villa</label>
            <select
              id="booking-villa"
              name="villa"
              value={villaSlug}
              onChange={(event) => {
                const next = event.target.value;
                setVillaSlug(next);
                const nextVilla = getVilla(next);
                if (nextVilla && guests > nextVilla.facts.guests) {
                  setGuests(nextVilla.facts.guests);
                }
              }}
              required
            >
              {villas.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} · up to {item.facts.guests} guests
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p className={styles.hint}>
            Checking {villa.name} · up to {villa.facts.guests} guests
          </p>
        )}

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <div className={styles.field}>
            <label htmlFor="booking-checkin">Check-in</label>
            <input
              id="booking-checkin"
              name="checkIn"
              type="date"
              min={minCheckIn}
              value={checkIn}
              onChange={(event) => handleCheckInChange(event.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="booking-checkout">Check-out</label>
            <input
              id="booking-checkout"
              name="checkOut"
              type="date"
              min={minCheckOut}
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              required
            />
          </div>
        </div>

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <div className={styles.field}>
            <label htmlFor="booking-guests">Guests</label>
            <input
              id="booking-guests"
              name="guests"
              type="number"
              min={1}
              max={maxGuests}
              value={guests}
              onChange={(event) => setGuests(Number(event.target.value) || 1)}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="booking-name">Your name</label>
            <input
              id="booking-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Optional"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="booking-notes">Notes</label>
          <textarea
            id="booking-notes"
            name="notes"
            placeholder="Trip purpose, free activity pick, arrival time…"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button className={styles.submit} type="submit">
        Continue on WhatsApp
      </button>
      <p className={styles.footnote}>
        Opens WhatsApp with your dates so we can confirm availability.
      </p>
    </form>
  );
}
