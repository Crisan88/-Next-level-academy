"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Baby,
  BookOpenText,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import TrainerPortrait from "./TrainerPortrait";
import QualificationCard from "./QualificationCard";
import TrainerModal from "./TrainerModal";

const qualifications = [
  { label: "UEFA Grassroots C Lizenz", icon: ShieldCheck },
  { label: "Sportgymnasium – Sportinstruktor", icon: GraduationCap },
  { label: "Ehemaliger Spieler der 1. und 2. rumänischen Liga", icon: Trophy },
  { label: "Ehemaliger U18-Nationalspieler", icon: Award },
  { label: "Aktiver Fußballtrainer in Deutschland", icon: Sparkles },
];

const philosophyPoints = [
  {
    title: "Individuelle Aufmerksamkeit",
    text: "Kleine Trainingsgruppen ermöglichen eine gezielte Förderung jedes Kindes.",
  },
  {
    title: "Technik & Spielintelligenz",
    text: "Jede Einheit verbindet Ballgefühl, taktisches Verständnis und Disziplin.",
  },
  {
    title: "Freude am Fußball",
    text: "Motivation und Spaß sind der Schlüssel zu nachhaltiger Entwicklung.",
  },
];

const stats = [
  { value: "UEFA C Lizenz", label: "Trainerqualifikation", icon: Award },
  { value: "7–13 Jahre", label: "Zielgruppe", icon: Baby },
  { value: "Max. 10 Kinder", label: "Pro Gruppe", icon: Users },
  { value: "Individuelle Förderung", label: "Jedes Kind", icon: Target },
];

const documents = [
  {
    title: "UEFA Grassroots C Lizenz",
    buttonLabel: "Dokument ansehen",
    imageSrc: "/images/trainer/uefa-c-license.jpg",
  },
  {
    title: "Sportgymnasium – Sportinstruktor",
    buttonLabel: "Dokument ansehen",
    imageSrc: "/images/trainer/sportgymnasium.jpg",
  },
];

export default function Trainer() {
  const [activeDocument, setActiveDocument] = useState<null | (typeof documents)[number]>(null);

  return (
    <>
      <section
        id="trainer"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(248,113,113,0.12),_transparent_30%),#020617] px-6 py-24 text-white sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_45%,rgba(255,255,255,0.025))]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Trainer
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Raul Crișan
            </h2>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              UEFA C lizenzierter Fußballtrainer
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-red-500/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900/70 p-3 shadow-[0_25px_80px_rgba(2,8,23,0.4)] backdrop-blur-xl">
                <TrainerPortrait alt="Raul Crișan" className="!mx-0 !max-w-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-7"
            >
              <div className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                <BookOpenText className="mr-2 h-4 w-4" />
                Trainer
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.32)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Meine Haltung
                  </p>
                </div>

                <blockquote className="mt-5 text-xl leading-9 text-slate-100 sm:text-2xl">
                  “Jedes Kind hat Potenzial. Meine Aufgabe ist es, dieses Potenzial zu fördern.”
                </blockquote>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {qualifications.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200 shadow-lg shadow-black/10"
                    >
                      <div className="mt-1 rounded-xl bg-blue-500/10 p-2 text-blue-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Meine Philosophie
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bei Next Level Academy steht jedes Kind im Mittelpunkt.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Durch kleine Trainingsgruppen erhält jedes Kind individuelle Aufmerksamkeit. Technik, Spielintelligenz, Disziplin und Freude am Fußball stehen im Mittelpunkt jeder Trainingseinheit.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
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
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),#020617] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              Lizenzen & Qualifikationen
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Premium Nachweise für eine professionelle Ausbildung
            </h3>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {documents.map((document) => (
              <QualificationCard
                key={document.title}
                title={document.title}
                description="Professionelle Ausbildung mit Fokus auf moderne Trainingsmethoden, individuelle Förderung und starke sportliche Grundlagen."
                buttonLabel={document.buttonLabel}
                imageSrc={document.imageSrc}
                onOpen={() => setActiveDocument(document)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-blue-950/70 px-8 py-12 text-center shadow-[0_24px_90px_rgba(2,8,23,0.35)] sm:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Nächster Schritt
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bereit für den nächsten Schritt?
          </h3>
          <motion.a
            href="#register"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(37,99,235,0.28)]"
          >
            Kostenloses Probetraining buchen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </section>

      <TrainerModal
        isOpen={Boolean(activeDocument)}
        onClose={() => setActiveDocument(null)}
        title={activeDocument?.title ?? "Dokument"}
        imageSrc={activeDocument?.imageSrc ?? "/images/trainer/uefa-c-license.jpg"}
      />
    </>
  );
}