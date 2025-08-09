"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import SoloOrGroup from "@/components/ui/SoloOrGroup";
import Success from "@/components/ui/Success";
import Link from "next/link";
import Popup from "@/components/ui/Popup";
import GetInTouch from "@/components/ui/GetInTouch";
import PortableTextRenderer from "@/components/ui/PortableTextRenderer";

export default function AnxietySpecialty() {
  const [modalState, setModalState] = useState("closed");
  const [aboutContent, setAboutContent] = useState(null);
  const [valuesExpandIndex, setValuesExpandIndex] = useState(null);
  const [faqExpandIndex, setFaqExpandIndex] = useState(null);

  useEffect(() => {
    if (aboutContent && window.location.hash === "#FAQ") {
      const elem = document.getElementById("FAQ");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [aboutContent]);

  useEffect(() => {
    const query = `*[_type == "about"][0]{
      ...,
      heroImageAlt,
      profileImageAlt,
      therapistHeadshotAlt,
      decorativeImageAlt,
      valuesAccordion[]{
        title,
        content
      },
      faqAccordion[]{
        title,
        content
      }
    }`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 1750)),
    ]).then(([data]) => {
      setAboutContent(data);
    });
  }, []);

  if (!aboutContent) {
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

  const toggleValuesExpand = (index) => {
    setValuesExpandIndex(valuesExpandIndex === index ? null : index);
  };

  const toggleFaqExpand = (index) => {
    setFaqExpandIndex(faqExpandIndex === index ? null : index);
  };

  // Use accordion items from Sanity or fallback to empty arrays
  const valuesAccordionItems = aboutContent?.valuesAccordion || [];
  const faqAccordionItems = aboutContent?.faqAccordion || [];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[250px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{aboutContent.section1Heading}</h1>
        <p className="my-[24px] lg:my-[32px] body-text text-align-last">
          {aboutContent.section1Paragraph}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[325px] md:max-w-[390px]">
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
          alt={aboutContent?.heroImageAlt || "Man"}
          width={117.4}
          height={112}
          className="mt-[67px] md:mt-[133px] max-w-[96px] md:max-w-none"
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
      <section className="mt-[80px] lg:mt-[204px] px-[44px] lg:px-0 flex flex-col justify-center items-center w-full">
        <div className="mb-[93.45px] lg:flex lg:justify-center lg:items-center lg:mb-[204px]">
          <div className="mb-[35px] lg:m-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end lg:pl-[44px]">
            <div className="lg:max-w-[400px] lg:mr-[231px]">
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
          </div>
          <div className="mt-[93.45px] lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pr-[44px]">
            <Image
              src="/man-3.png"
              alt={aboutContent?.profileImageAlt || "man"}
              width={630}
              height={502.85}
              className="lg:w-[630px]"
            />
          </div>
        </div>
        <div className="mb-[93.45px] lg:m-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="flex flex-col justify-center items-center lg:items-center lg:ml-[199px] lg:w-1/2 lg:max-w-[405px] lg:pr-[44px]">
            <h1 className="heading-1">{aboutContent.section3Heading}</h1>
            <p className="body-text my-[24px] lg:my-[32px]">
              {aboutContent.section3Paragraph}
            </p>
            <h2 className="heading-2 mb-[24px] lg:mb-[32px] max-w-[300px] lg:max-w-[400px]">
              {aboutContent.section3Subheading}
            </h2>
            <Link href={"/blog-post-1"} className="button-main">
              {aboutContent.section3Button}
            </Link>
          </div>
          <div className="mt-[93.45px] lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center lg:pl-[44px]">
            <Image src="/vase-1.png" alt="vase" width={670.23} height={595} />
          </div>
        </div>
      </section>
      <section className="mb-[80px] lg:mt-[204px] px-[44px] flex flex-col lg:flex-row justify-center items-center w-full max-w-[415px] md:max-w-[650px] lg:max-w-none">
        <div className="mb-[80px] lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div className="lg:max-w-[400px]">
            <h1 className="heading-1">{aboutContent.section4Heading}</h1>
            <p className="body-text my-[24px]">
              {aboutContent.section4Paragraph}
            </p>
            <hr className="mb-[15px]" />
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
            <hr className="mt-[15px] mb-[24px]" />
            <p className="body-text">
              This specialized education and experience deepened my
              understanding of how our thoughts, emotions, behaviors, and lived
              experiences shape — and are shaped by — the stories we tell
              ourselves about who we are and what we deserve.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/Lindsiemeek-headshots-atp-92-2.JPEG"
            alt={aboutContent?.therapistHeadshotAlt || "Lindsie"}
            width={863}
            height={1139}
          />
        </div>
      </section>
      <section className="mb-[80px] lg:mt-[204px] lg:mb-[194px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[700px]">
        <h1 className="heading-1">THERAPEUTIC APPROACHES</h1>
        <p className="body-text my-[24px]">
          My therapeutic approach has been shaped by diverse training that
          allows me to meet you where you are. While these approaches inform my
          work, our sessions won&#39;t be about rigidly applying techniques.
          Instead, I draw from these frameworks flexibly, adapting to what
          feelsx most supportive and effective for your unique journey.
        </p>
        <hr className="mb-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">01</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2">Psychodynamic therapy</h2>
              <p className="body-small">
                to develop insight into recurring patterns
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup")}
            >
              Read More
            </button>
            {modalState === "popup" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"PSYCHODYNAMIC THERAPY"}
                text={
                  "This approach helps us look inward and get curious about the patterns we repeat — especially the ones that seem to come out of nowhere. It’s based on the idea that our early relationships and past experiences shape how we show up today. Through insight, reflection, and a trusting relationship with your therapist, psychodynamic work helps connect the dots between your past and present so you can shift patterns that no longer serve you. It’s especially helpful for folks who want to understand themselves on a deeper level."
                }
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
                Attachment-Focused EMDR (Basic Training 1-3 from the Parnell
                Institute){" "}
              </h2>
              <p className="body-small lg:max-w-[250px]">
                to process difficult experiences and strengthen your internal
                resources
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup2")}
            >
              Read More
            </button>
            {modalState === "popup2" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"Attachment-Focused EMDR (AF-EMDR)"}
                text={
                  "Sometimes, talk alone isn’t enough, especially when trauma is stored deep in the body. EMDR (Eye Movement Desensitization and Reprocessing) helps the brain reprocess distressing memories and beliefs—especially the ones that feel deeply rooted. The attachment-focused lens brings extra care and attunement to the relational wounds behind those beliefs, helping us heal with more safety and connection. EMDR is evidence-based and especially effective for trauma, anxiety, and negative core beliefs that feel hard to shake."
                }
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">03</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 text-left">
                Cognitive Behavioral Therapy (CBT)
              </h2>
              <p className="body-small text-left">
                to understand thought-emotion-behavior patterns
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup3")}
            >
              Read More
            </button>
            {modalState === "popup3" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"Cognitive Behavioral Therapy (CBT)"}
                text={
                  "CBT is a practical, structured approach that helps us understand the connection between our thoughts, emotions, and behaviors. When anxiety or unhelpful thinking patterns take over, CBT offers tools to challenge them and respond in new ways. It’s evidence-based and highly effective for anxiety, depression, and eating disorders, and can be tailored to meet your specific needs and goals."
                }
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">04</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[400px]">
                Acceptance and Commitment Therapy (ACT)
              </h2>
              <p className="body-small">
                to help you live according to your values
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup4")}
            >
              Read More
            </button>
            {modalState === "popup4" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"Acceptance and Commitment Therapy (ACT)"}
                text={
                  "ACT blends mindfulness with behavior change, helping us move through painful thoughts and emotions without getting stuck in them. Instead of fighting what we feel, ACT invites us to make space for it — and to take meaningful steps in the direction of our values. It’s a flexible, compassionate approach that helps us live with more intention, even when life feels hard."
                }
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">05</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 text-left">
                Dialectical Behavior Therapy (DBT)
              </h2>
              <p className="body-small text-left lg:max-w-[375px]">
                to develop skills for mindfulness, distress regulation, and
                relationships.
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup5")}
            >
              Read More
            </button>
            {modalState === "popup5" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"Dialectical Behavior Therapy (DBT)"}
                text={
                  "DBT is especially helpful when emotions feel intense, overwhelming, or hard to manage. It teaches practical skills for staying present, regulating emotions, navigating relationships, and tolerating distress without making things worse. Originally developed to support people with big emotional swings or high sensitivity, it’s now widely used for anxiety, eating disorders, and more. DBT balances acceptance with change—helping us build a life that feels more steady, connected, and aligned."
                }
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <div className="w-full flex justify-start items-start gap-[24px] lg:gap-[50px]">
          <p className="numbers-text">06</p>
          <div className="flex-1 lg:flex lg:justify-between lg:items-start">
            <div className="flex flex-col justify-center items-start lg:gap-[24px]">
              <h2 className="heading-2 !text-left lg:max-w-[350px]">
                parts work / Internal Family Systems (IFS)
              </h2>
              <p className="body-small lg:max-w-[350px]">
                to understand the different parts of yourself with curiosity and
                compassion
              </p>
            </div>
            <button
              className="button-small mt-[15px] md:mt-[24px] lg:m-0"
              onClick={() => setModalState("popup6")}
            >
              Read More
            </button>
            {modalState === "popup6" && (
              <Popup
                isOpen={true}
                onClose={() => setModalState("closed")}
                title={"Internal Family Systems (IFS / Parts Work)"}
                text={
                  "We all carry different “parts” within us — like the inner critic, the overachiever, the anxious protector, or the one still holding old pain. These parts often show up to keep us safe, especially when life feels overwhelming. Parts work helps us get curious about these inner voices instead of pushing them away. Through compassion and connection, we learn to understand their stories and soften their grip. A well-known approach to this is Internal Family Systems (IFS), which offers a pathway back to our grounded, wise inner Self — the part of us that can hold it all with clarity and care. It’s not about fixing ourselves, it’s about listening."
                }
              />
            )}
          </div>
        </div>
        <hr className="my-[24px]" />
        <h2 className="heading-2 mb-[24px] lg:mb-[48px] lg:mt-[24px]">
          IF YOU HAVE ANY QUESTIONS ABOUT THESE APPROACHES or wonder what might
          be right for you, CONTACT the humanmend office.
        </h2>
        <button
          className="button-main"
          onClick={() => setModalState("getInTouch")}
        >
          Contact Us
        </button>
        {modalState === "getInTouch" && (
          <GetInTouch
            isOpen={true}
            onClose={() => setModalState("closed")}
            onSuccess={() => setModalState("success")}
            linkSelected={""}
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
        <Image
          src="/flower-1.png"
          alt={aboutContent?.decorativeImageAlt || "flower"}
          width={960.83}
          height={385}
          className="w-full max-w-[354.19px] lg:max-w-[960.83px]"
        />
      </section>
      <section className="my-[80px] lg:mt-[204px] lg:mb-[194px] w-full max-w-[415px] md:max-w-[1310px] px-[44px]">
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]">OUR VALUES</h1>
        <hr />
        <ul>
          {valuesAccordionItems.map((item, index) => (
            <li key={index}>
              <div
                className="body-text py-[24px] flex items-start"
                onClick={() => toggleValuesExpand(index)}
              >
                <span className="body-text mr-[24px] select-none">
                  {valuesExpandIndex === index ? "-" : "+"}
                </span>
                <span className="flex-1">{item.title}</span>
              </div>
              <div className={`${valuesExpandIndex === index ? "" : "hidden"}`}>
                <PortableTextRenderer content={item.content} />
              </div>
              <hr />
            </li>
          ))}
        </ul>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="heading-2 my-[24px] max-w-[300px] md:max-w-[500px] lg:mt-[70px] lg:mb-[48px]">
            READY TO BEGIN? BOOK YOUR FREE FIFTEEN MINUTE CONSULT & BEGIN the
            journey to your best self.
          </h2>
          <button className="button-main">Book Now</button>
        </div>
      </section>
      <section className="flex bg-[url(/mobile-stripes.png)] md:bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="my-[80px] lg:mt-[204px] lg:mb-[166px] w-full max-w-[415px] md:max-w-[1310px] px-[44px]">
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]" id="FAQ">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <hr />
        <ul>
          {faqAccordionItems.map((item, index) => (
            <li key={index}>
              <div
                className="body-text py-[24px] flex items-start"
                onClick={() => toggleFaqExpand(index)}
                id="FAQ"
              >
                <span className="body-text mr-[24px] select-none">
                  {faqExpandIndex === index ? "-" : "+"}
                </span>
                <span className="flex-1">{item.title}</span>
              </div>
              <div className={`${faqExpandIndex === index ? "" : "hidden"}`}>
                <PortableTextRenderer content={item.content} />
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
