import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg tracking-wider">
              小琳數位照相館
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              新北土城韓式證件照專門店。韓式打光、精緻修圖，拍出自然好看的證件照與形象照。
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
              <span>0901 316 880</span>
              <span>新北市土城區金城路三段14號B1</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:mt-16 md:pt-8 md:flex-row">
          <p>&copy; {new Date().getFullYear()} 小琳數位照相館. 版權所有。</p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091406895193"
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
