"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import FreeConsult from "@/components/ui/FreeConsult";
import { useState, useEffect } from "react";
import Success from "@/components/ui/Success";
import Image from "next/image";
import Link from "next/link";
import Application from "@/components/ui/Application";
import { client } from "@/sanity/lib/client";

export default function Home() {
  const [modalState, setModalState] = useState("closed");
  const [homePageContent, setHomePageContent] = useState(null);

  // ADD THIS STATE VARIABLE for the newsletter form
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const query = `*[_type == "home"][0]{
      ...,
      bouquetImageAlt,
      peopleImageAlt,
      therapistImageAlt,
      inspirationalGifAlt
    }`;

    Promise.all([
      client.fetch(
        query,
        {},
        { cache: "force-cache", next: { revalidate: 3600 } }
      ),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setHomePageContent(data);
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

  if (!homePageContent) {
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
    <div className="flex flex-col justify-center items-center max-w-screen">
      <Navbar />
      <section className="mt-[70px] md:mt-[250px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1 leading-3">{homePageContent.heroHeading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {homePageContent.heroParagraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[275px] md:max-w-[390px]">
          {homePageContent.heroSubheading}
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("consult")}
        >
          {homePageContent.heroButtonText}
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
            text="In a world that often asks us to shrink, your message just claimed some space. That's where healing begins. We will be in touch soon."
            onClose={() => setModalState("closed")}
          />
        )}
      </section>
      <section className="mt-[37px] lg:mt-[-8rem] w-full max-w-7xl px-[44px]">
        <Image 
          src="/home-1.png" 
          alt={homePageContent?.bouquetImageAlt || "Bouquet"} 
          width={1517} 
          height={958} 
        />
      </section>
      <section className="mt-[37px] mb-[80px] lg:mt-[142px] lg:mb-[163px] w-full max-w-[415px] md:max-w-[699px] px-[44px]">
        <div className="mb-[52px] lg:mb-[96px] flex flex-col justify-center items-center">
          <h1 className="heading-1 mb-[26px] lg:mb-[32px] leading-3">
            {homePageContent.section1Heading}
          </h1>
          <p className="body-text">{homePageContent.section1Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {homePageContent.section1Paragraph2}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="heading-1 mb-[24px] lg:mb-[32px] leading-3">
              {homePageContent.section2Heading}
            </h1>
            <p className="body-text">{homePageContent.section2Paragraph}</p>
            <hr className="mt-[24px] mb-[15px] md:mt-[32px] md:mb-[24px]" />
            {homePageContent.listItems &&
              homePageContent.listItems.map((item, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-start items-start w-full">
                    <p className="numbers-text lg:!mr-6">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="heading-2 !text-left">{item}</h2>
                  </div>
                  {index < homePageContent.listItems.length - 1 && (
                    <hr className="my-[15px] lg:my-[24px]" />
                  )}
                </div>
              ))}
            <hr className="mt-[24px]" />
          </div>
          <h2 className="heading-2 mt-[32px] lg:my-[48px] mb-[24px] w-[280px] md:w-[450px]">
            {homePageContent.section2Subheading}
          </h2>
          <button
            className="button-main"
            onClick={() => setModalState("consult")}
          >
            {homePageContent.section2ButtonText}
          </button>
        </div>
      </section>
      <section className="w-full max-w-7xl px-[44px] flex justify-center items-center">
        <Image 
          src="/man-2.png" 
          alt={homePageContent?.peopleImageAlt || "people"} 
          width={934} 
          height={773} 
        />
      </section>
      <section className="hidden md:flex flex-col justify-center items-center px-[44px] w-full max-w-[699px] mt-[148px] mb-[204px]">
        <h1 className="heading-1 leading-3">OUR SPECIALITIES</h1>
        <div className="w-full">
          <hr className="mt-[48px] mb-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex gap-[64px]">
              <p className="numbers-text">01</p>
              <div>
                <h2 className="heading-2 !text-left mb-[24px]">
                  ANXIETY therapy
                </h2>
                <p className="body-small">
                  Quiet the noise, reconnect with yourself,
                  <br /> and find steadier ground.
                </p>
              </div>
            </div>
            <Link href={"/anxiety-therapy"} className="button-small">
              Learn More
            </Link>
          </div>
          <hr className="my-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex gap-[64px]">
              <p className="numbers-text">02</p>
              <div>
                <h2 className="heading-2 !text-left mb-[24px]">
                  EATING DISORDER THERAPY
                </h2>
                <p className="body-small">
                  Recovery starts with curiosity, compassion,
                  <br /> and support.
                </p>
              </div>
            </div>
            <Link href={"/eating-disorder-therapy"} className="button-small">
              Learn More
            </Link>
          </div>
          <hr className="my-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex gap-[64px]">
              <p className="numbers-text">03</p>
              <div>
                <h2 className="heading-2 !text-left mb-[24px]">
                  GROUP THERAPY
                </h2>
                <p className="body-small">
                  Where shame starts to soften and personal struggles
                  <br /> become shared wisdom.
                </p>
              </div>
            </div>
            <Link href={"/group-therapy"} className="button-small">
              Learn More
            </Link>
          </div>
          <hr className="mt-[24px]" />
        </div>
      </section>
      <section className="hidden md:flex bg-[url(/stripes.png)] bg-cover bg-center w-full h-[427px] full-width-breakout"></section>
      <section className="my-[80px] lg:mt-[204px] lg:mb-[194px] flex flex-col justify-center items-center w-full max-w-[413px] md:max-w-[699px] px-[44px]">
        <h1 className="heading-1 leading-3">
          {homePageContent.section3Heading}
        </h1>
        <p className="body-text mt-[24px] lg:mt-[32px]">
          {homePageContent.section3Paragraph}
        </p>
        <p className="body-text">
          <span className="ml-4"></span>
          {homePageContent.section3Paragraph2}
        </p>
        <p className="body-text mb-[24px] lg:mb-[32px] md:hidden">
          <span className="ml-4"></span>
          {`When I'm not in session, you'll find me on the search for unique
          stationery, devouring audiobooks at 1.5x speed (yes, I'm that person),
          or planning my next trip to somewhere warmer than wherever I am —
          usually with a slice of margherita pizza in hand. I have a soft spot
          for beautiful interiors: the kind of spaces that feel like an exhale,
          with vintage touches and one-of-a-kind pieces.`}
        </p>
        <p className="body-text mb-[24px] lg:mb-[32px] hidden md:block">
          <span className="ml-4"></span>
          {homePageContent.section3Paragraph3}
        </p>
        <h2 className="heading-2 max-w-[250px] md:max-w-[500px] mb-[24px] lg:mb-[48px]">
          {homePageContent.section3Subheading}
        </h2>
        <Link href={"/about"} className="button-main">
          {homePageContent.section3ButtonText}
        </Link>
      </section>
      <section className="mb-[80px] lg:mb-[74px]">
        <Image
          src="/Lindsiemeek-headshots-atp-103-2.jpeg"
          alt={homePageContent?.therapistImageAlt || "Lindsie Meek"}
          width={472}
          height={613}
          className="mix-blend-multiply max-w-[250px] md:max-w-none px-[44px]"
        />
      </section>
      <section className="mb-[80px] lg:mb-[64px]">
        <Image
          src="/you_deserve_to_take_up_space.gif"
          alt={homePageContent?.inspirationalGifAlt || "You deserve to take up space"}
          width={964}
          height={699}
          className="w-full max-w-[318.58px] md:max-w-none px-[44px]"
        />
      </section>
      <section className="w-full max-w-[450px] md:max-w-[550px] flex flex-col justify-center items-center mb-[64px] lg:mb-[204px] px-[44px]">
        <h2 className="heading-2 mb-[48px] lg:mb-[86px] max-w-[350px] lg:max-w-[490px]">
          for more support, check out our blog, or subscribe to receive our free
          printable note cards: Permission Notes for Being Human.
        </h2>

        {/* UPDATED NEWSLETTER FORM */}
        <form
          className="w-full flex justify-center items-center mb-[48px] lg:mb-[96px]"
          onSubmit={handleNewsletterSubmit}
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

        <div className="flex flex-col justify-center items-center gap-[12px]">
          <p className="body-text">
            Now serving clients in NY, NJ, CT, MA, and CO.
          </p>
        </div>

        {modalState === "application" && (
          <Application
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("successApp")}
          />
        )}

        {modalState === "successApp" && (
          <Success
            text="We look forward to helping you along your professional journey. We will be in touch soon."
            onClose={() => setModalState("closed")}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
