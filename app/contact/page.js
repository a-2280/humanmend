"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function Contact() {
  const [contactContent, setContactContent] = useState(null);

  useEffect(() => {
    const query = `*[_type == "contact"][0]`;

    client.fetch(query).then((data) => {
      setContactContent(data);
    });
  }, []);

  if (!contactContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="px-[44px] mb-[64px] mt-[51px] flex flex-col justify-center items-center max-w-[550px] lg:mt-[240px] lg:mb-[194px]">
        <h1 className="heading-1">{contactContent.section1Heading}</h1>
        <p className="body-text text-align-last mt-[24px] mb-[37px] lg:mt-[32px] lg:mb-[48px] md:hidden">
          {`To help us support you best, please use the specialized contact forms
          listed on this page. If you just have a general question, feel free to
          click the link directly below.`}
        </p>
        <p className="body-text text-align-last mt-[24px] mb-[37px] lg:mt-[32px] lg:mb-[48px] hidden md:block">
          {contactContent.section1Paragraph}
        </p>
        <button className="button-main">{contactContent.section1Button}</button>
      </section>
      <section className="flex bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="mb-[80px] mt-[80px] lg:mt-[204px] lg:mb-[166px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[700px]">
        <h1 className="heading-1">THERAPEUTIC APPROACHES</h1>
        <hr className="mb-[24px] mt-[37px] lg:mt-[56px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">01</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2">FOR ANXIETY therapy</h2>
              <p className="body-small lg:max-w-[300px]">
                Quiet the noise, reconnect with yourself, and find steadier
                ground.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">02</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[350px]">
                FOR EATING DISORDER THERAPY
              </h2>
              <p className="body-small lg:max-w-[300px]">
                Recovery starts with curiosity, compassion, and support.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">03</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 text-left">FOR GROUP THERAPY</h2>
              <p className="body-small text-left lg:max-w-[375px]">
                Where shame starts to soften and personal struggles start to
                become shared wisdom.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">04</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[400px]">
                GENERAL THERAPY
              </h2>
              <p className="body-small lg:max-w-[300px]">
                Breathe deeper, feel safer, and create room for change.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">05</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 text-left">CEDS CONSULTation</h2>
              <p className="body-small text-left lg:max-w-[325px]">
                Interesting in becoming a supervisee? Inquire now.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">06</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[350px]">
                work with us
              </h2>
              <p className="body-small lg:max-w-[350px]">
                Interested in our work? Inquire now about joining our growing
                team.
              </p>
            </div>
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Contact Us
            </button>
          </div>
        </div>
        <hr className="mt-[24px]" />
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
