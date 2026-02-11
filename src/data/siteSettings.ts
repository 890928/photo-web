export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  phone: string;
  address: string;
  businessHours: string;
  facebookUrl: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutFeatures: { title: string; description: string }[];
  aboutImage: string;
}

export const defaultSiteSettings: SiteSettings = {
  siteName: "小琳數位照相館",
  siteDescription:
    "新北土城韓式證件照專門店。韓式打光、精緻修圖，拍出自然好看的證件照與形象照。",
  phone: "0901 316 880",
  address: "新北市土城區金城路三段14號B1",
  businessHours: "週一至週六 10:00 - 19:00",
  facebookUrl: "https://www.facebook.com/profile.php?id=100091406895193",
  aboutTitle: "韓式證件照專門店",
  aboutParagraphs: [
    "小琳數位照相館位於新北市土城區，是一間專注於韓式證件照與形象照的專業照相館。我們引進韓國最新的打光技術與修圖美學，讓每位顧客都能擁有一張自然好看、令人滿意的照片。",
    "不同於傳統快照店，我們注重每一個細節：從燈光角度、拍攝姿勢到後期修圖，都以韓式美學標準精心處理。讓證件照不再只是「堪用」，而是真正好看的一張照片。",
    "無論是護照、身分證、求職履歷，還是想為自己拍一組形象照，我們都能為您提供最專業的服務。",
  ],
  aboutFeatures: [
    {
      title: "韓式打光",
      description:
        "採用韓國專業攝影棚燈與柔光技術，打造均勻細膩的光線，讓膚質看起來自然透亮。",
    },
    {
      title: "精緻修圖",
      description:
        "韓式修圖不是過度美顏，而是自然地優化膚色、修飾輪廓，讓你看起來就是最好的自己。",
    },
    {
      title: "快速取件",
      description:
        "拍攝完成後最快 15 分鐘即可取件，急件也不用擔心。電子檔同步提供，隨時可用。",
    },
  ],
  aboutImage:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
};
