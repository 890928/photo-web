import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "網站設定",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "網站名稱",
      type: "string",
      initialValue: "小琳數位照相館",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "網站簡介",
      type: "text",
      description: "顯示在頁尾與 SEO",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "電話",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "地址",
      type: "string",
    }),
    defineField({
      name: "businessHours",
      title: "營業時間",
      type: "string",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook 連結",
      type: "url",
    }),
    defineField({
      name: "aboutTitle",
      title: "關於我們 — 標題",
      type: "string",
    }),
    defineField({
      name: "aboutParagraphs",
      title: "關於我們 — 介紹段落",
      type: "array",
      of: [{ type: "text" }],
      description: "每一項是一個段落",
    }),
    defineField({
      name: "aboutFeatures",
      title: "關於我們 — 三大特色",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "標題" }),
            defineField({
              name: "description",
              type: "text",
              title: "說明",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "aboutImage",
      title: "關於我們 — 照片",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "網站設定" };
    },
  },
});
