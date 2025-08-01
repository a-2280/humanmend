export default {
  name: "seo",
  title: "SEO Settings",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "Name of the website (e.g., HumanMend)",
    },
    {
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Main website URL (e.g., https://humanmend.com)",
    },
    {
      name: "defaultTitle",
      title: "Default Page Title",
      type: "string",
      description: "Default title for pages without custom titles",
    },
    {
      name: "defaultDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
      description:
        "Default description for pages without custom descriptions (150-160 characters recommended)",
    },
    {
      name: "defaultKeywords",
      title: "Default Keywords",
      type: "string",
      description: "Default keywords separated by commas",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      description: "Default author name (e.g., Lindsie Meek, LCSW)",
    },
    {
      name: "twitterHandle",
      title: "Twitter Handle",
      type: "string",
      description: "Twitter username without @ symbol",
    },
  ],
  preview: {
    select: {
      title: "siteName",
      subtitle: "siteUrl",
    },
  },
};
