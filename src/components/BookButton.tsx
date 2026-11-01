"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import type { Villa } from "@/lib/site";
import { BookingForm } from "./BookingForm";
import styles from "./BookButton.module.css";

type BookButtonProps = {
  villa?: Villa;
  defaultVillaSlug?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
};

export function BookButton({
  villa,
  defaultVillaSlug,
  label = "Check availability",
  className,
  children,
}: BookButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const dialog =
    mounted && open
      ? createPortal(
          <div
            className={styles.backdrop}
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div
              className={styles.panel}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.kicker}>Easy booking</p>
                  <h2 id={titleId} className={styles.title}>
                    Check availability
                  </h2>
                  <p className={styles.lede}>
                    Date range, number of persons, and any details — then
                    continue on WhatsApp.
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className={styles.close}
                  aria-label="Close booking form"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
              <BookingForm
                villa={villa}
                defaultVillaSlug={defaultVillaSlug}
                variant="dialog"
                onSubmitted={() => setOpen(false)}
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${className ?? ""}`.trim()}
        onClick={() => setOpen(true)}
      >
        {children ?? label}
      </button>
      {dialog}
    </>
  );
}
