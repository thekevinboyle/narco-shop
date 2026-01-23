import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline Lines",
      type: "array",
      of: [{ type: "string" }],
      description: "Each line of the hero tagline",
    }),
    defineField({
      name: "aboutText",
      title: "About Page Text",
      type: "object",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
        }),
        defineField({
          name: "subheadline",
          title: "Subheadline",
          type: "string",
        }),
        defineField({
          name: "email",
          title: "Contact Email",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
