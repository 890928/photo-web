import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { getServicePlans, getFAQs } from "@/sanity/fetch";

export const revalidate = 60;

export default async function ServicesPage() {
  const [services, faqs] = await Promise.all([
    getServicePlans(),
    getFAQs(),
  ]);

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
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="border-b border-border pb-6">
                  <h3 className="text-sm font-medium">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {faq.answer}
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
