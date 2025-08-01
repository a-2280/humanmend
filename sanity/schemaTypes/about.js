export default {
  name: "about",
  title: "About Page",
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
      name: "section1Button",
      title: "Section 1 Button",
      type: "string",
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
      name: "section2Paragraph1",
      title: "Section 2 Paragraph 1",
      type: "text",
    },
    {
      name: "section2Paragraph2",
      title: "Section 2 Paragraph 2",
      type: "text",
    },
    {
      name: "section3Heading",
      title: "Section 3 Heading",
      type: "string",
    },
    {
      name: "section3Paragraph",
      title: "Section 3 Paragraph",
      type: "text",
    },
    {
      name: "section3Subheading",
      title: "Section 3 Subheading",
      type: "string",
    },
    {
      name: "section3Button",
      title: "Section 3 Button",
      type: "string",
    },
    {
      name: "section4Heading",
      title: "Section 4 Heading",
      type: "string",
    },
    {
      name: "section4Paragraph",
      title: "Section 4 Paragraph",
      type: "text",
    },
    {
      name: "listItems",
      title: "List Items",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "section4Paragraph1",
      title: "Section 4 Paragraph 1",
      type: "text",
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
