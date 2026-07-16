"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    group: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        setMessage("✅ Vielen Dank! Ihre Anmeldung wurde erfolgreich gesendet.");
        setForm({
          childName: "",
          age: "",
          parentName: "",
          phone: "",
          email: "",
          group: "",
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
    <section id="anmeldung" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-red-600 mb-6">
          Anmeldung
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Melden Sie Ihr Kind jetzt für das Training der Next Level Academy an.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="childName" value={form.childName} onChange={handleChange} type="text" placeholder="Vor- und Nachname des Kindes" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Alter des Kindes" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <input name="parentName" value={form.parentName} onChange={handleChange} type="text" placeholder="Vor- und Nachname eines Elternteils" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Telefonnummer" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-Mail-Adresse" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <select name="group" value={form.group} onChange={handleChange} className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700">
            <option value="">Trainingsgruppe auswählen</option>
            <option>U7 – U9</option>
            <option>U10 – U11</option>
            <option>U12 – U13</option>
          </select>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder="Bemerkungen oder besondere Hinweise" className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700" />
          <label className="flex items-center gap-3">
            <input type="checkbox" required />
            Ich habe die Datenschutzbestimmungen gelesen und akzeptiere sie.
          </label>

          {message && <p>{message}</p>}

          <button disabled={loading} type="submit" className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold text-xl transition">
            {loading ? "Wird gesendet..." : "Jetzt anmelden"}
          </button>
        </form>
      </div>
    </section>
  );
}
