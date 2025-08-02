export default {
  name: "accordionItem",
  title: "Accordion Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(200),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "home" },
                      { type: "about" },
                      { type: "anxiety" },
                      { type: "eating-disorder" },
                      { type: "group" },
                      { type: "consultation" },
                      { type: "contact" },
                      { type: "blog1" },
                      { type: "blog2" },
                      { type: "blog3" },
                      { type: "blog4" },
                      { type: "blog5" },
                      { type: "blog6" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
    },
    prepare({ title, content }) {
      const block = (content || []).find((block) => block._type === "block");
      const subtitle = block
        ? block.children
            ?.filter((child) => child._type === "span")
            ?.map((span) => span.text)
            ?.join("")
        : "";
      return {
        title: title || "Untitled",
        subtitle: subtitle ? `${subtitle.slice(0, 50)}...` : "No content",
      };
    },
  },
};