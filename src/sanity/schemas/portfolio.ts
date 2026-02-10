import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolio",
  title: "作品集",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "標題",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "照片",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "分類",
      type: "string",
      options: {
        list: [
          { title: "韓式證件照", value: "id-photo" },
          { title: "形象照", value: "profile" },
          { title: "求職照", value: "job" },
          { title: "畢業照", value: "graduation" },
          { title: "團體・閨蜜", value: "group" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "日期",
      type: "string",
      description: "例如：2024.11",
    }),
    defineField({
      name: "aspect",
      title: "比例",
      type: "string",
      options: {
        list: [
          { title: "直式 (3:4)", value: "portrait" },
          { title: "橫式 (4:3)", value: "landscape" },
          { title: "正方形", value: "square" },
        ],
      },
      initialValue: "portrait",
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
      subtitle: "category",
      media: "image",
    },
  },
});
