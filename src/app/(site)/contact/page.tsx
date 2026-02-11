import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const contactInfo = [
    {
      label: "電話",
      value: settings.phone,
      href: `tel:${settings.phone.replace(/\s/g, "")}`,
    },
    {
      label: "地址",
      value: settings.address,
    },
    {
      label: "營業時間",
      value: settings.businessHours,
    },
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16 md:pt-28 md:pb-24">
        {/* 標題 */}
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-2xl tracking-wide sm:text-4xl md:text-5xl">
              聯絡我們
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
              歡迎直接到店拍攝，或提前聯繫我們預約時段。
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 px-4 md:mt-20 md:gap-16 md:px-6 md:grid-cols-2">
          {/* 聯絡資訊 */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-2xl tracking-wide">
                工作室資訊
              </h2>
              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="border-b border-border pb-4">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 block text-sm transition-colors hover:text-accent"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">
                  社群媒體
                </p>
                <div className="mt-3 flex gap-6">
                  <a
                    href={settings.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 聯絡表單 */}
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
}
