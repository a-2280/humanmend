"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import FreeConsult from "@/components/ui/FreeConsult";
import GetInTouch from "@/components/ui/GetInTouch";
import Success from "@/components/ui/Success";

export default function Consultation() {
  const [modalState, setModalState] = useState("closed");
  const [consultationContent, setConsultationContent] = useState(null);

  useEffect(() => {
    const query = `*[_type == "consultation"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setConsultationContent(data);
    });
  }, []);

  if (!consultationContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="px-[44px] mb-[64px] mt-[51px] flex flex-col justify-center items-center max-w-[550px] lg:max-w-[650px] lg:mt-[150px] lg:mb-[194px]">
        <h1 className="heading-1">{consultationContent.section1Heading}</h1>
        <p className="body-text text-align-last mt-[24px] mb-[37px] lg:mt-[32px] lg:mb-[48px]">
          {consultationContent.section1Paragraph}
        </p>
        <button
          className="button-main"
          onClick={() => setModalState("consult")}
        >
          {consultationContent.section1Button}
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
      <section className="px-[44px] max-w-7xl">
        <Image src="/flower-6.png" alt="Flower" width={1006} height={403} />
      </section>
      <section className="px-[44px] lg:mt-[204px] lg:max-w-[750px] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="heading-1 mb-[24px] mt-[64px] lg:my-[48px] lg:max-w-[400px]">
          {consultationContent.section2Heading}
        </h1>
        <div>
          <p className="body-text">{consultationContent.section2Paragraph}</p>
        </div>
        <h1 className="heading-1 mb-[24px] mt-[64px] lg:mt-[96px] lg:mb-[32px]">
          {consultationContent.section3Heading}
        </h1>
        <div>
          <p className="body-text">{consultationContent.section3Paragraph}</p>
        </div>
        <h1 className="heading-1 mb-[24px] mt-[64px] lg:my-[48px]">
          {consultationContent.section4Heading}
        </h1>
        <div>
          <p className="body-text">{consultationContent.section4Paragraph}</p>
        </div>
      </section>
      <section className="mb-[80px] mt-[80px] lg:mt-[96px] lg:mb-[204px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[700px]">
        <h1 className="heading-1">Investments</h1>
        <hr className="mb-[24px] mt-[37px] lg:mt-[56px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">01</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2">INDIVIDUAL CONSULTATION</h2>
              <p className="body-small lg:max-w-[300px]">
                $200 per 50-minute session
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("solo")}
            >
              Contact Us
            </button>
            {modalState === "solo" && (
              <GetInTouch
                isOpen={true}
                onClose={() => setModalState("closed")}
                onSuccess={() => setModalState("success")}
                linkSelected={"Individual Consultation"}
              />
            )}

            {modalState === "success" && (
              <Success
                text="In a world that often asks us to shrink, your message just claimed some space. That’s where healing begins. We will be in touch soon."
                onClose={() => setModalState("closed")}
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">02</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[350px]">
                Group Consultation
              </h2>
              <p className="body-small lg:max-w-[300px]">
                $80 per person (4–6 participants, 60-minute sessions)
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("group")}
            >
              Contact Us
            </button>
            {modalState === "group" && (
              <GetInTouch
                isOpen={true}
                onClose={() => setModalState("closed")}
                onSuccess={() => setModalState("success")}
                linkSelected={"Group Consultation"}
              />
            )}

            {modalState === "success" && (
              <Success
                text="In a world that often asks us to shrink, your message just claimed some space. That’s where healing begins. We will be in touch soon."
                onClose={() => setModalState("closed")}
              />
            )}
          </div>
        </div>
        <hr className="mt-[24px]" />
      </section>
      <section className="flex bg-[url(/mobile-stripes.png)] md:bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout mb-[80px]"></section>
      <PreFooter />
      <Footer />
    </div>
  );
}
