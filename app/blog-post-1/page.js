"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function BlogPostOne() {
  const [blog1Content, setBlog1Content] = useState(null);

  useEffect(() => {
    const query = `*[_type == "blog1"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(([data]) => {
      setBlog1Content(data);
    });
  }, []);

  if (!blog1Content) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[150px] mb-[40px] lg:mb-[96px] flex flex-col justify-center items-center px-[20px] md:px-[43px]">
        <h1 className="heading-1">{blog1Content.title}</h1>
        <h2 className="heading-2 mt-1 lg:mt-[24px] mb-[24px] lg:mb-[48px]">
          {blog1Content.subtitle}
        </h2>
        <p className="body-small">{blog1Content.author}</p>
      </section>
      <section className="px-[44px]">
        <Image
          src="/blog-flower-3.png"
          alt="flowers"
          width={692}
          height={490}
        />
      </section>
      <section className="px-[44px] mt-[40px] lg:mt-[96px] mb-[80px] lg:mb-[64px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="body-text">{blog1Content.section1Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog1Content.section1Paragraph1}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog1Content.section2Heading}
          </h1>
          <div>
            <p className="body-text">{blog1Content.section2Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog1Content.section2Paragraph1}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[250px]">
            {blog1Content.section3Heading}
          </h1>
          <div>
            <p className="body-text">{blog1Content.section3Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog1Content.section3Paragraph1}
            </p>
          </div>

          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog1Content.section4Heading}
          </h1>
          <div>
            <p className="body-text">{blog1Content.section4Paragraph}</p>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">01. NAME WHAT’S BROKEN</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Let yourself notice what hurts. What shifted. What’s been hard
                  to hold. You don’t need to explain it away or make it
                  palatable — just start by naming it.
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Let yourself notice what hurts. What shifted. What’s been hard
                  to hold. You don’t need to explain it away or make it
                  palatable — just start by naming it.
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">02. gather with compassion</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  When you feel ready, begin tending to your broken pieces. Not
                  with judgment or urgency — but with gentleness.
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Try this: Instead of asking “What’s wrong with me?” try asking
                  “What might this part of me need right now?” Let compassion be
                  the glue.
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">03. join with intention</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  You don’t have to return every broken piece to its original
                  place. Healing offers a chance to pause and reflect on what
                  still feels right — and what no longer does. 
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Try this: Make two lists: “What I’m keeping” and “What I’m
                  ready to release”. Let your healing reflect who you’re
                  becoming, not just who you’ve been.
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">04. Highlight rather than hide</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  You don’t need to cover the cracks. Let them live in the
                  light. Speak your story, write it, or quietly own it —
                  whatever feels true.
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  Try this: Write one sentence that affirms a part of your story
                  you’ve been hiding. Even if no one else sees it, let it be
                  seen by you. 
                </p>
              </div>
            </div>
            <p className="body-text">{blog1Content.section4Paragraph1}</p>
          </div>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[275px]">
          {blog1Content.section5Heading}
        </h1>
        <div>
          <p className="body-text">{blog1Content.section5Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {blog1Content.section5Paragraph1}
          </p>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px]">
          {blog1Content.section6Heading}
        </h1>
        <div>
          <p className="body-text">{blog1Content.section6Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {blog1Content.section6Paragraph1}
          </p>
          <p className="body-text">
            <span className="ml-4"></span>
            {blog1Content.section6Paragraph2}
          </p>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[156px] px-[44px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <h1 className="heading-1 mb-[37px] max-w-[200px]">
          {blog1Content.referenceHeading}
        </h1>
        <hr className="mb-[24px]" />
        {blog1Content.listItems &&
          blog1Content.listItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-start items-start w-full">
                <p className="body-small !text-left">{item}</p>
              </div>
              {index < blog1Content.listItems.length - 1 && (
                <hr className="my-[15px] lg:my-[24px]" />
              )}
            </div>
          ))}
        <hr className="mt-[24px]" />
        <h2 className="heading-2 mt-[80px] lg:mt-[96px] mb-[24px] lg:mb-[48px] lg:max-w-[450px]">
          {blog1Content.referenceSubheading}
        </h2>
        <button className="button-main" href="#">
          {blog1Content.referenceButton}
        </button>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
