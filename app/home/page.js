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

  useEffect(() => {
    const query = `*[_type == "home"][0]`;

    client.fetch(query).then((data) => {
      setHomePageContent(data);
    });
  }, []);

  if (!homePageContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[240px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{homePageContent.heroHeading}</h1>
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
      <section className="lg:mt-[-8rem] w-full max-w-7xl px-[43px]">
        <Image src="/home-1.png" alt="Bouquet" width={1517} height={958} />
      </section>
      <section className="my-[80px] lg:mt-[142px] lg:mb-[163px] w-full max-w-[415px] md:max-w-[699px] px-[43px]">
        <div className="mb-[52px] lg:mb-[96px] flex flex-col justify-center items-center">
          <h1 className="heading-1 mb-[26px] lg:mb-[32px]">
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
            <h1 className="heading-1 mb-[24px] lg:mb-[32px]">
              {homePageContent.section2Heading}
            </h1>
            <p className="body-text">{homePageContent.section2Paragraph}</p>
            <hr className="mt-[32px] mb-[24px]" />
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
      <section className="w-full max-w-7xl px-[43px] flex justify-center items-center">
        <Image src="/man-2.png" alt="people" width={934} height={773} />
      </section>
      <section className="hidden md:flex flex-col justify-center items-center px-[43px] w-full max-w-[699px] mt-[148px] mb-[204px]">
        <h1 className="heading-1">OUR SPECIALITIES</h1>
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
      <section className="my-[80px] lg:mt-[204px] lg:mb-[194px] flex flex-col justify-center items-center w-full max-w-[413px] md:max-w-[699px] px-[43px]">
        <h1 className="heading-1">{homePageContent.section3Heading}</h1>
        <p className="body-text mt-[24px] lg:mt-[32px]">
          {homePageContent.section3Paragraph}
        </p>
        <p className="body-text">
          <span className="ml-4"></span>
          {homePageContent.section3Paragraph2}
        </p>
        <p className="body-text mb-[24px] lg:mb-[32px]">
          <span className="ml-4"></span>
          {homePageContent.section3Paragraph3}
        </p>
        <h2 className="heading-2 max-w-[280px] md:max-w-[500px] mb-[24px] lg:mb-[48px]">
          {homePageContent.section3Subheading}
        </h2>
        <Link href={"/about"} className="button-main">
          {homePageContent.section3ButtonText}
        </Link>
      </section>
      <section className="mb-[80px] lg:mb-[74px]">
        <Image
          src="/Lindsiemeek-headshots-atp-103-2.jpeg"
          alt="Lindsie Meek"
          width={472}
          height={613}
          className="mix-blend-multiply max-w-[200px] md:max-w-none px-[43px]"
        />
      </section>
      <section className="mb-[80px] lg:mb-[64px]">
        <Image
          src="/you_deserve_to_take_up_space.gif"
          alt="You deserve to take up space"
          width={964}
          height={699}
          className="w-full max-w-[318.58px] md:max-w-none px-[43px]"
        />
      </section>
      <section className="w-full max-w-[520px] md:max-w-[650px] flex flex-col justify-center items-center mb-[64px] lg:mb-[204px] px-[48px]">
        <h1 className="heading-1 mb-[48px] lg:mb-[86px]">
          for more support, check out our blog, or subscribe to receive our free
          printable note cards: Permission Notes for Being Human.
        </h1>
        <form
          className="w-full flex justify-center items-center mb-[48px] lg:mb-[96px]"
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
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <p className="body-text">
            Now serving clients in NY, NJ, CT, MA, and CO.
          </p>
          <h2 className="text-[12px] md:text-[14px] leading-[16px] md:leading-[23.17px] tracking-[0.04rem] md:tracking-[0.15rem] text-justify text-blue font-family-outfit md:uppercase text-nowrap">
            Interested in joining our team? inquire{" "}
            <button
              className="text-[12px] md:text-[14px] leading-[16px] tracking-size[0.04rem] md:tracking-size[0.15rem] text-justify text-blue font-family-outfit md:uppercase md:border-b-1 cursor-pointer"
              onClick={() => setModalState("application")}
            >
              here
            </button>
          </h2>
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
