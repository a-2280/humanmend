"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import FreeConsult from "@/components/ui/FreeConsult";
import Success from "@/components/ui/Success";

export default function BlogPostThree() {
  const [modalState, setModalState] = useState("closed");
  const [blog3Content, setBlog3Content] = useState(null);

  useEffect(() => {
    const query = `*[_type == "blog3"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setBlog3Content(data);
    });
  }, []);

  if (!blog3Content) {
    return (
      <>
        <div className="md:hidden w-screen h-screen flex justify-center items-center mt-[-4rem]">
          <Image src="/footer.gif" alt="vase" width={100} height={100} />
        </div>
        <div className="hidden w-screen h-screen md:flex justify-center items-center">
          <Image src="/footer.gif" alt="vase" width={100} height={100} />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[250px] mb-[40px] lg:mb-[96px] flex flex-col justify-center items-center px-[44px]">
        <h1 className="heading-1">{blog3Content.title}</h1>
        <h2 className="heading-2 mt-1 lg:mt-[24px] mb-[24px] lg:mb-[48px]">
          {blog3Content.subtitle}
        </h2>
        <p className="body-small">{blog3Content.author}</p>
      </section>
      <section className="px-[44px]">
        <Image
          src="/blog-flower-1.png"
          alt="flowers"
          width={692}
          height={490}
        />
      </section>
      <section className="px-[44px] mt-[40px] lg:mt-[96px] mb-[80px] lg:mb-[64px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="body-text">{blog3Content.section1Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section1Paragraph1}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[400px]">
            {blog3Content.section2Heading}
          </h1>
          <div>
            <p className="body-text">{blog3Content.section2Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section2Paragraph1}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section2Paragraph2}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog3Content.section3Heading}
          </h1>
          <div>
            <p className="body-text">{blog3Content.section3Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section3Paragraph1}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section3Paragraph2}
            </p>
          </div>

          <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[250px] lg:max-w-none">
            {blog3Content.section4Heading}
          </h1>
          <div>
            <p className="body-text">{blog3Content.section4Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section4Paragraph1}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog3Content.section4Paragraph2}
            </p>
          </div>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[300px] lg:max-w-[350px]">
          {blog3Content.section5Heading}
        </h1>
        <div>
          <p className="body-text">{blog3Content.section5Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {blog3Content.section5Paragraph1}
          </p>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px]">
          {blog3Content.section6Heading}
        </h1>
        <div>
          <p className="body-text">{blog3Content.section6Paragraph}</p>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[156px] px-[44px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <h1 className="heading-1 mb-[37px] max-w-[200px]">
          {blog3Content.referenceHeading}
        </h1>
        <hr className="mb-[24px]" />
        {blog3Content.listItems &&
          blog3Content.listItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-start items-start w-full">
                <p className="body-small !text-left">{item}</p>
              </div>
              {index < blog3Content.listItems.length - 1 && (
                <hr className="my-[15px] lg:my-[24px]" />
              )}
            </div>
          ))}
        <hr className="mt-[24px]" />
        <h2 className="heading-2 mt-[80px] lg:mt-[96px] mb-[24px] lg:mb-[48px] lg:max-w-[400px]">
          {blog3Content.referenceSubheading}
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("consult")}
        >
          {blog3Content.referenceButton}
        </button>
        {modalState === "consult" && (
          <FreeConsult
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("success")}
          />
        )}

        {modalState === "success" && (
          <Success
            text="In a world that often asks us to shrink, your message just claimed some space. That’s where healing begins. We will be in touch soon."
            onClose={() => setModalState("closed")}
          />
        )}
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
