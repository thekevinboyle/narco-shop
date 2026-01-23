import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sku",
      title: "SKU",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "Coffee", value: "Coffee" },
          { title: "Merch", value: "Merch" },
          { title: "Collab", value: "Collab" },
          { title: "New", value: "NEW" },
          { title: "Limited", value: "LIMITED" },
        ],
      },
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "origin",
      title: "Origin",
      type: "string",
    }),
    defineField({
      name: "process",
      title: "Process",
      type: "string",
      options: {
        list: [
          { title: "Natural", value: "Natural" },
          { title: "Washed", value: "Washed" },
          { title: "Honey", value: "Honey" },
          { title: "Anaerobic", value: "Anaerobic" },
        ],
      },
    }),
    defineField({
      name: "varietal",
      title: "Varietal",
      type: "string",
    }),
    defineField({
      name: "masl",
      title: "M.A.S.L. (Meters Above Sea Level)",
      type: "string",
    }),
    defineField({
      name: "notes",
      title: "Tasting Notes",
      type: "string",
    }),
    defineField({
      name: "collabNo",
      title: "Collab Number",
      type: "string",
    }),
    defineField({
      name: "batch",
      title: "Batch",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Coming Soon", value: "coming-soon" },
          { title: "Sold Out", value: "sold-out" },
        ],
      },
      initialValue: "available",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "shopifyProductId",
      title: "Shopify Product ID",
      type: "string",
      description: "Link to Shopify for checkout",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "productImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `$${subtitle}` : "",
        media,
      };
    },
  },
});
