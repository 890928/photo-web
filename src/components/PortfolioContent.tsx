"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import { categories, type Category, type PortfolioItem } from "@/data/portfolio";

export default function PortfolioContent({
  items,
}: {
  items: PortfolioItem[];
}) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const openLightbox = (item: PortfolioItem) => {
    const idx = filtered.indexOf(item);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* 分類篩選器 */}
      <ScrollReveal delay={0.15}>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-12 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === cat.key
                  ? "border-b border-foreground text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* 瀑布流 */}
      <div className="mx-auto mt-8 max-w-7xl px-4 md:mt-16 md:px-6">
        <div className="columns-2 gap-2 sm:gap-4 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mb-2 break-inside-avoid sm:mb-4"
              >
                <div
                  className={`group relative cursor-pointer overflow-hidden bg-border ${
                    item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : item.aspect === "square"
                        ? "aspect-square"
                        : "aspect-[4/3]"
                  }`}
                  onClick={() => openLightbox(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="font-serif text-lg text-white">
                      {item.client}
                    </p>
                    <p className="mt-1 text-xs tracking-wider text-white/70">
                      {item.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + filtered.length) % filtered.length
          )
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % filtered.length)
        }
      />
    </>
  );
}
