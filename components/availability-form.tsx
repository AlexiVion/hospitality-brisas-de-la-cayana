"use client";

import { FormEvent, useMemo, useState } from "react";

type AvailabilityFormProps = {
  whatsappNumber: string;
  compact?: boolean;
};

export function AvailabilityForm({
  whatsappNumber,
  compact = false,
}: AvailabilityFormProps) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [error, setError] = useState("");

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!arrival || !departure || !guests) {
      setError("Completá llegada, salida y cantidad de huéspedes.");
      return;
    }

    if (departure <= arrival) {
      setError("La fecha de salida tiene que ser posterior a la llegada.");
      return;
    }

    const message = [
      "Hola, quería consultar disponibilidad en Brisas de la Cayana.",
      "",
      `Llegada: ${arrival}`,
      `Salida: ${departure}`,
      `Huéspedes: ${guests}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className={compact ? "availability availability--compact" : "availability"}
      onSubmit={submit}
      noValidate
    >
      <div className="availability__grid">
        <label className="field">
          <span>Llegada</span>
          <input
            type="date"
            min={today}
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Salida</span>
          <input
            type="date"
            min={arrival || today}
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Huéspedes</span>
          <input
            type="number"
            min="1"
            inputMode="numeric"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
          />
        </label>
      </div>

      {error ? (
        <p className="availability__error" role="alert">
          {error}
        </p>
      ) : null}

      <button className="button button--primary availability__button" type="submit">
        Consultar disponibilidad por WhatsApp
        <span aria-hidden="true">↗</span>
      </button>

      {!compact ? (
        <p className="availability__note">
          Esta demo no confirma una reserva automáticamente. Te conecta directamente
          por WhatsApp con tus fechas y cantidad de huéspedes.
        </p>
      ) : null}
    </form>
  );
}
