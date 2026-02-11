import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { getHeroSlides, getPortfolioItems, getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export default async function Home() {
  const [heroSlides, portfolioItems, siteSettings] = await Promise.all([
    getHeroSlides(),
    getPortfolioItems(),
    getSiteSettings(),
  ]);

  const featured = portfolioItems.slice(0, 6);

  return (
    <PageTransition>
      {/* Hero 區域 */}
      <Hero slides={heroSlides.length > 0 ? heroSlides : undefined} />

      {/* 精選作品 */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-2xl tracking-wide sm:text-3xl md:text-4xl">
              作品展示
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-4 md:mt-16 lg:grid-cols-3">
          {featured.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-border">
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
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block border border-foreground/20 px-8 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              瀏覽全部作品
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 工作室介紹 */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:gap-12 md:px-6 md:py-24 md:grid-cols-2 md:items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[3/4]">
              <Image
                src={siteSettings.aboutImage}
                alt="攝影師工作中"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-muted">
                About Studio
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug tracking-wide md:text-4xl">
                {siteSettings.aboutTitle}
              </h2>
              {siteSettings.aboutParagraphs.slice(0, 2).map((p, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "mt-6" : "mt-4"} text-sm leading-relaxed text-muted`}
                >
                  {p}
                </p>
              ))}
              <Link
                href="/about"
                className="mt-8 inline-block text-xs tracking-[0.2em] uppercase text-foreground underline underline-offset-4 transition-colors hover:text-accent"
              >
                了解更多
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA 區域 */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-muted">
            Book Now
          </p>
          <h2 className="mt-3 font-serif text-2xl tracking-wide sm:text-3xl md:text-4xl">
            拍出你的最佳形象
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            無需預約，隨到隨拍。也歡迎提前聯繫我們，預留您的專屬拍攝時段。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-background transition-all duration-300 hover:bg-accent"
          >
            立即預約
          </Link>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
