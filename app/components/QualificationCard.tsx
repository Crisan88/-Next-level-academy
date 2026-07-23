"use client";

import { motion } from "framer-motion";

export type QualificationCardProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  imageSrc: string;
  onOpen: () => void;
};

export default function QualificationCard({
  title,
  description,
  buttonLabel,
  onOpen,
}: QualificationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7 shadow-[0_20px_60px_rgba(2,8,23,0.28)]"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-300">
        🏅
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      ) : null}
      <div className="mt-8 flex-1" />
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-500/20"
      >
        {buttonLabel}
      </button>
    </motion.article>
  );
}
