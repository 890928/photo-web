"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const equipment = [
  "韓國進口專業攝影棚燈",
  "多色無縫背景紙系統",
  "專業級人像鏡頭",
  "高解析度數位相機",
  "韓式柔光箱 & 反光板",
  "專業修圖工作站",
];

export default function AboutPage() {
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
              關於小琳照相館
            </h1>
          </ScrollReveal>
        </div>

        {/* 店家介紹 */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 md:mt-20 md:gap-16 md:px-6 md:grid-cols-2 md:items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80"
                alt="小琳數位照相館店面"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-2xl tracking-wide md:text-3xl">
                韓式證件照專門店
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  小琳數位照相館位於新北市土城區，是一間專注於韓式證件照與形象照的專業照相館。我們引進韓國最新的打光技術與修圖美學，讓每位顧客都能擁有一張自然好看、令人滿意的照片。
                </p>
                <p>
                  不同於傳統快照店，我們注重每一個細節：從燈光角度、拍攝姿勢到後期修圖，都以韓式美學標準精心處理。讓證件照不再只是「堪用」，而是真正好看的一張照片。
                </p>
                <p>
                  無論是護照、身分證、求職履歷，還是想為自己拍一組形象照，我們都能為您提供最專業的服務。
                </p>
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
              {[
                {
                  title: "韓式打光",
                  desc: "採用韓國專業攝影棚燈與柔光技術，打造均勻細膩的光線，讓膚質看起來自然透亮。",
                },
                {
                  title: "精緻修圖",
                  desc: "韓式修圖不是過度美顏，而是自然地優化膚色、修飾輪廓，讓你看起來就是最好的自己。",
                },
                {
                  title: "快速取件",
                  desc: "拍攝完成後最快 15 分鐘即可取件，急件也不用擔心。電子檔同步提供，隨時可用。",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="text-center">
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.desc}
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
