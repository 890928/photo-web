import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioContent from "@/components/PortfolioContent";
import { getPortfolioItems } from "@/sanity/fetch";

export default async function PortfolioPage() {
  const items = await getPortfolioItems();

  return (
    <PageTransition>
      <div className="pt-24 pb-16 md:pt-28 md:pb-24">
        {/* 標題 */}
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              Portfolio
            </p>
            <h1 className="mt-3 font-serif text-2xl tracking-wide sm:text-4xl md:text-5xl">
              作品集
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
              精選作品展示——從韓式證件照到形象寫真，每一張都是自然好看的呈現。
            </p>
          </ScrollReveal>
        </div>

        <PortfolioContent items={items} />
      </div>
    </PageTransition>
  );
}
