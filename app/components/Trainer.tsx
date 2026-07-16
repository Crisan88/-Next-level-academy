export default function Trainer() {
  return (
    <section id="trainer" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <img
            src="/trainer.jpeg"
            alt="Raul Crișan"
            className="w-80 h-80 object-cover rounded-full border-4 border-red-600 shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-5xl font-extrabold text-red-600 mb-4">
            Raul Crișan
          </h2>

          <p className="text-xl text-gray-300 mb-6">
            UEFA C-Lizenz Trainer • Fondator Next Level Academy
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-zinc-900 border border-red-600 rounded-xl p-4">
              ⚽ Individuelles Training
            </div>

            <div className="bg-zinc-900 border border-red-600 rounded-xl p-4">
              🧒 U7 bis U13
            </div>

            <div className="bg-zinc-900 border border-red-600 rounded-xl p-4">
              🚀 Technik & Koordination
            </div>

            <div className="bg-zinc-900 border border-red-600 rounded-xl p-4">
              🏃 Schnelligkeit & Reaktion
            </div>
          </div>

          <a
            href="https://wa.me/4915906419166"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold transition"
          >
            📱 WhatsApp kontaktieren
          </a>

        </div>

      </div>
    </section>
  );
}