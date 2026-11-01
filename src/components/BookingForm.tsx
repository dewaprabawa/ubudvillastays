"use client";

import { useId, useMemo, useState, type FormEvent } from "react";
import {
  bookingWhatsApp,
  formatBookingDate,
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

function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut || checkOut <= checkIn) return 0;
  const [y1, m1, d1] = checkIn.split("-").map(Number);
  const [y2, m2, d2] = checkOut.split("-").map(Number);
  const start = Date.UTC(y1, m1 - 1, d1);
  const end = Date.UTC(y2, m2 - 1, d2);
  return Math.round((end - start) / 86_400_000);
}

export function BookingForm({
  villa,
  defaultVillaSlug,
  variant = "inline",
  onSubmitted,
}: BookingFormProps) {
  const uid = useId();
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
  const nights = nightsBetween(checkIn, checkOut);

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
      setError("Please select your date range.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    if (guests < 1 || guests > maxGuests) {
      setError(`Number of persons must be between 1 and ${maxGuests}.`);
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
      <div className={styles.groups}>
        {!villa ? (
          <fieldset className={styles.group}>
            <legend className={styles.groupTitle}>Villa</legend>
            <p className={styles.groupHint}>Which home should we check?</p>
            <div className={styles.field}>
              <label htmlFor={`${uid}-villa`}>Select villa</label>
              <select
                id={`${uid}-villa`}
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
          </fieldset>
        ) : (
          <p className={styles.villaChip}>
            Booking {villa.name} · up to {villa.facts.guests} guests
          </p>
        )}

        <fieldset className={styles.group}>
          <legend className={styles.groupTitle}>Date range</legend>
          <p className={styles.groupHint}>
            Choose check-in and check-out for your stay.
          </p>
          <div className={`${styles.grid} ${styles.gridTwo}`}>
            <div className={styles.field}>
              <label htmlFor={`${uid}-checkin`}>Check-in</label>
              <input
                id={`${uid}-checkin`}
                name="checkIn"
                type="date"
                min={minCheckIn}
                value={checkIn}
                onChange={(event) => handleCheckInChange(event.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${uid}-checkout`}>Check-out</label>
              <input
                id={`${uid}-checkout`}
                name="checkOut"
                type="date"
                min={minCheckOut}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                required
              />
            </div>
          </div>
          {nights > 0 ? (
            <p className={styles.summary}>
              {formatBookingDate(checkIn)} → {formatBookingDate(checkOut)} ·{" "}
              {nights} night{nights === 1 ? "" : "s"}
            </p>
          ) : null}
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.groupTitle}>Number of persons</legend>
          <p className={styles.groupHint}>
            How many guests will stay (max {maxGuests})?
          </p>
          <div className={`${styles.grid} ${styles.gridTwo}`}>
            <div className={styles.field}>
              <label htmlFor={`${uid}-guests`}>Guests</label>
              <input
                id={`${uid}-guests`}
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
              <label htmlFor={`${uid}-name`}>Your name</label>
              <input
                id={`${uid}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Optional"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.groupTitle}>Any details</legend>
          <p className={styles.groupHint}>
            Arrival time, free activity pick, special requests — optional.
          </p>
          <div className={styles.field}>
            <label htmlFor={`${uid}-notes`}>Details</label>
            <textarea
              id={`${uid}-notes`}
              name="notes"
              placeholder="Tell us anything we should know…"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
        </fieldset>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button className={styles.submit} type="submit">
        Check availability on WhatsApp
      </button>
      <p className={styles.footnote}>
        Continues in WhatsApp with your date range, guest count, and details so
        we can confirm the villa is free.
      </p>
    </form>
  );
}
