export interface FAQ {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQ[] = [
  {
    question: "需要預約嗎？",
    answer:
      "證件照免預約，隨到隨拍。形象寫真與團體拍攝建議提前 2-3 天預約，以確保時段。",
  },
  {
    question: "拍攝完多久可以取件？",
    answer:
      "標準證件照最快 15 分鐘取件。韓式證件照與形象照約 30-60 分鐘，視修圖複雜度而定。急件可另外安排。",
  },
  {
    question: "韓式證件照跟一般證件照差在哪？",
    answer:
      "韓式證件照採用專業柔光打光，搭配精緻的韓式修圖技術，自然地優化膚色與輪廓，拍出來更好看、更有精神，同時仍符合各式證件規格要求。",
  },
  {
    question: "可以自己帶服裝來拍嗎？",
    answer:
      "當然可以！建議穿著素色、有領的上衣效果最佳。形象照拍攝也歡迎多帶幾套衣服替換。",
  },
];
