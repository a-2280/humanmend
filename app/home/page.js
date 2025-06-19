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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <section className="mt-[240px] flex flex-col justify-center items-center max-w-[563px] z-10">
        <h1 className="heading-1 text-blue uppercase">
          {homePageContent.heroHeading}
        </h1>
        <p className="my-[32px] text-blue body-text text-justify text-align-last">
          {homePageContent.heroParagraph}
        </p>
        <h2 className="mb-[48px] text-blue uppercase heading-2 text-center max-w-[385px]">
          {homePageContent.heroSubheading}
        </h2>
        <button
          className="text-blue uppercase button-main border-b-[1.5px] cursor-pointer"
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
      <section className="md:mt-[-7.5rem] w-full max-w-[1517px]">
        <Image src="/home-1.png" alt="Bouquet" width={1517} height={958} />
      </section>
      <section className="mt-[147px] mb-[163px] max-w-[612px]">
        <div className="mb-24 flex flex-col justify-center items-center">
          <h1 className="heading-1 text-blue uppercase mb-8">
            {homePageContent.section1Heading}
          </h1>
          <p className="body-text text-blue text-justify">
            {homePageContent.section1Paragraph}
          </p>
          <p className="body-text text-blue text-justify">
            <span className="ml-4"></span>
            {homePageContent.section1Paragraph2}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[48px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="heading-1 text-blue uppercase mb-8">
              {homePageContent.section2Heading}
            </h1>
            <p className="body-text text-blue text-justify">
              {homePageContent.section2Paragraph}
            </p>
            <hr className="border-blue border-t-[1.5px] w-full my-[24px]" />
            {homePageContent.listItems &&
              homePageContent.listItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-start items-start w-full">
                    <p className="numbers-text text-blue mr-[24px]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-blue uppercase heading-2 text-left">
                      {item}
                    </h2>
                  </div>
                  {index < homePageContent.listItems.length - 1 && (
                    <hr className="border-blue border-t-[1.5px] w-full my-[24px]" />
                  )}
                </div>
              ))}
            <hr className="border-blue border-t-[1.5px] w-full mt-[24px]" />
          </div>
          <h2 className="text-blue uppercase heading-2 text-center max-w-[425px]">
            {homePageContent.section2Subheading}
          </h2>
          <button
            className="button-main text-blue uppercase border-b-[1.5px] cursor-pointer"
            onClick={() => setModalState("consult")}
          >
            {homePageContent.section2ButtonText}
          </button>
        </div>
      </section>
      <section className="max-w-7xl">
        <Image src="/man-2.png" alt="people" width={934} height={773} />
      </section>
      <section className="flex flex-col justify-center items-center w-full max-w-[612px] mt-[148px] mb-[204px]">
        <h1 className="heading-1 text-blue">OUR SPECIALITIES</h1>
        <div className="w-full">
          <hr className="border-blue border-t-[1.5px] w-full mt-[48px] mb-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex">
              <p className="numbers-text text-blue mr-20">01</p>
              <div>
                <h2 className="heading-2 text-blue uppercase mb-[24px]">
                  ANXIETY therapy
                </h2>
                <p className="body-small text-blue">
                  Quiet the noise, reconnect with yourself,
                  <br /> and find steadier ground.
                </p>
              </div>
            </div>
            <Link
              href={"/anxiety-therapy"}
              className="button-small text-blue uppercase border-b-[1.5px] cursor-pointer"
            >
              Learn More
            </Link>
          </div>
          <hr className="border-blue border-t-[1.5px] w-full my-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex">
              <p className="numbers-text text-blue mr-20">02</p>
              <div>
                <h2 className="heading-2 text-blue uppercase mb-[24px]">
                  EATING DISORDER THERAPY
                </h2>
                <p className="body-small text-blue">
                  Recovery starts with curiosity, compassion,
                  <br /> and support.
                </p>
              </div>
            </div>
            <Link
              href={"/eating-disorder-therapy"}
              className="button-small text-blue uppercase border-b-[1.5px] cursor-pointer"
            >
              Learn More
            </Link>
          </div>
          <hr className="border-blue border-t-[1.5px] w-full my-[24px]" />
          <div className="flex justify-between items-start">
            <div className="flex">
              <p className="numbers-text text-blue mr-20">03</p>
              <div>
                <h2 className="heading-2 text-blue uppercase mb-[24px]">
                  GROUP THERAPY
                </h2>
                <p className="body-small text-blue">
                  Where shame starts to soften and personal struggles
                  <br /> become shared wisdom.
                </p>
              </div>
            </div>
            <Link
              href={"/group-therapy"}
              className="button-small text-blue uppercase border-b-[1.5px] cursor-pointer"
            >
              Learn More
            </Link>
          </div>
          <hr className="border-blue border-t-[1.5px] w-full mt-[24px]" />
        </div>
      </section>
      <section className="bg-[url(/stripes.png)] bg-cover bg-center w-full h-[427px]"></section>
      <section className="mt-[204px] mb-[194px] flex flex-col justify-center items-center max-w-[612px]">
        <h1 className="heading-1 text-blue uppercase">
          {homePageContent.section3Heading}
        </h1>
        <p className="body-text text-blue text-justify mt-[32px]">
          {homePageContent.section3Paragraph}
        </p>
        <p className="body-text text-blue text-justify">
          <span className="ml-8"></span>
          {homePageContent.section3Paragraph2}
        </p>
        <p className="body-text text-blue text-justify mb-[32px]">
          <span className="ml-8"></span>
          {homePageContent.section3Paragraph3}
        </p>
        <h2 className="heading-2 text-blue uppercase text-center max-w-[460px] mb-[48px]">
          {homePageContent.section3Subheading}
        </h2>
        <Link
          href={"/about"}
          className="button-main text-blue uppercase border-b-[1.5px] cursor-pointer"
        >
          {homePageContent.section3ButtonText}
        </Link>
      </section>
      <section className="mb-[74px]">
        <Image
          src="/Lindsiemeek-headshots-atp-103-2.jpeg"
          alt="Lindsie Meek"
          width={472}
          height={613}
          className="mix-blend-multiply"
        />
      </section>
      <section className="mb-[64px]">
        <Image
          src="/you_deserve_to_take_up_space.gif"
          alt="You deserve to take up space"
          width={964}
          height={699}
        />
      </section>
      <section className="max-w-[565px] flex flex-col justify-center items-center mb-[204px]">
        <h1 className="heading-1 text-blue uppercase text-center mb-[86px]">
          for more support, check out our blog, or subscribe to receive our free
          printable note cards: Permission Notes for Being Human.
        </h1>
        <form
          className="w-full flex justify-center items-center mb-[96px]"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            className="border-b-[1.5px] border-dark-blue body-text text-blue placeholder:!text-blue py-2 w-full outline-0 focus:!placeholder-transparent"
          />
          <button type="submit">
            <Image
              src="/right-arrow.svg"
              alt="right arrow"
              width={24}
              height={24}
              className="min-w-[24px] ml-[-2rem] cursor-pointer"
            />
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <p className="body-text text-blue">
            Now serving clients in NY, NJ, CT, MA, and CO.
          </p>
          <h2 className="heading-2 text-blue uppercase">
            Interested in joining our team? inquire
            <button
              className="heading-2 uppercase cursor-pointer border-b-[1.5px] leading-4"
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
