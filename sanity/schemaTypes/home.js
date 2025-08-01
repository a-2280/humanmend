export default {
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    },
    {
      name: "heroParagraph",
      title: "Hero Paragraph",
      type: "text",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
    },
    {
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
    },
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
      name: "section1Paragraph2",
      title: "Section 1 Paragraph 2",
      type: "text",
    },
    {
      name: "section2Heading",
      title: "Section 2 Heading",
      type: "string",
    },
    {
      name: "section2Paragraph",
      title: "Section 2 Paragraph",
      type: "text",
    },
    {
      name: "listItems",
      title: "List Items",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "section2Subheading",
      title: "Section 2 Subheading",
      type: "text",
    },
    {
      name: "section2ButtonText",
      title: "Section 2 Button Text",
      type: "string",
    },
    {
      name: "section3Heading",
      title: "Section 3 Heading",
      type: "string",
    },
    {
      name: "section3Paragraph",
      title: "Section 3 Paragraph",
      type: "string",
    },
    {
      name: "section3Paragraph2",
      title: "Section 3 Paragraph 2",
      type: "string",
    },
    {
      name: "section3Paragraph3",
      title: "Section 3 Paragraph 3",
      type: "string",
    },

    {
      name: "section3Subheading",
      title: "Section 3 Subheading",
      type: "string",
    },
    {
      name: "section3ButtonText",
      title: "Section 3 Button Text",
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
      name: "seoImage",
      title: "Social Media Image",
      type: "image",
      description: "Custom image for social media sharing. Leave empty to use default.",
    },
  ],
};
