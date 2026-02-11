import { client, urlFor } from "./client";
import {
  heroSlidesQuery,
  portfolioQuery,
  siteSettingsQuery,
  servicePlansQuery,
  faqsQuery,
} from "./queries";
import {
  portfolioItems as staticPortfolio,
  type PortfolioItem,
} from "@/data/portfolio";
import {
  defaultSiteSettings,
  type SiteSettings,
} from "@/data/siteSettings";
import { services as staticServices, type ServicePlan } from "@/data/services";
import { defaultFAQs, type FAQ } from "@/data/faqs";

// Check if Sanity is configured
const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export interface HeroSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface SanityPortfolioItem {
  _id: string;
  src: string;
  alt: string;
  category: string;
  client: string;
  date: string;
  aspect: "portrait" | "landscape" | "square";
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  if (!isSanityConfigured) {
    return [
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
        alt: "韓式證件照",
        title: "最美的證件照",
        subtitle: "韓式證件照",
      },
      {
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80",
        alt: "韓式形象照",
        title: "專屬你的形象",
        subtitle: "韓式形象照",
      },
      {
        src: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=1600&q=80",
        alt: "求職大頭照",
        title: "自信從照片開始",
        subtitle: "求職・履歷照",
      },
    ];
  }

  try {
    const data = await client!.fetch(heroSlidesQuery);
    if (!data || data.length === 0) {
      return [];
    }
    return data.map(
      (item: { title: string; subtitle?: string; image: unknown }) => ({
        src: urlFor(item.image as Parameters<typeof urlFor>[0])
          .width(1600)
          .quality(80)
          .url(),
        alt: item.title,
        title: item.title,
        subtitle: item.subtitle || "",
      })
    );
  } catch {
    return [];
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (!isSanityConfigured) {
    return staticPortfolio;
  }

  try {
    const data = await client!.fetch(portfolioQuery);
    if (!data || data.length === 0) {
      return staticPortfolio;
    }
    return data.map(
      (
        item: {
          _id: string;
          title: string;
          image: unknown;
          category: string;
          date?: string;
          aspect?: string;
        },
        index: number
      ) => ({
        id: index + 1,
        src: urlFor(item.image as Parameters<typeof urlFor>[0])
          .width(800)
          .quality(80)
          .url(),
        alt: item.title,
        category: item.category,
        client: item.title,
        date: item.date || "",
        aspect: item.aspect || "portrait",
      })
    );
  } catch {
    return staticPortfolio;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return defaultSiteSettings;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await client!.fetch(siteSettingsQuery);
    if (!data) return defaultSiteSettings;

    return {
      siteName: data.siteName || defaultSiteSettings.siteName,
      siteDescription:
        data.siteDescription || defaultSiteSettings.siteDescription,
      phone: data.phone || defaultSiteSettings.phone,
      address: data.address || defaultSiteSettings.address,
      businessHours:
        data.businessHours || defaultSiteSettings.businessHours,
      facebookUrl: data.facebookUrl || defaultSiteSettings.facebookUrl,
      aboutTitle: data.aboutTitle || defaultSiteSettings.aboutTitle,
      aboutParagraphs:
        data.aboutParagraphs && data.aboutParagraphs.length > 0
          ? data.aboutParagraphs
          : defaultSiteSettings.aboutParagraphs,
      aboutFeatures:
        data.aboutFeatures && data.aboutFeatures.length > 0
          ? data.aboutFeatures
          : defaultSiteSettings.aboutFeatures,
      aboutImage: data.aboutImage
        ? urlFor(data.aboutImage as Parameters<typeof urlFor>[0])
            .width(800)
            .quality(80)
            .url()
        : defaultSiteSettings.aboutImage,
    };
  } catch {
    return defaultSiteSettings;
  }
}

export async function getServicePlans(): Promise<ServicePlan[]> {
  if (!isSanityConfigured) return staticServices;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = await client!.fetch(servicePlansQuery);
    if (!data || data.length === 0) return staticServices;

    return data.map((item, index) => ({
      id: index + 1,
      name: item.name,
      price: item.price,
      description: item.description || "",
      features: item.features || [],
      popular: item.popular || false,
    }));
  } catch {
    return staticServices;
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  if (!isSanityConfigured) return defaultFAQs;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = await client!.fetch(faqsQuery);
    if (!data || data.length === 0) return defaultFAQs;

    return data.map((item) => ({
      question: item.question,
      answer: item.answer,
    }));
  } catch {
    return defaultFAQs;
  }
}

export type { SiteSettings, ServicePlan, FAQ };
