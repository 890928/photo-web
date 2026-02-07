"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 md:pt-28 md:pb-24">
        {/* 標題 */}
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              Services
            </p>
            <h1 className="mt-3 font-serif text-2xl tracking-wide sm:text-4xl md:text-5xl">
              拍攝方案與價格
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
              透明合理的價格，從證件照到形象寫真，滿足您不同場合的需求。
            </p>
          </ScrollReveal>
        </div>

        {/* 方案卡片 */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:mt-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
          {services.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col border p-6 transition-all duration-300 hover:shadow-lg md:p-8 ${
                  plan.popular
                    ? "border-accent bg-card shadow-md"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 text-[10px] tracking-[0.15em] uppercase text-white">
                    最受歡迎
                  </span>
                )}

                <div className="text-center">
                  <h3 className="font-serif text-xl">{plan.name}</h3>
                  <p className="mt-4 font-serif text-3xl tracking-wide">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-8 block py-3 text-center text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-accent"
                      : "border border-foreground/20 text-foreground hover:border-accent hover:bg-accent hover:text-white"
                  }`}
                >
                  立即預約
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 常見問題 */}
        <section className="mx-auto mt-16 max-w-2xl px-4 text-center md:mt-24 md:px-6">
          <ScrollReveal>
            <h2 className="font-serif text-2xl tracking-wide">
              常見問題
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-8 text-left">
            {[
              {
                q: "需要預約嗎？",
                a: "證件照免預約，隨到隨拍。形象寫真與團體拍攝建議提前 2-3 天預約，以確保時段。",
              },
              {
                q: "拍攝完多久可以取件？",
                a: "標準證件照最快 15 分鐘取件。韓式證件照與形象照約 30-60 分鐘，視修圖複雜度而定。急件可另外安排。",
              },
              {
                q: "韓式證件照跟一般證件照差在哪？",
                a: "韓式證件照採用專業柔光打光，搭配精緻的韓式修圖技術，自然地優化膚色與輪廓，拍出來更好看、更有精神，同時仍符合各式證件規格要求。",
              },
              {
                q: "可以自己帶服裝來拍嗎？",
                a: "當然可以！建議穿著素色、有領的上衣效果最佳。形象照拍攝也歡迎多帶幾套衣服替換。",
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="border-b border-border pb-6">
                  <h3 className="text-sm font-medium">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
