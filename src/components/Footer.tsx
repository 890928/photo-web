import Link from "next/link";
import { type SiteSettings } from "@/data/siteSettings";

export default function Footer({
  siteSettings,
}: {
  siteSettings: SiteSettings;
}) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg tracking-wider">
              {siteSettings.siteName}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteSettings.siteDescription}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-muted">
              網站導覽
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { href: "/portfolio", label: "作品集" },
                { href: "/about", label: "關於我們" },
                { href: "/services", label: "服務方案" },
                { href: "/contact", label: "聯絡我們" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-muted">
              聯絡資訊
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <span>{siteSettings.phone}</span>
              <span>{siteSettings.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:mt-16 md:pt-8 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}. 版權所有。</p>
          <div className="flex gap-6">
            <a
              href={siteSettings.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
