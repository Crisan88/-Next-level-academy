import Image from "next/image";
import Navbar from "./components/navbar";
import Training from "./components/Training";
import Trainer from "./components/Trainer";
import Price from "./components/price";
import Register from "./components/Register";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative min-h-screen overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(2, 6, 23, 0.65), rgba(2, 6, 23, 0.7)), url('/hero.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.3),_transparent_45%)]" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center">
            <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
                  <span className="mr-2">⚽</span>
                  Freitag | 17:00–18:10 Uhr
                </div>

                <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Next Level Academy
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                  Entwickle dein volles Potenzial auf dem Fußballplatz.
                </p>

                <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                  Professionelles Fußballtraining für Kinder von 7 bis 13 Jahren.
                  Technik, Schnelligkeit, Koordination und Spielintelligenz – individuell gefördert in kleinen Gruppen.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#anmeldung"
                    className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                  >
                    Jetzt kostenlos anmelden
                  </a>

                  <a
                    href="#training"
                    className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    Mehr erfahren
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                    🏆 Kleine Gruppen
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                    📜 Lizenzierter Trainer
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                    ⚽ Individuelle Förderung
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
                <div className="rounded-[1.5rem] border border-blue-400/20 bg-slate-950/70 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                    Warum Next Level Academy?
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Professionelles Training mit Leidenschaft, Struktur und individueller Förderung.
                  </h2>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10">
                      <div className="mb-2 text-2xl text-blue-400">🏆</div>
                      <h3 className="font-semibold text-white">Individuelle Förderung</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Jedes Kind erhält ein altersgerechtes und individuelles Training, abgestimmt auf seine Stärken und Entwicklung.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10">
                      <div className="mb-2 text-2xl text-blue-400">📜</div>
                      <h3 className="font-semibold text-white">Lizenzierter Trainer</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Training mit einem lizenzierten Trainer und langjähriger Erfahrung im Leistungsfußball.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10">
                      <div className="mb-2 text-2xl text-blue-400">⚽</div>
                      <h3 className="font-semibold text-white">Kleine Gruppen</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Mehr Ballkontakte, persönliche Betreuung und schnellere Entwicklung durch kleine Trainingsgruppen.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10">
                      <div className="mb-2 text-2xl text-blue-400">🔥</div>
                      <h3 className="font-semibold text-white">Spaß & Motivation</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Eine positive Trainingsatmosphäre, die Kinder motiviert, selbstbewusst und mit Freude Fußball zu spielen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Training />

        <Trainer />

        <Price />

        <Register />

      </main>
    </>
  );
}