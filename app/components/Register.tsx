"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage(
          "✅ Vielen Dank! Ihre Anmeldung wurde erfolgreich gesendet."
        );

        setForm({
          childName: "",
          age: "",
          parentName: "",
          phone: "",
          email: "",
          notes: "",
        });
      } else {
        setMessage("❌ Beim Senden ist ein Fehler aufgetreten.");
      }
    } catch {
      setMessage("❌ Serverfehler.");
    }

    setLoading(false);
  };

  return (
    <section
      id="anmeldung"
      className="scroll-mt-24 bg-zinc-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-3xl">

        {/* TITEL */}
        <h2 className="mb-6 text-center text-5xl font-extrabold text-red-600">
          Anmeldung
        </h2>

        <p className="mb-8 text-center text-gray-300">
          Melden Sie Ihr Kind jetzt für das Training der Next Level Academy an.
        </p>

        {/* TRAININGSGRUPPE */}
        <div className="mb-8 rounded-2xl border border-red-600/40 bg-zinc-800/70 p-6 text-left shadow-lg">
          <h3 className="mb-4 text-xl font-semibold text-red-500">
            Unsere Trainingszeiten
          </h3>

          <div className="space-y-4 text-gray-200">

            {/* MONTAG */}
            <div>
              <p className="font-semibold text-white">
                📅 Montag
              </p>

              <p className="text-blue-300">
                🕔 17:00–18:10 Uhr
              </p>
            </div>

            {/* FREITAG */}
            <div>
              <p className="font-semibold text-white">
                📅 Freitag
              </p>

              <p className="text-blue-300">
                🕒 15:00–16:10 Uhr
              </p>
            </div>

            <p className="pt-2 text-gray-300">
              Sie können den für Sie passenden Trainingstermin auswählen.
            </p>

          </div>
        </div>

        {/* FORMULAR */}
        <form
          id="register"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            name="childName"
            value={form.childName}
            onChange={handleChange}
            type="text"
            placeholder="Vor- und Nachname des Kindes"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            required
          />

          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            type="number"
            placeholder="Alter des Kindes"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            required
          />

          <input
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            type="text"
            placeholder="Vor- und Nachname eines Elternteils"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Telefonnummer"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="E-Mail-Adresse"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            required
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Bemerkungen oder besondere Hinweise"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
          />

          {/* DATENSCHUTZ */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              required
            />

            <span>
              Ich habe die Datenschutzbestimmungen gelesen und akzeptiere sie.
            </span>
          </label>

          {/* MESSAGE */}
          {message && (
            <p className="rounded-xl bg-zinc-800 p-4 text-center">
              {message}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 text-xl font-bold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Wird gesendet..." : "Jetzt anmelden"}
          </button>
        </form>
      </div>
    </section>
  );
}