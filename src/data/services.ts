export interface ServicePlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const services: ServicePlan[] = [
  {
    id: 1,
    name: "標準證件照",
    price: "NT$ 400",
    description: "護照、身分證、駕照等各式證件照",
    features: [
      "專業棚拍",
      "韓式柔光打光",
      "基礎修容修圖",
      "符合各式證件規格",
      "6 張沖印 + 電子檔",
    ],
  },
  {
    id: 2,
    name: "韓式證件照",
    price: "NT$ 800",
    description: "韓式美顏修圖，拍出最美證件照",
    features: [
      "專業棚拍",
      "韓式柔光打光",
      "韓式精緻修容修圖",
      "膚色校正 & 細節優化",
      "可選背景色",
      "6 張沖印 + 電子檔",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "求職形象照",
    price: "NT$ 1,500",
    description: "履歷大頭照・LinkedIn 專業形象",
    features: [
      "15 分鐘棚拍",
      "多角度拍攝",
      "精選 3 張精修",
      "韓式精緻修圖",
      "可選背景色",
      "高解析度電子檔",
    ],
  },
  {
    id: 4,
    name: "韓式形象寫真",
    price: "NT$ 2,800",
    description: "個人形象照・閨蜜照・畢業照",
    features: [
      "30 分鐘棚拍",
      "多組造型拍攝",
      "精選 8 張精修",
      "韓式精緻修圖",
      "可選多種背景",
      "高解析度電子檔",
      "可加購沖印",
    ],
  },
];
