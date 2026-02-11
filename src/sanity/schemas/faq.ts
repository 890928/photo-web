import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "常見問題",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "問題",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "回答",
      type: "text",
      rows: 4,
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
    select: { title: "question" },
  },
});
