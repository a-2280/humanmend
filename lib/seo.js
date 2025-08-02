import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "syhv6kt4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const DEFAULT_SEO = {
  title: "HumanMend | Eating Disorder & Anxiety Therapy in NYC",
  description: "Expert eating disorder and anxiety therapy in NYC. HAES-aligned, LGBTQIA+ affirming practice serving NY, NJ, CT, MA, CO. Free consultation available.",
  keywords: "eating disorder therapy NYC, anxiety therapy Manhattan, HAES therapist, LGBTQIA+ affirming therapy, DBT therapy New York, EMDR therapist NYC",
  author: "Lindsie Meek, LCSW",
  siteName: "HumanMend",
  siteUrl: "https://humanmend.com",
};

// Page-specific SEO defaults for when Sanity data is missing
const PAGE_SPECIFIC_SEO = {
  home: {
    title: "HumanMend | Eating Disorder & Anxiety Therapy in NYC",
    description: "Expert eating disorder and anxiety therapy in NYC. HAES-aligned, LGBTQIA+ affirming practice serving NY, NJ, CT, MA, CO. Free consultation available.",
    keywords: "eating disorder therapy NYC, anxiety therapy Manhattan, HAES therapist, LGBTQIA+ affirming therapy, DBT therapy New York, EMDR therapist NYC",
  },
  about: {
    title: "About Lindsie Meek, LCSW | HumanMend Therapist NYC",
    description: "Meet Lindsie Meek, LCSW - experienced eating disorder and anxiety therapist in NYC. HAES-aligned, LGBTQIA+ affirming practice with specialized training in DBT and EMDR.",
    keywords: "Lindsie Meek LCSW, eating disorder therapist NYC, anxiety therapist Manhattan, HAES therapist, LGBTQIA+ affirming therapist, DBT therapist, EMDR therapist",
  },
  anxiety: {
    title: "Anxiety Therapy NYC | Evidence-Based Treatment | HumanMend",
    description: "Professional anxiety therapy in NYC. DBT, EMDR, and CBT approaches for anxiety disorders. LGBTQIA+ affirming, serving NY, NJ, CT, MA, CO. Free consultation.",
    keywords: "anxiety therapy NYC, anxiety therapist Manhattan, DBT therapy anxiety, EMDR anxiety treatment, CBT anxiety therapy, LGBTQIA+ anxiety therapist, panic disorder therapy NYC",
  },
  "eating-disorder": {
    title: "Eating Disorder Therapy NYC | HAES-Aligned Treatment | HumanMend",
    description: "Specialized eating disorder therapy in NYC. HAES-aligned, anti-diet approach for anorexia, bulimia, binge eating. LGBTQIA+ affirming practice. Free consultation available.",
    keywords: "eating disorder therapy NYC, HAES therapist, anti-diet therapist Manhattan, anorexia therapy NYC, bulimia therapy, binge eating disorder treatment, LGBTQIA+ eating disorder therapist",
  },
  group: {
    title: "Group Therapy NYC | Eating Disorder & Anxiety Support | HumanMend",
    description: "Join supportive group therapy sessions in NYC for eating disorders and anxiety. HAES-aligned, LGBTQIA+ affirming environment with experienced therapist Lindsie Meek, LCSW.",
    keywords: "group therapy NYC, eating disorder support group, anxiety support group Manhattan, HAES group therapy, LGBTQIA+ support group, DBT skills group NYC",
  },
  contact: {
    title: "Contact HumanMend | NYC Therapy Practice | Free Consultation",
    description: "Contact HumanMend for eating disorder and anxiety therapy in NYC. Serving NY, NJ, CT, MA, CO. HAES-aligned, LGBTQIA+ affirming practice. Free consultation available.",
    keywords: "contact therapist NYC, eating disorder therapy consultation, anxiety therapy NYC contact, HAES therapist contact, LGBTQIA+ affirming therapy NYC",
  },
  consultation: {
    title: "Free Consultation | HumanMend Therapy NYC | Get Started Today",
    description: "Schedule your free consultation with HumanMend. Learn about our eating disorder and anxiety therapy services in NYC. HAES-aligned, LGBTQIA+ affirming approach.",
    keywords: "free therapy consultation NYC, eating disorder therapy consultation, anxiety therapy consultation Manhattan, HAES therapist consultation, LGBTQIA+ therapy consultation",
  },
  blog: {
    title: "Mental Health Blog | HumanMend Therapy NYC | Expert Insights",
    description: "Read expert insights on eating disorders, anxiety, and mental health from Lindsie Meek, LCSW. HAES-aligned, evidence-based perspectives on therapy and recovery.",
    keywords: "mental health blog NYC, eating disorder blog, anxiety therapy blog, HAES blog, LGBTQIA+ mental health, therapy insights, recovery blog",
  },
  blog1: {
    title: "Mental Health Article | HumanMend Therapy Blog NYC",
    description: "Expert insights on mental health, eating disorders, and anxiety from NYC therapist Lindsie Meek, LCSW. Evidence-based, HAES-aligned perspectives.",
    keywords: "mental health article, eating disorder insights, anxiety therapy tips, HAES approach, therapy advice NYC",
  },
  blog2: {
    title: "Therapy Insights | HumanMend Mental Health Blog NYC",
    description: "Professional insights on therapy, mental health, and recovery from experienced NYC therapist. HAES-aligned, LGBTQIA+ affirming perspectives.",
    keywords: "therapy insights NYC, mental health advice, eating disorder recovery, anxiety management, HAES therapy",
  },
  blog3: {
    title: "Mental Wellness Article | HumanMend Therapy Blog NYC",
    description: "Expert guidance on mental wellness, eating disorders, and anxiety from NYC therapist Lindsie Meek, LCSW. Evidence-based, compassionate approach.",
    keywords: "mental wellness NYC, eating disorder help, anxiety support, therapy guidance, HAES mental health",
  },
  blog4: {
    title: "Recovery Insights | HumanMend Mental Health Blog NYC",
    description: "Professional insights on recovery, mental health, and therapy from experienced NYC therapist. HAES-aligned, LGBTQIA+ affirming practice.",
    keywords: "recovery insights NYC, mental health recovery, eating disorder recovery, anxiety recovery, therapy support",
  },
  blog5: {
    title: "Therapy Guidance | HumanMend Mental Health Blog NYC",
    description: "Expert therapy guidance and mental health insights from NYC therapist Lindsie Meek, LCSW. Evidence-based, HAES-aligned approach to healing.",
    keywords: "therapy guidance NYC, mental health guidance, eating disorder therapy, anxiety therapy, HAES approach",
  },
  blog6: {
    title: "Mental Health Support | HumanMend Therapy Blog NYC",
    description: "Professional mental health support and insights from experienced NYC therapist. HAES-aligned, LGBTQIA+ affirming perspectives on therapy and recovery.",
    keywords: "mental health support NYC, therapy support, eating disorder support, anxiety support, HAES therapy",
  },
};

function getPageSpecificSEO(schemaType) {
  return PAGE_SPECIFIC_SEO[schemaType] || DEFAULT_SEO;
}

export async function generateSEOMetadata(schemaType, slug = null) {
  try {
    const [globalSEO, pageData] = await Promise.all([
      client.fetch(`*[_type == "seo"][0]`),
      schemaType ? client.fetch(`*[_type == "${schemaType}"][0]`) : null,
    ]);

    // Get page-specific defaults for this route
    const pageDefaults = getPageSpecificSEO(schemaType);
    
    const seo = {
      title: pageData?.seoTitle || globalSEO?.defaultTitle || pageDefaults.title,
      description: pageData?.seoDescription || globalSEO?.defaultDescription || pageDefaults.description,
      keywords: pageData?.seoKeywords || globalSEO?.defaultKeywords || pageDefaults.keywords,
      author: globalSEO?.author || DEFAULT_SEO.author,
      siteName: globalSEO?.siteName || DEFAULT_SEO.siteName,
      siteUrl: globalSEO?.siteUrl || DEFAULT_SEO.siteUrl,
      ogImage: pageData?.seoImage || globalSEO?.ogImage,
    };

    const currentUrl = slug ? `${seo.siteUrl}/${slug}` : seo.siteUrl;

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      authors: [{ name: seo.author }],
      metadataBase: new URL(seo.siteUrl),
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: currentUrl,
        siteName: seo.siteName,
        type: "website",
        locale: "en_US",
        images: seo.ogImage ? [
          {
            url: seo.ogImage.asset?.url || seo.ogImage,
            width: 1200,
            height: 630,
            alt: seo.title,
          }
        ] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: seo.ogImage ? [seo.ogImage.asset?.url || seo.ogImage] : undefined,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: currentUrl,
      },
    };
  } catch (error) {
    console.error("Error generating SEO metadata:", error);
    
    // Use page-specific defaults even in error cases
    const pageDefaults = getPageSpecificSEO(schemaType);
    const fallbackUrl = slug ? `${DEFAULT_SEO.siteUrl}/${slug}` : DEFAULT_SEO.siteUrl;
    
    return {
      title: pageDefaults.title,
      description: pageDefaults.description,
      keywords: pageDefaults.keywords,
      authors: [{ name: DEFAULT_SEO.author }],
      metadataBase: new URL(DEFAULT_SEO.siteUrl),
      openGraph: {
        title: pageDefaults.title,
        description: pageDefaults.description,
        url: fallbackUrl,
        siteName: DEFAULT_SEO.siteName,
        type: "website",
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: pageDefaults.title,
        description: pageDefaults.description,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: fallbackUrl,
      },
    };
  }
}