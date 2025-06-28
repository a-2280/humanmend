"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function BlogPostTwo() {
  const [blog2Content, setBlog2Content] = useState(null);

  useEffect(() => {
    const query = `*[_type == "blog2"][0]`;

    client.fetch(query).then((data) => {
      setBlog2Content(data);
    });
  }, []);

  if (!blog2Content) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[240px] mb-[40px] lg:mb-[96px] flex flex-col justify-center items-center px-[44px]">
        <h1 className="heading-1">{blog2Content.title}</h1>
        <h2 className="heading-2 mt-1 lg:mt-[24px] mb-[24px] lg:mb-[48px]">
          {blog2Content.subtitle}
        </h2>
        <p className="body-small">{blog2Content.author}</p>
      </section>
      <section className="px-[44px]">
        <Image src="/man-2(2).png" alt="flowers" width={692} height={490} />
      </section>
      <section className="px-[44px] mt-[40px] lg:mt-[96px] mb-[80px] lg:mb-[64px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="body-text">{blog2Content.section1Paragraph}</p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog2Content.section2Heading}
          </h1>
          <div>
            <p className="body-text">{blog2Content.section2Paragraph}</p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[400px]">
            {blog2Content.section3Heading}
          </h1>
          <div>
            <p className="body-text">{blog2Content.section3Paragraph}</p>
          </div>

          <h1 className="heading-1 my-[24px] lg:my-[48px] lg:max-w-[350px]">
            {blog2Content.section4Heading}
          </h1>
          <div>
            <p className="body-text">{blog2Content.section4Paragraph}</p>
          </div>
        </div>

        <h1 className="heading-1 my-[24px] lg:my-[48px] max-w-[400px]">
          {blog2Content.section5Heading}
        </h1>
        <div>
          <p className="body-text">{blog2Content.section5Paragraph}</p>
          <div className="my-[24px] flex flex-col justify-center items-start">
            <h2 className="heading-2">Ask questions.</h2>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                {`“I'm interested in your perspective on using BMI as a health
                measure given its non-medical origin. How do you balance BMI
                with other health measures in your practice?”`}
              </p>
            </div>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                {`“Would you treat these symptoms differently in a smaller-bodied
                patient?”`}
              </p>
            </div>
          </div>
          <div className="my-[24px] flex flex-col justify-center items-start">
            <h2 className="heading-2">FIND WEIGHT-inclusive providers.</h2>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                {`Look for practitioners who use a Health at Every Size® (HAES)
                approach—many cities now have directories to help.`}
              </p>
            </div>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                {`Search keywords including “HAES”, “weight neutral”, “non-diet”
                primary care doctor in your city.`}
              </p>
            </div>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Mary Lambert compiled an incredible list of nationwide resources
                to help you begin your search for a weight neutral provider{" "}
                <Link href="#">Weight Neutral Providers Lead List.</Link>
              </p>
            </div>
          </div>
          <div className="my-[24px] flex flex-col justify-center items-start">
            <h2 className="heading-2">Bring a support person.</h2>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Whether it&#39;s a friend, partner, or advocate, having someone
                with you can help reinforce your boundaries and your voice.
              </p>
            </div>
          </div>
          <div className="my-[24px] flex flex-col justify-center items-start">
            <h2 className="heading-2">know your rights.</h2>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                You can decline to be weighed. You can ask for a blind weight.
                You can say, &#34;Let&#39;s focus on what I came in for.&#34;
              </p>
            </div>
          </div>
          <div className="my-[24px] flex flex-col justify-center items-start">
            <h2 className="heading-2">FOCUS on behaviors, not weight.</h2>
            <div className="body-text flex">
              <p className="body-text mx-2">•</p>
              <p className="body-text">
                Sustainable health is built on supportive practices—like
                nourishing your body, moving in ways that feel good, tending to
                stress—not on changing your size.
              </p>
            </div>
          </div>
          <p className="body-text">{blog2Content.section5Paragraph1}</p>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[156px] px-[44px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <h1 className="heading-1 mb-[37px] max-w-[200px]">
          {blog2Content.referenceHeading}
        </h1>
        <hr className="mb-[24px]" />
        {blog2Content.listItems &&
          blog2Content.listItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-start items-start w-full">
                <p className="body-small !text-left">{item}</p>
              </div>
              {index < blog2Content.listItems.length - 1 && (
                <hr className="my-[15px] lg:my-[24px]" />
              )}
            </div>
          ))}
        <hr className="mt-[24px]" />
        <h2 className="heading-2 mt-[80px] lg:mt-[96px] mb-[24px] lg:mb-[48px] max-w-[300px] lg:max-w-[450px]">
          {blog2Content.referenceSubheading}
        </h2>
        <button className="button-main" href="#">
          {blog2Content.referenceButton}
        </button>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
