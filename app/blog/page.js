"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default function Blog() {
  const [blogContent, setBlogContent] = useState(null);

  // ADD THIS STATE VARIABLE for the newsletter form
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const query = `*[_type == "blog"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setBlogContent(data);
    });
  }, []);

  // ADD THIS FUNCTION for the newsletter form
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // Add a form type identifier
    formData.append("formType", "newsletter_home");

    try {
      const response = await fetch("https://formspree.io/f/xpwlavdn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        e.target.reset(); // Just reset the form
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!blogContent) {
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
      <section className="mt-[51px] lg:mt-[250px] lg:mb-[166px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{blogContent.section1Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {blogContent.section1Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[64px] heading-2 w-full md:hidden">
          Scroll to peruse our free resources, <br />
          or subscribe to receive our notecards: permission slips for being
          human.
        </h2>
        <h2 className="mb-[37px] lg:mb-[64px] heading-2 w-full hidden md:block">
          Scroll to peruse our free resources, <br />
          or subscribe to receive our printable notecards: permission slips for
          being human.
        </h2>

        {/* UPDATED NEWSLETTER FORM */}
        <form
          className="w-full flex justify-center items-center mb-[48px] lg:mb-[145px]"
          onSubmit={handleNewsletterSubmit}
          // REMOVED: action="https://formspree.io/f/mqabnrbe"
          // REMOVED: method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            disabled={isSubmitting}
            className="border-b-1 border-dark-blue body-text placeholder:!text-blue py-2 w-full outline-0 focus:!placeholder-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            className="!border-none"
            disabled={isSubmitting}
          >
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              width={24}
              height={24}
              className="min-w-[15px] md:min-w-[20px] ml-[-1rem] md:ml-[-1.5rem]"
            />
          </button>
        </form>

        <Image
          src="/man-5.png"
          alt="Man"
          width={117.4}
          height={112}
          className="w-full mt-[80px] mb-[90px] lg:my-0 max-w-[75.5px] lg:max-w-[143px]"
        />
      </section>

      {/* REST OF YOUR SECTIONS STAY THE SAME */}
      <section className="mt-[80px] lg:mt-[204px] px-[44px] lg:px-0 flex flex-col justify-center items-center w-full">
        <div className="mb-[80px] lg:flex lg:justify-center lg:items-center lg:mb-[204px] lg:pl-[44px]">
          <div className="mb-[80px] lg:m-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end">
            <div className="lg:max-w-[400px] lg:mr-[231px] flex flex-col justify-center items-center">
              <h1 className="heading-1">{blogContent.section2Heading}</h1>
              <h2 className="heading-2 lg:my-[24px] max-w-[350px] lg:max-w-[400px]">
                {blogContent.section2Subheading}
              </h2>
              <p className="body-text text-center my-[24px] lg:m-0">
                {blogContent.section2Paragraph}
              </p>
              {/* blog-post-1 */}
              <Link
                href={"/find-beauty-in-your-broken"}
                className="button-main lg:mt-[48px]"
              >
                {blogContent.section2Button}
              </Link>
            </div>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pr-[44px]">
            <Image
              src="/blog-flower-3.png"
              alt="man"
              width={630}
              height={502.85}
              className="lg:w-[630px]"
            />
          </div>
        </div>
        <div className="m-0 md:mb-[80px] lg:m-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="mb-[80px] lg:m-0 flex flex-col justify-center items-center lg:items-center lg:ml-[199px] lg:w-1/2 lg:max-w-[410px] lg:pr-[44px]">
            <h1 className="heading-1">{blogContent.section3Heading}</h1>
            <h2 className="heading-2 lg:my-[24px] max-w-[300px] lg:max-w-[400px]">
              {blogContent.section3Subheading}
            </h2>
            <p className="body-text text-center my-[24px] lg:m-0">
              {blogContent.section3Paragraph}
            </p>
            {/* blog-post-2 */}
            <Link
              href={"/but-im-overweight"}
              className="button-main lg:mt-[48px]"
            >
              {blogContent.section3Button}
            </Link>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pl-[44px]">
            <Image src="/man-2(2).png" alt="vase" width={670.23} height={595} />
          </div>
        </div>
      </section>

      <section className="mt-[80px] lg:mt-[204px] px-[44px] lg:px-0 flex flex-col justify-center items-center w-full">
        <div className="mb-[80px] lg:m-0 lg:flex lg:justify-center lg:items-center lg:mb-[204px]">
          <div className="mb-[80px] lg:m-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end lg:pl-[44px]">
            <div className="lg:max-w-[400px] lg:mr-[231px] flex flex-col justify-center items-center">
              <h1 className="heading-1">{blogContent.section4Heading}</h1>
              <h2 className="heading-2 lg:my-[24px] max-w-[350px] lg:max-w-[400px]">
                {blogContent.section4Subheading}
              </h2>
              <p className="body-text text-center my-[24px] lg:m-0">
                {blogContent.section4Paragraph}
              </p>
              {/* blog-post-3 */}
              <Link
                href={"/claiming-your-space"}
                className="button-main lg:mt-[48px]"
              >
                {blogContent.section4Button}
              </Link>
            </div>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pr-[44px]">
            <Image
              src="/blog-flower-1.png"
              alt="man"
              width={630}
              height={502.85}
              className="lg:w-[630px]"
            />
          </div>
        </div>
        <div className="m-0 md:mb-[80px] lg:m-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="mb-[80px] lg:m-0 flex flex-col justify-center items-center lg:items-center lg:ml-[199px] lg:w-full lg:max-w-[410px] lg:pr-[44px]">
            <h1 className="heading-1">{blogContent.section5Heading}</h1>
            <h2 className="heading-2 lg:my-[24px] max-w-[300px] lg:max-w-[400px]">
              {blogContent.section5Subheading}
            </h2>
            <p className="body-text text-center my-[24px] lg:m-0">
              {blogContent.section5Paragraph}
            </p>
            {/* blog-post-4 */}
            <Link
              href={"/beyond-the-stereotypes"}
              className="button-main lg:mt-[48px]"
            >
              {blogContent.section5Button}
            </Link>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pl-[44px]">
            <Image src="/flower-4.png" alt="vase" width={670.23} height={595} />
          </div>
        </div>
      </section>

      <section className="mt-[80px] lg:my-[204px] px-[44px] lg:px-0 flex flex-col justify-center items-center w-full">
        <div className="mb-[80px] lg:m-0 lg:flex lg:justify-center lg:items-center lg:mb-[204px]">
          <div className="mb-[80px] lg:m-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end lg:pl-[44px]">
            <div className="lg:max-w-[400px] lg:mr-[231px] flex flex-col justify-center items-center">
              <h1 className="heading-1">{blogContent.section6Heading}</h1>
              <h2 className="heading-2 lg:my-[24px] max-w-[350px] lg:max-w-[400px]">
                {blogContent.section6Subheading}
              </h2>
              <p className="body-text text-center my-[24px] lg:m-0">
                {blogContent.section6Paragraph}
              </p>
              {/* blog-post-5 */}
              <Link
                href={"/they-probably-hate-me"}
                className="button-main lg:mt-[48px]"
              >
                {blogContent.section6Button}
              </Link>
            </div>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pr-[44px]">
            <Image
              src="/blog-man-1.png"
              alt="man"
              width={630}
              height={502.85}
              className="lg:w-[630px]"
            />
          </div>
        </div>
        <div className="mb-[80px] lg:m-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="mb-[80px] lg:m-0 flex flex-col justify-center items-center lg:items-center lg:ml-[199px] lg:w-1/2 lg:max-w-[410px] lg:pr-[44px]">
            <h1 className="heading-1">{blogContent.section7Heading}</h1>
            <h2 className="heading-2 lg:my-[24px] max-w-[300px] lg:max-w-[400px]">
              {blogContent.section7Subheading}
            </h2>
            <p className="body-text text-center my-[24px] lg:m-0">
              {blogContent.section7Paragraph}
            </p>
            {/* blog-post-6 */}
            <Link
              href={"/the-beach-body-rebellion"}
              className="button-main lg:mt-[48px]"
            >
              {blogContent.section7Button}
            </Link>
          </div>
          <div className="lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pl-[44px]">
            <Image src="/flower-2.png" alt="vase" width={670.23} height={595} />
          </div>
        </div>
      </section>

      <section className="mb-[80px] flex lg:hidden bg-[url(/mobile-stripes.png)] md:bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <PreFooter />
      <Footer />
    </div>
  );
}
