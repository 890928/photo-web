export type Category = "all" | "id-photo" | "profile" | "job" | "graduation" | "group";

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  client?: string;
  date?: string;
  aspect: "portrait" | "landscape" | "square";
}

export const categories: { key: Category; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "id-photo", label: "韓式證件照" },
  { key: "profile", label: "形象照" },
  { key: "job", label: "求職照" },
  { key: "graduation", label: "畢業照" },
  { key: "group", label: "團體・閨蜜" },
];

// 示範圖片 — 請替換為實際攝影作品
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "韓式證件照 — 男性",
    category: "id-photo",
    client: "韓式證件照",
    date: "2024.11",
    aspect: "portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    alt: "韓式證件照 — 女性",
    category: "id-photo",
    client: "韓式證件照",
    date: "2024.10",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "個人形象照",
    category: "profile",
    client: "形象照",
    date: "2024.09",
    aspect: "portrait",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=800&q=80",
    alt: "男性求職照",
    category: "job",
    client: "求職履歷照",
    date: "2024.08",
    aspect: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    alt: "女性求職照",
    category: "job",
    client: "求職履歷照",
    date: "2024.07",
    aspect: "portrait",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    alt: "韓式形象寫真",
    category: "profile",
    client: "形象照",
    date: "2024.06",
    aspect: "portrait",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
    alt: "畢業照 — 學士服",
    category: "graduation",
    client: "畢業紀念照",
    date: "2024.06",
    aspect: "portrait",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    alt: "閨蜜合照",
    category: "group",
    client: "閨蜜照",
    date: "2024.05",
    aspect: "landscape",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    alt: "專業商務形象照",
    category: "profile",
    client: "商務形象照",
    date: "2024.04",
    aspect: "portrait",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    alt: "韓式證件照 — 柔光",
    category: "id-photo",
    client: "韓式證件照",
    date: "2024.03",
    aspect: "portrait",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    alt: "LinkedIn 形象照",
    category: "job",
    client: "LinkedIn 大頭照",
    date: "2024.02",
    aspect: "portrait",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    alt: "團體紀念照",
    category: "group",
    client: "團體照",
    date: "2024.01",
    aspect: "landscape",
  },
];
