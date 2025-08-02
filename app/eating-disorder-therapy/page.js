"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import GetInTouch from "@/components/ui/GetInTouch";
import Success from "@/components/ui/Success";
import PortableTextRenderer from "@/components/ui/PortableTextRenderer";

export default function AnxietySpecialty() {
  const [modalState, setModalState] = useState("closed");
  const [eatingDisorderContent, setEatingDisorderContent] = useState(null);
  const [expandIndex, setExpandIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  useEffect(() => {
    const query = `*[_type == "eating-disorder"][0]{
      ...,
      accordionItems[]{
        title,
        content
      }
    }`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setEatingDisorderContent(data);
    });
  }, []);

  if (!eatingDisorderContent) {
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

  // Use accordion items from Sanity or fallback to empty array
  const accordionItems = eatingDisorderContent?.accordionItems || [];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="my-[51px] lg:mt-[250px] lg:mb-[97px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1 max-w-[250px] md:max-w-none">
          {eatingDisorderContent.section1Heading}
        </h1>
        <p className="my-[24px] lg:mt-[32px] lg:mb-[48px] body-text text-align-last">
          {eatingDisorderContent.section1Paragraph}
        </p>
        <button
          className="button-main"
          onClick={() => setModalState("getInTouch")}
        >
          {eatingDisorderContent.section1Button}
        </button>

        {modalState === "getInTouch" && (
          <GetInTouch
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("success")}
            linkSelected={"Eating Disorder Therapy"}
          />
        )}

        {modalState === "success" && (
          <Success
            text="In a world that often asks us to shrink, your message just claimed some space. That’s where healing begins. We will be in touch soon."
            onClose={() => setModalState("closed")}
          />
        )}
      </section>
      <section className="flex bg-[url(/ed-1.png)] bg-cover bg-center w-full h-[200px] md:h-[427px] full-width-breakout"></section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[699px] px-[44px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading-1 mb-[26px] lg:mb-[32px] max-w-[230px] md:max-w-none">
            {eatingDisorderContent.section2Heading}
          </h1>
          <p className="body-text">{eatingDisorderContent.section2Paragraph}</p>
          <p className="body-text md:hidden">
            <span className="ml-4"></span>
            {`That shame that washes over you after eating — the belief that
            you’ve failed if you don’t follow every food rule perfectly — isn’t
            weakness. It’s what happens when perfectionism runs the show. Many
            of our clients describe living in a constant state of
            not-enoughness. Not disciplined enough. Not small enough. Not worthy
            enough. Perfectionism promises control but delivers the opposite — a
            life ruled by impossible standards and relentless shame. Shame so
            deep, it can make you want to shrink yourself, take up less space,
            and disappear beneath it all. We understand this cycle. And we know
            the way out isn’t more control — it’s self-compassion, curiosity,
            and uncovering the deeper needs behind the patterns.`}
          </p>
          <p className="body-text hidden md:block">
            <span className="ml-4"></span>
            {eatingDisorderContent.section2Paragraph1}
          </p>
          <p className="body-text hidden md:block">
            <span className="ml-4"></span>
            {eatingDisorderContent.section2Paragraph2}
          </p>
        </div>
      </section>
      <section className="px-[44px] max-w-7xl">
        <Image src="/man-1.png" alt="Man" width={626} height={547} />
      </section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[1310px] px-[44px]">
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]">
          We&apos;ve got secrets (that aren&apos;t really secret)
        </h1>
        <hr />
        <ul>
          {accordionItems.map((item, index) => (
            <li key={index}>
              <div
                className="body-text py-[24px] flex items-start"
                onClick={() => toggleExpand(index)}
              >
                <span className="body-text mr-[24px] select-none">
                  {expandIndex === index ? "-" : "+"}
                </span>
                <span className="flex-1 !text-left">{item.title}</span>
              </div>
              <div className={`${expandIndex === index ? "" : "hidden"}`}>
                <PortableTextRenderer content={item.content} />
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex bg-[url(/mobile-stripes.png)] md:bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="mt-[51px] mb-[80px] lg:mt-[204px] lg:mb-[156px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[700px] z-10">
        <h1 className="heading-1">{eatingDisorderContent.section3Heading}</h1>
        <p className="my-[24px] lg:mt-[43px] lg:mb-[32px] body-text">
          {eatingDisorderContent.section3Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[240px] md:max-w-[405px]">
          {eatingDisorderContent.section3Subheading}
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("getInTouch")}
        >
          {eatingDisorderContent.section3Button}
        </button>

        {modalState === "getInTouch" && (
          <GetInTouch
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("success")}
            linkSelected={"Eating Disorder Therapy"}
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
