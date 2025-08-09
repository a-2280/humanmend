export default {
  name: "group",
  title: "Group Therapy",
  type: "document",
  fields: [
    {
      name: "section1Heading",
      title: "Section 1 Heading",
      type: "string",
    },
    {
      name: "section1Paragraph",
      title: "Section 1 Paragraph",
      type: "text",
    },
    {
      name: "section1Subheading",
      title: "Section 1 Subheading",
      type: "string",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom page title for search engines. Leave empty to use default.",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Custom meta description for search engines (150-160 characters recommended). Leave empty to use default.",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
      description: "Custom keywords for this page, separated by commas. Leave empty to use default.",
    },
    {
      name: "seoImageAlt",
      title: "Social Media Image Alt Text",
      type: "string",
      description: "Alt text for the default social media image. Describes the image for accessibility and SEO.",
    },
  ],
};
