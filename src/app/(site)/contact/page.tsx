"use client";

import { useState, FormEvent } from "react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      alert("發生錯誤，請稍後再試。");
    } finally {
      setLoading(false);
    }
  }

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
                {[
                  {
                    label: "電話",
                    value: "0901 316 880",
                    href: "tel:0901316880",
                  },
                  {
                    label: "地址",
                    value: "新北市土城區金城路三段14號B1",
                  },
                  {
                    label: "營業時間",
                    value: "週一至週六 10:00 - 19:00",
                  },
                ].map((info) => (
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
                    href="https://www.facebook.com/profile.php?id=100091406895193"
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
          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <h3 className="font-serif text-2xl">感謝您的來信！</h3>
                  <p className="mt-3 text-sm text-muted">
                    我們已收到您的訊息，將在 24 小時內回覆您。
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs tracking-[0.15em] uppercase text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    再傳送一則訊息
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/*
                  請將 YOUR_ACCESS_KEY 替換為您的 Web3Forms 金鑰。
                  可至 https://web3forms.com 免費註冊取得。
                */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="text-xs tracking-[0.15em] uppercase text-muted"
                  >
                    姓名
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs tracking-[0.15em] uppercase text-muted"
                  >
                    電子信箱
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-xs tracking-[0.15em] uppercase text-muted"
                  >
                    感興趣的服務
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
                  >
                    <option value="">請選擇服務項目</option>
                    <option value="id-photo">標準證件照</option>
                    <option value="korean-id">韓式證件照</option>
                    <option value="job-photo">求職形象照</option>
                    <option value="profile">韓式形象寫真</option>
                    <option value="graduation">畢業照</option>
                    <option value="group">團體照・閨蜜照</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs tracking-[0.15em] uppercase text-muted"
                  >
                    訊息內容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="請告訴我們您的拍攝需求..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-foreground py-4 text-xs tracking-[0.2em] uppercase text-background transition-all duration-300 hover:bg-accent disabled:opacity-50"
                >
                  {loading ? "傳送中..." : "送出訊息"}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
