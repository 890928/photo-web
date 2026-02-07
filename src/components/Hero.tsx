"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
    alt: "韓式證件照",
    title: "最美的證件照",
    subtitle: "韓式證件照",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80",
    alt: "韓式形象照",
    title: "專屬你的形象",
    subtitle: "韓式形象照",
  },
  {
    src: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=1600&q=80",
    alt: "求職大頭照",
    title: "自信從照片開始",
    subtitle: "求職・履歷照",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/60">
              {slides[current].subtitle}
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight tracking-wide text-foreground sm:text-5xl md:text-7xl">
              {slides[current].title}
            </h1>
            <Link
              href="/portfolio"
              className="mt-6 inline-block border border-foreground/30 px-6 py-2.5 text-xs tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white sm:mt-8 sm:px-8 sm:py-3"
            >
              瀏覽作品
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? "w-8 bg-foreground" : "w-4 bg-foreground/30"
            }`}
            aria-label={`前往第 ${i + 1} 張`}
          />
        ))}
      </div>
    </section>
  );
}
