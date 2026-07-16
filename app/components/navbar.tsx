export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-red-600 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-red-600 text-2xl font-bold">
          NEXT LEVEL ACADEMY
        </h1>

        <div className="hidden md:flex gap-8 text-white font-semibold">

          <a href="#" className="hover:text-red-500 transition">
            Home
          </a>

          <a href="#trainer" className="hover:text-red-500 transition">
            Trainer
          </a>

          <a href="#training" className="hover:text-red-500 transition">
            Training
          </a>

          <a href="#preise" className="hover:text-red-500 transition">
            Preise
          </a>

          <a href="#anmeldung" className="hover:text-red-500 transition">
            Anmeldung
          </a>

          <a href="#kontakt" className="hover:text-red-500 transition">
            Kontakt
          </a>

        </div>

      </div>
    </nav>
  );
}