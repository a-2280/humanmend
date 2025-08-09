export default {
  name: "eating-disorder",
  title: "Eating Disorder Therapy",
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
      name: "accordionItems",
      title: "Accordion Items",
      type: "array",
      of: [{ type: "accordionItem" }],
      description: "Items for the 'We've got secrets' accordion section",
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
