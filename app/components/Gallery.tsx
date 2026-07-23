"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type GalleryImageItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const galleryItems: GalleryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    alt: "Football training session",
    title: "Training Session",
    subtitle: "Modern drills and technical work",
  },
  {
    src: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=900&q=80",
    alt: "Young football players",
    title: "Youth Development",
    subtitle: "Focused coaching for every age group",
  },
  {
    src: "https://images.unsplash.com/photo-1521417531039-2f9d0c4e1f48?auto=format&fit=crop&w=900&q=80",
    alt: "Academy player in action",
    title: "Match Day",
    subtitle: "Competitive spirit and team energy",
  },
  {
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80",
    alt: "Coach guiding player",
    title: "Individual Coaching",
    subtitle: "Personal feedback in every session",
  },
  {
    src: "https://images.unsplash.com/photo-1495594059084-33752639b1e6?auto=format&fit=crop&w=900&q=80",
    alt: "Academy team celebration",
    title: "Team Culture",
    subtitle: "Discipline, commitment and joy",
  },
  {
    src: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=900&q=80",
    alt: "Football academy environment",
    title: "Premium Setup",
    subtitle: "Professional atmosphere and standards",
  },
];

function GalleryImage({
  item,
  onOpen,
}: {
  item: GalleryImageItem;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 text-left shadow-[0_20px_60px_rgba(2,8,23,0.28)]"
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Gallery
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-300">{item.subtitle}</p>
      </div>
    </motion.button>
  );
}

function GalleryModal({
  isOpen,
  item,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: {
  isOpen: boolean;
  item: GalleryImageItem | null;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_30px_100px_rgba(2,8,23,0.65)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                {index + 1} / {total}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[70vh] w-full rounded-[1.25rem] object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem =
    selectedIndex === null ? null : galleryItems[selectedIndex] ?? null;

  const openItem = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const goNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return (current + 1) % galleryItems.length;
    });
  };
  const goPrev = () => {
    setSelectedIndex((current) => {
      if (current === null) return galleryItems.length - 1;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  };

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),#020617] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Einblick in die Welt von Next Level Academy
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Training, Leidenschaft und professionelle Entwicklung – so erleben Kinder Fußball in einer modernen Akademie-Atmosphäre.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <GalleryImage
              key={item.title}
              item={item}
              onOpen={() => openItem(index)}
            />
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={selectedIndex !== null}
        item={selectedItem}
        index={selectedIndex ?? 0}
        total={galleryItems.length}
        onClose={closeModal}
        onNext={goNext}
        onPrev={goPrev}
      />
    </section>
  );
}
