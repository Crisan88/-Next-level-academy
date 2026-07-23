"use client";

import { AnimatePresence, motion } from "framer-motion";

type TrainerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
};

export default function TrainerModal({ isOpen, onClose, title, imageSrc }: TrainerModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_30px_100px_rgba(2,8,23,0.65)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Dokument</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              Schließen
            </button>
          </div>

          <div className="p-4 sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-2 shadow-[0_16px_45px_rgba(2,8,23,0.25)]">
              <img
                src={imageSrc}
                alt={title}
                className="max-h-[70vh] w-full rounded-[1.1rem] object-contain"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
