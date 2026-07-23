"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type TrainerPortraitProps = {
  alt: string;
  fallbackSrc?: string;
  className?: string;
};

export default function TrainerPortrait({
  alt,
  fallbackSrc = "/trainer-placeholder.svg",
  className = "",
}: TrainerPortraitProps) {
  const [imageSrc, setImageSrc] = useState("/trainer.jpeg");
  const [hasError, setHasError] = useState(false);

  const currentSrc = hasError ? fallbackSrc : imageSrc;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-[460px] ${className}`.trim()}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-emerald-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-3 shadow-[0_30px_90px_rgba(2,8,23,0.45)]">
        <img
          src={currentSrc}
          alt={alt}
          onError={() => {
            if (!hasError) {
              setHasError(true);
            }
          }}
          className="h-[440px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
        />
      </div>
    </motion.div>
  );
}
