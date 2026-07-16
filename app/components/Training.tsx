export default function Training() {
  return (
    <section
      id="training"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-red-600 mb-4">
          Unser Training
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Bei der Next Level Academy trainieren Kinder individuell in kleinen Gruppen.
          Unser Ziel ist eine technische, koordinative und mentale Entwicklung.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-zinc-900 rounded-2xl p-8 border border-red-700 hover:scale-105 transition">
            <div className="text-5xl mb-5">⚽</div>
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Technik
            </h3>

            <p className="text-gray-300">
              Ballkontrolle, Passspiel, Dribbling und Torabschluss.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-red-700 hover:scale-105 transition">
            <div className="text-5xl mb-5">🚀</div>

            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Schnelligkeit
            </h3>

            <p className="text-gray-300">
              Explosivität, Reaktion und Richtungswechsel.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-red-700 hover:scale-105 transition">
            <div className="text-5xl mb-5">🧠</div>

            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Spielintelligenz
            </h3>

            <p className="text-gray-300">
              Entscheidungen treffen und das Spiel besser verstehen.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-red-700 hover:scale-105 transition">
            <div className="text-5xl mb-5">💪</div>

            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Koordination
            </h3>

            <p className="text-gray-300">
              Balance, Beweglichkeit und Athletik.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}