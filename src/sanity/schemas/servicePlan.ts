import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicePlan",
  title: "服務方案",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "方案名稱",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "價格",
      type: "string",
      description: "例如：NT$ 800",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "方案說明",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "方案特色",
      type: "array",
      of: [{ type: "string" }],
      description: "列點說明包含的項目",
    }),
    defineField({
      name: "popular",
      title: "標記為熱門方案",
      type: "boolean",
      initialValue: false,
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
    select: { title: "name", subtitle: "price" },
  },
});
