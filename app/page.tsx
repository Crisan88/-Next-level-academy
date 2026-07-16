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

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white">

        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

          <Image
            src="/logo.png.jpeg"
            alt="Next Level Academy"
            width={220}
            height={220}
            priority
          />

          <h1 className="mt-8 text-6xl md:text-7xl font-extrabold text-red-600">
            NEXT LEVEL ACADEMY
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Individuelles Fußballtraining für Kinder von U7 bis U13.
            <br />
            Technik • Koordination • Schnelligkeit • Spielintelligenz
          </p>

          <div className="mt-10 flex gap-4 flex-wrap justify-center">

            <a
              href="#anmeldung"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
            >
              Jetzt anmelden
            </a>

            <a
              href="#training"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Mehr erfahren
            </a>

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