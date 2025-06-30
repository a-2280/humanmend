"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function AnxietySpecialty() {
  const [groupContent, setGroupContent] = useState(null);

  useEffect(() => {
    const query = `*[_type == "group"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setGroupContent(data);
    });
  }, []);

  if (!groupContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[150px] lg:mb-[166px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{groupContent.section1Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {groupContent.section1Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[64px] heading-2 w-full max-w-[350px] md:max-w-[400px]">
          {groupContent.section1Subheading}
        </h2>

        <form
          className="w-full flex justify-center items-center mb-[48px] lg:mb-[145px]"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            className="border-b-1 border-dark-blue body-text placeholder:!text-blue py-2 w-full outline-0 focus:!placeholder-transparent"
          />
          <button type="submit">
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              width={24}
              height={24}
              className="min-w-[15px] md:min-w-[20px] ml-[-1rem] md:ml-[-1.5rem] cursor-pointer"
            />
          </button>
        </form>

        <Image
          src="/man-2(1).png"
          alt="Man"
          width={117.4}
          height={112}
          className="w-full my-[110px] lg:my-0 max-w-[151px] lg:max-w-[143px]"
        />
      </section>
      <section className="mb-[80px] flex lg:hidden bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <PreFooter />
      <Footer />
    </div>
  );
}
