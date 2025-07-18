"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function AnxietySpecialty() {
  const [groupContent, setGroupContent] = useState(null);

  // ADD THIS STATE VARIABLE for the newsletter form
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const query = `*[_type == "group"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setGroupContent(data);
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

  if (!groupContent) {
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
      <section className="mt-[51px] lg:mt-[250px] lg:mb-[166px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px]">
        <h1 className="heading-1">{groupContent.section1Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {groupContent.section1Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[64px] heading-2 w-full max-w-[350px] md:max-w-[400px]">
          {groupContent.section1Subheading}
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
          src="/man-2(1).png"
          alt="Man"
          width={117.4}
          height={112}
          className="w-full mt-[50px] mb-[110px] lg:my-0 max-w-[150px] lg:max-w-[143px]"
        />
      </section>
      <section className="mb-[80px] flex lg:hidden bg-[url(/mobile-stripes.png)] md:bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <PreFooter />
      <Footer />
    </div>
  );
}
