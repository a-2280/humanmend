import { PortableText } from "@portabletext/react";
import Link from "next/link";

const PortableTextRenderer = ({ content }) => {
  const components = {
    block: {
      normal: ({ children }) => <p className="body-small">{children}</p>,
      h3: ({ children }) => <h3 className="heading-2">{children}</h3>,
      h4: ({ children }) => <h4 className="heading-3">{children}</h4>,
    },
    list: {
      bullet: ({ children }) => <ul className="body-small">{children}</ul>,
      number: ({ children }) => <ol className="body-small">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="ml-4 md:ml-5 lg:m-0">
          <span className="body-text ml-[-1rem] mr-2 md:ml-[-.75rem] lg:mx-2">
            •
          </span>
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className="ml-4 md:ml-5 lg:m-0">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => {
        const { href, blank } = value;
        const target = blank ? "_blank" : undefined;
        const rel = blank ? "noopener noreferrer" : undefined;
        
        return (
          <a
            href={href}
            target={target}
            rel={rel}
            className="border-b-1"
          >
            {children}
          </a>
        );
      },
      internalLink: ({ children, value }) => {
        const { reference } = value;
        
        // Map document types to their routes
        const routeMap = {
          home: "/",
          about: "/about",
          anxiety: "/anxiety-therapy",
          "eating-disorder": "/eating-disorder-therapy",
          group: "/group-therapy",
          consultation: "/consultation",
          contact: "/contact",
          blog1: "/blog-post-1",
          blog2: "/blog-post-2",
          blog3: "/blog-post-3",
          blog4: "/blog-post-4",
          blog5: "/blog-post-5",
          blog6: "/blog-post-6",
        };
        
        const route = routeMap[reference?._type] || "/";
        
        return (
          <Link href={route} className="border-b-1">
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <div className="mb-[24px]">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default PortableTextRenderer;