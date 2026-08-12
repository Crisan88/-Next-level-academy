"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Clock3,
  Footprints,
  Sparkles,
  Users,
  Baby,
  Target,
  ArrowRight,
} from "lucide-react";

const highlights = [
  { title: "Kleine Gruppen", icon: Users },
  { title: "Lizenzierter Trainer", icon: BadgeCheck },
  { title: "Individuelle Förderung", icon: Target },
  { title: "Moderne Trainingsmethoden", icon: Sparkles },
  { title: "Spaß und Entwicklung", icon: Footprints },
];

const stats = [
  { value: "UEFA C Lizenz", label: "Trainerqualifikation", icon: Award },
  { value: "7–13 Jahre", label: "Zielgruppe", icon: Baby },
  { value: "Max. 10 Kinder", label: "Pro Gruppe", icon: Users },
  { value: "Individuelle Förderung", label: "Jedes Kind", icon: Target },
];

export default function Training() {
  return (
    <section
      id="training"
      className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(248,113,113,0.12),_transparent_30%),#020617] px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_45%,rgba(255,255,255,0.025))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Training
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Warum Next Level Academy?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Unsere Trainingsphilosophie verbindet individuelle Förderung,
              moderne Methodik und echte Fußball-Emotion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-[2rem] border border-blue-400/20 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,8,23,0.35)] backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 transition duration-300"
                  >
                    <div className="mb-3 inline-flex rounded-2xl bg-blue-500/10 p-2.5 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="font-semibold text-white">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_10px_40px_rgba(2,8,23,0.25)] backdrop-blur"
              >
                <div className="mb-3 inline-flex rounded-2xl bg-red-500/10 p-2.5 text-red-300">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-8 shadow-[0_24px_90px_rgba(2,8,23,0.4)] sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
                Trainingszeit
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Unsere Trainingszeiten
              </h3>

              <div className="mt-6 rounded-[1.5rem] border border-blue-400/20 bg-blue-500/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-blue-500/10 p-2 text-blue-300">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white">Montag</p>
                    <p className="text-xl font-semibold text-blue-300">
                      17:00–18:10 Uhr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-red-400/20 bg-red-500/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-red-500/10 p-2 text-red-300">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white">Freitag</p>
                    <p className="text-xl font-semibold text-blue-300">
                      17:00-18:10 Uhr
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Ein strukturierter Trainingsblock für Kinder, die sich technisch
                weiterentwickeln und gleichzeitig Spaß am Fußball haben möchten.
              </p>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-slate-950/75 p-6 text-center shadow-inner shadow-blue-950/30">
              <div className="mx-auto inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                <Clock3 className="h-7 w-7" />
              </div>

              <p className="mt-4 text-lg font-semibold text-white">
                Perfekt für Kinder von 7 bis 13 Jahren
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Fokus auf Ballgefühl, Teamwork und individuelle Entwicklung.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#anmeldung"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(37,99,235,0.28)] transition"
          >
            Kostenloses Probetraining buchen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}