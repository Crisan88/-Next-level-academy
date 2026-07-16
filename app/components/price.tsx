export default function Price() {
  return (
    <section
      id="preise"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-extrabold text-red-600 mb-6">
          Preise
        </h2>

        <p className="text-gray-300 text-xl mb-14">
          Professionelles Fußballtraining für Kinder von U7 bis U13.
        </p>

        <div className="max-w-lg mx-auto bg-zinc-900 border-2 border-red-600 rounded-3xl p-10 shadow-2xl">

          <h3 className="text-3xl font-bold mb-4">
            Next Level Academy
          </h3>

          <div className="text-6xl font-extrabold text-red-600 mb-2">
            50€
          </div>

          <p className="text-gray-400 mb-8">
            pro Monat
          </p>

          <div className="space-y-4 text-left text-lg">

            <p>✅ 1 Training pro Woche</p>

            <p>✅ Individuelles Training</p>

            <p>✅ Kleine Gruppen</p>

            <p>✅ Technik & Koordination</p>

            <p>✅ Schnelligkeit</p>

            <p>✅ Spielintelligenz</p>

            <p>✅ U7 bis U13</p>

          </div>

          <a
            href="https://wa.me/4915906419166"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold transition"
          >
            Jetzt anmelden
          </a>

        </div>

      </div>
    </section>
  );
}