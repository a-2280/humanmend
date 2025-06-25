"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import SoloOrGroup from "@/components/ui/SoloOrGroup";

export default function AnxietySpecialty() {
  const [modalState, setModalState] = useState("closed");
  const [aboutContent, setAboutContent] = useState(null);
  const [expandIndex, setExpandIndex] = useState(null);

  useEffect(() => {
    const query = `*[_type == "about"][0]`;

    client.fetch(query).then((data) => {
      setAboutContent(data);
    });
  }, []);

  if (!aboutContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What your eating disorder doesn't want you to know.",
      content: (
        <p className="body-small mb-[24px]">
          It's not really about the food or your body, even if your mind insists
          it is. The obsessions, the rules, the behaviors—they're the
          surface-level symptoms of deeper needs and emotions. Your eating
          disorder is a coping mechanism, a way to manage anxiety, process
          emotions, create a sense of control, or protect yourself from pain.
          When we understand this truth, recovery becomes less about forcing
          yourself to eat differently and more about addressing what's happening
          beneath the surface. We've got you in this deeper exploration
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[240px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{aboutContent.section1Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {aboutContent.section1Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[275px] md:max-w-[390px]">
          {aboutContent.section1Subheading}
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("consult")}
        >
          {aboutContent.section1Button}
        </button>

        <Image
          src="/man(1).png"
          alt="Man"
          width={117.4}
          height={112}
          className="mt-[64px] md:mt-[133px]"
        />

        {modalState === "consult" && (
          <SoloOrGroup
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
      <section className="my-[51px] lg:mt-[240px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px]">
        <div className="mb-[50px]">
          <div className="mb-[35px]">
            <h1 className="heading-1">{aboutContent.section2Heading}</h1>
            <p className="body-text mt-[24px] lg:mt-[32px]">
              {aboutContent.section2Paragraph}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {aboutContent.section2Paragraph1}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {aboutContent.section2Paragraph2}
            </p>
          </div>
          <div>
            <Image src="/man-3.png" alt="man" width={630} height={502.85} />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="heading-1">{aboutContent.section3Heading}</h1>
            <p className="body-text my-[24px] lg:my-[32px]">
              {aboutContent.section3Paragraph}
            </p>
            <h2 className="heading-2 mb-[24px] lg:mb-[32px]">
              {aboutContent.section3Subheading}
            </h2>
            <button className="button-main mb-[32px]">
              {aboutContent.section3Button}
            </button>
          </div>
          <div>
            <Image src="/vase-1.png" alt="vase" width={670.23} height={595} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>{aboutContent.section4Heading}</h1>
          <p>{aboutContent.section4Paragraph}</p>
          {aboutContent.listItems &&
            aboutContent.listItems.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-start items-start w-full">
                  <p className="body-small !text-left">{item}</p>
                </div>
                {index < aboutContent.listItems.length - 1 && (
                  <hr className="my-[15px] lg:my-[24px]" />
                )}
              </div>
            ))}
        </div>
        <div>
          <Image
            src="/Lindsiemeek-headshots-atp-92-2.JPEG"
            alt="Lindsie"
            width={863}
            height={1139}
          />
        </div>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
