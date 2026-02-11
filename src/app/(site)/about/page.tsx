import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

const equipment = [
  "韓國進口專業攝影棚燈",
  "多色無縫背景紙系統",
  "專業級人像鏡頭",
  "高解析度數位相機",
  "韓式柔光箱 & 反光板",
  "專業修圖工作站",
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <PageTransition>
      <div className="pt-24 pb-16 md:pt-28 md:pb-24">
        {/* 標題 */}
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              About
            </p>
            <h1 className="mt-3 font-serif text-2xl tracking-wide sm:text-4xl md:text-5xl">
              關於{settings.siteName}
            </h1>
          </ScrollReveal>
        </div>

        {/* 店家介紹 */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 md:mt-20 md:gap-16 md:px-6 md:grid-cols-2 md:items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[3/4]">
              <Image
                src={settings.aboutImage}
                alt={`${settings.siteName}店面`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-2xl tracking-wide md:text-3xl">
                {settings.aboutTitle}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                {settings.aboutParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 我們的特色 */}
        <section className="mt-16 bg-card md:mt-24">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-muted">
                  Our Difference
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
                  為什麼選擇我們
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  我們用韓國最流行的拍攝與修圖技術，結合多年的人像攝影經驗，讓每一張照片都兼具專業規格與自然美感。
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {settings.aboutFeatures.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="text-center">
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 設備 */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted">
                Equipment
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-wide">
                專業設備
              </h2>
              <p className="mt-4 text-sm text-muted">
                引進韓國專業攝影器材，為您呈現最高品質的影像。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-12 grid max-w-lg gap-3">
              {equipment.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-border py-3"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
}
