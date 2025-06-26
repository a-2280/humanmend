"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function BlogPostSix() {
  const [blog6Content, setBlog6Content] = useState(null);

  useEffect(() => {
    const query = `*[_type == "blog6"][0]`;

    client.fetch(query).then((data) => {
      setBlog6Content(data);
    });
  }, []);

  if (!blog6Content) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[240px] mb-[40px] lg:mb-[96px] flex flex-col justify-center items-center px-[20px] md:px-[43px]">
        <h1 className="heading-1">{blog6Content.title}</h1>
        <h2 className="heading-2 mt-1 lg:mt-[24px] mb-[24px] lg:mb-[48px]">
          {blog6Content.subtitle}
        </h2>
        <p className="body-small">{blog6Content.author}</p>
      </section>
      <section className="px-[20px] md:px-[43px]">
        <Image src="/flower-2.png" alt="flowers" width={692} height={490} />
      </section>
      <section className="px-[20px] md:px-[43px] mt-[40px] lg:mt-[96px] mb-[80px] lg:mb-[64px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="body-text">{blog6Content.section1Paragraph}</p>
            <p className="body-text">
              <span className="lg:ml-4"></span>
              {blog6Content.section1Paragraph1}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[400px]">
            {blog6Content.section2Heading}
          </h1>
          <div>
            <p className="body-text">{blog6Content.section2Paragraph}</p>
            <p className="body-text">
              <span className="lg:ml-4"></span>
              {blog6Content.section2Paragraph1}
            </p>
            <p className="body-text">
              <span className="lg:ml-4"></span>
              {blog6Content.section2Paragraph2}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog6Content.section3Heading}
          </h1>
          <div>
            <p className="body-text">{blog6Content.section3Paragraph}</p>
            <div className="body-text flex mt-[24px]">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Dread while shopping for swimsuits or trying on seasonal clothes
              </p>
            </div>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">Obsessive comparison in public spaces</p>
            </div>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Avoiding social plans tied to water, sun, or exposure
              </p>
            </div>
            <div className="body-text flex mb-[24px]">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Feeling stuck in a loop of negative self-talk
              </p>
            </div>
            <div className="body-text flex mb-[24px]">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Being physically present, but mentally miles away—too distracted
                by body thoughts to enjoy the moment
              </p>
            </div>
            <p className="body-text">
              <span className="lg:ml-4"></span>
              {blog6Content.section3Paragraph1}
            </p>
          </div>

          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[400px]">
            {blog6Content.section4Heading}
          </h1>
          <div>
            <p className="body-text">{blog6Content.section4Paragraph}</p>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">
                01. Curate a body-neutral media space
              </h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Pay attention to the accounts or content that stir up
                  comparison or self-doubt. Unfollow, mute, or take a break.
                  Instead, follow creators who celebrate all bodies or who focus
                  on summer fun without tying it to appearance. 
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">
                02. Practice compassionate self-talk
              </h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`Trying on summer clothes or swimwear can be triggering.
                  Instead of defaulting to criticism, meet yourself with
                  kindness. "This is the body I have, and it deserves to be
                  comfortable." "I don't have to love how I look to be kind to
                  myself."`}
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">
                03. Build a joyful, affirming summer wardrobe
              </h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Prioritize comfort above all else. Soft fabrics, breathable
                  materials, clothes that let you move freely — focus on what
                  helps you feel good in your body, not just about it. Choose
                  items that make you smile when you wear them, regardless of
                  what fashion “rules” might say.
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">04. Prepare for body comments</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Unfortunately, unsolicited body talk happens. A few go-to
                  responses can help you feel grounded. Try:
                </p>
              </div>
            </div>
            <div className="body-text flex ml-12">
              <p className="body-text mx-2 w-4 flex justify-end items-start">
                i.
              </p>
              <p className="body-text">
                I’m focusing on how I feel, not how I look.”
              </p>
            </div>
            <div className="body-text flex ml-12">
              <p className="body-text mx-2 w-4 flex justify-end items-start">
                ii.
              </p>
              <p className="body-text">
                “I’m working on appreciating my body for what it can do, not how
                it looks.”
              </p>
            </div>
            <div className="body-text flex ml-12">
              <p className="body-text mx-2 w-4 flex justify-end items-start">
                iii.
              </p>
              <p className="body-text">
                “Bodies change—it’s normal. Let’s talk about something else.”
              </p>
            </div>
            <div className="body-text flex ml-12">
              <p className="body-text mx-2 w-4 flex justify-end items-start">
                iv.
              </p>
              <p className="body-text">
                “I have a personal rule not to discuss bodies or weight at
                social gatherings.”
              </p>
            </div>
            <div className="body-text flex ml-12">
              <p className="body-text mx-2 w-4 flex justify-end items-start">
                v.
              </p>
              <p className="body-text">
                Or even a simple and direct: “I’m not comfortable with body
                comments.” 
              </p>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">05. Set your summer intentions</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  What do you want to feel this season — connected, free,
                  playful, grounded? Make a list that has nothing to do with
                  your appearance. Let those be the goals.
                </p>
              </div>
            </div>
            <p className="body-text">{blog6Content.section4Paragraph1}</p>
          </div>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[275px]">
          {blog6Content.section5Heading}
        </h1>
        <div>
          <p className="body-text">{blog6Content.section5Paragraph}</p>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[250px] lg:max-w-[325px]">
          {blog6Content.section6Heading}
        </h1>
        <div>
          <p className="body-text">{blog6Content.section6Paragraph}</p>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[156px] px-[20px] md:px-[43px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <h1 className="heading-1 mb-[37px] max-w-[200px]">
          {blog6Content.referenceHeading}
        </h1>
        <hr className="mb-[24px]" />
        {blog6Content.listItems &&
          blog6Content.listItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-start items-start w-full">
                <p className="body-small !text-left">{item}</p>
              </div>
              {index < blog6Content.listItems.length - 1 && (
                <hr className="my-[15px] lg:my-[24px]" />
              )}
            </div>
          ))}
        <hr className="mt-[24px]" />
        <h2 className="heading-2 mt-[80px] lg:mt-[96px] mb-[24px] lg:mb-[48px] lg:max-w-[400px]">
          {blog6Content.referenceSubheading}
        </h2>
        <button className="button-main" href="#">
          {blog6Content.referenceButton}
        </button>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
