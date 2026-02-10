import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSlide",
  title: "首頁輪播",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "主標題",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "副標題",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "背景圖片",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "排序（數字越小越前面）",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "排序",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
    },
  },
});
