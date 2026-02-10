import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "小琳數位照相館 | 新北土城韓式證件照",
    template: "%s | 小琳數位照相館",
  },
  description:
    "小琳數位照相館，新北市土城韓式證件照專門店。韓式打光、精緻修圖，提供韓式證件照、求職形象照、畢業照、閨蜜照等專業拍攝服務。",
  keywords: [
    "小琳數位照相館",
    "韓式證件照",
    "土城證件照",
    "韓式大頭照",
    "求職照",
    "形象照",
    "新北證件照",
    "土城照相館",
  ],
  openGraph: {
    title: "小琳數位照相館 | 新北土城韓式證件照",
    description:
      "新北土城韓式證件照專門店。韓式打光、精緻修圖，拍出自然好看的你。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
