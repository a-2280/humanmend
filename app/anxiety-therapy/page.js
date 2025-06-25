"use client";

import Footer from "@/components/ui/Footer";
import FreeConsult from "@/components/ui/FreeConsult";
import GetInTouch from "@/components/ui/GetInTouch";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Success from "@/components/ui/Success";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function AnxietySpecialty() {
  const [modalState, setModalState] = useState("closed");
  const [anxietyContent, setAnxietyContent] = useState(null);

  useEffect(() => {
    const query = `*[_type == "anxiety"][0]`;

    client.fetch(query).then((data) => {
      setAnxietyContent(data);
    });
  }, []);

  if (!anxietyContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="my-[51px] lg:mt-[240px] lg:mb-[114px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{anxietyContent.section1Heading}</h1>
        <p className="my-[24px] lg:mt-[32px] lg:mb-[48px] body-text text-align-last">
          {anxietyContent.section1Paragraph}
        </p>
        <button
          className="button-main"
          onClick={() => setModalState("getInTouch")}
        >
          {anxietyContent.section1Button}
        </button>

        {modalState === "getInTouch" && (
          <GetInTouch
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("success")}
            linkSelected={"Anxiety Therapy"}
          />
        )}

        {modalState === "success" && (
          <Success
            text="In a world that often asks us to shrink, your message just claimed some space. That’s where healing begins. We will be in touch soon."
            onClose={() => setModalState("closed")}
          />
        )}
      </section>
      <section className="px-[43px] max-w-7xl">
        <Image
          src="/anxiety-1.png"
          alt="Vases"
          width={1635.32}
          height={592.56}
        />
      </section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[699px] px-[43px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading-1 mb-[26px] lg:mb-[32px]">
            {anxietyContent.section2Heading}
          </h1>
          <p className="body-text">{anxietyContent.section2Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {anxietyContent.section2Paragraph1}
          </p>
          <p className="body-text">
            <span className="ml-4"></span>
            {anxietyContent.section2Paragraph2}
          </p>
          <p className="body-text">
            <span className="ml-4"></span>
            {anxietyContent.section2Paragraph3}
          </p>
        </div>
      </section>
      <section className="flex bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[699px] px-[43px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="heading-1 mb-[26px] lg:mb-[32px]">
              {anxietyContent.section3Heading}
            </h1>
            <p className="body-text">{anxietyContent.section3Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {anxietyContent.section3Paragraph1}
            </p>
            <hr className="mt-[32px] mb-[24px]" />
            {anxietyContent.listItems &&
              anxietyContent.listItems.map((item, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-start items-start w-full">
                    <p className="numbers-text lg:!mr-6">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="heading-2 !text-left">{item}</h2>
                  </div>
                  {index < anxietyContent.listItems.length - 1 && (
                    <hr className="my-[15px] lg:my-[24px]" />
                  )}
                </div>
              ))}
            <hr className="mt-[24px] mb-[32px]" />
          </div>
          <p className="body-text">{anxietyContent.section3Paragraph2}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {anxietyContent.section3Paragraph3}
          </p>
        </div>
      </section>
      <section className="px-[43px] max-w-7xl">
        <Image src="/flower-3.png" alt="flower" width={1054} height={403} />
      </section>
      <section className="mt-[51px] mb-[80px] lg:mt-[204px] lg:mb-[156px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[685px] z-10">
        <h1 className="heading-1">{anxietyContent.section4Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {anxietyContent.section4Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[275px] md:max-w-[390px]">
          {anxietyContent.section4Subheading}
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("consult")}
        >
          {anxietyContent.section4Button}
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
