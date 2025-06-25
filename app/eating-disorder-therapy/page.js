"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import GetInTouch from "@/components/ui/GetInTouch";
import Success from "@/components/ui/Success";

export default function AnxietySpecialty() {
  const [modalState, setModalState] = useState("closed");
  const [eatingDisorderContent, setEatingDisorderContent] = useState(null);
  const [expandIndex, setExpandIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  useEffect(() => {
    const query = `*[_type == "eating-disorder"][0]`;

    client.fetch(query).then((data) => {
      setEatingDisorderContent(data);
    });
  }, []);

  if (!eatingDisorderContent) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  const accordionItems = [
    {
      title: "What your eating disorder doesn't want you to know.",
      content: (
        <p className="body-small mb-[24px]">
          It&apos;s not really about the food or your body, even if your mind
          insists it is. The obsessions, the rules, the behaviors—they&apos;re
          the surface-level symptoms of deeper needs and emotions. Your eating
          disorder is a coping mechanism, a way to manage anxiety, process
          emotions, create a sense of control, or protect yourself from pain.
          When we understand this truth, recovery becomes less about forcing
          yourself to eat differently and more about addressing what&apos;s
          happening beneath the surface. We&apos;ve got you in this deeper
          exploration
        </p>
      ),
    },
    {
      title: 'Uncovering the "Why?" behind your eating disorder.',
      content: (
        <div className="mb-[24px]">
          <p className="body-small">
            Our approach to eating disorder recovery goes beyond superficial
            symptom management. We don&apos;t just want to change your
            behaviors—we want to understand them. Together, we&apos;ll explore:
          </p>
          <ul className="body-small">
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              What function is your eating disorder serving in your life?
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              When did these patterns begin, and what were they protecting you
              from?
            </li>
            <li className="ml-4 md:ml-5 lg:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:ml-[-.75rem] lg:mx-2">
                •
              </span>
              How is your relationship with food connected to your deeper needs
              for safety, control, comfort, or validation?
            </li>
          </ul>
          <p className="body-small">
            Our therapeutic judgment-free zone allows us to get curious about
            your eating disorder as an intelligent adaptation—not a character
            flaw or moral failing.
          </p>
        </div>
      ),
    },
    {
      title: "Reclaiming your power, your peace, and your plate.",
      content: (
        <div className="mb-[24px]">
          <p className="body-small">
            Recovery isn&apos;t about forcing yourself to eat
            &ldquo;normally&rdquo; through sheer willpower. It&apos;s about
            gently taking back the power your eating disorder has claimed over
            your life. Working from a Health at Every Size® approach,
            we&apos;ll help you:
          </p>
          <ul className="body-small">
            <li className="ml-4 md:ml-5 lg:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:ml-[-.75rem] lg:mx-2">
                •
              </span>
              Challenge the eating disorder voice that keeps you trapped in
              cycles of restriction, binging, or compensating behaviors
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Reconnect with your body&apos;s natural hunger and fullness cues
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Dismantle the good food/bad food mentality that fuels anxiety
              around eating
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Build genuine self-worth that isn&apos;t tied to your appearance
              or food choices
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Practice allowing yourself to emotionally and physically take up
              space in the world
            </li>
          </ul>
          <p className="body-small">
            We recognize that eating disorders and disordered eating affect
            people in bodies of every size, just as health can exist in every
            size body. Our society&apos;s narrow definitions of
            &ldquo;healthy&rdquo; or &ldquo;normal&rdquo; bodies contribute to
            the shame that fuels eating disorders. We&apos;re here to challenge
            those definitions, not reinforce them. The goal isn&apos;t perfect
            eating—it&apos;s freedom. Freedom from constant thoughts about food.
            Freedom from body criticism. Freedom to show up authentically in
            your life.
          </p>
        </div>
      ),
    },
    {
      title: "There is so much more to you.",
      content: (
        <p className="body-small mb-[24px]">
          Your eating disorder has convinced you that your value lies in your
          appearance or your ability to control your food intake. We&apos;re
          here to remind you of a fundamental truth: you have so much more to
          offer this world than how you look. Your unique perspectives, your
          compassion, your creativity, your intelligence, your humor—these are
          the things that make you indispensable. These are the things that the
          world is missing when your eating disorder keeps you small and
          distracted. We believe in your capacity to heal. We believe in your
          right to a peaceful relationship with food and your body. And we
          believe that your authentic self—not your eating disorder
          self—deserves to be known, expressed, and celebrated.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="my-[51px] lg:mt-[240px] lg:mb-[97px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
        <h1 className="heading-1">{eatingDisorderContent.section1Heading}</h1>
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
      <section className="flex bg-[url(/ed-1.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[699px] px-[43px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading-1 mb-[26px] lg:mb-[32px]">
            {eatingDisorderContent.section2Heading}
          </h1>
          <p className="body-text">{eatingDisorderContent.section2Paragraph}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {eatingDisorderContent.section2Paragraph1}
          </p>
          <p className="body-text">
            <span className="ml-4"></span>
            {eatingDisorderContent.section2Paragraph2}
          </p>
        </div>
      </section>
      <section className="px-[43px] max-w-7xl">
        <Image src="/man-1.png" alt="Man" width={626} height={547} />
      </section>
      <section className="my-[80px] lg:my-[204px] w-full max-w-[415px] md:max-w-[1310px] px-[43px]">
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]">
          We&apos;ve got secrets (that aren&apos;t really secret)
        </h1>
        <hr />
        <ul>
          {accordionItems.map((item, index) => (
            <li key={index}>
              <div
                className="body-text cursor-pointer py-[24px] flex items-start"
                onClick={() => toggleExpand(index)}
              >
                <span className="body-text mr-[24px] select-none">
                  {expandIndex === index ? "-" : "+"}
                </span>
                <span className="flex-1">{item.title}</span>
              </div>
              <div className={`${expandIndex === index ? "" : "hidden"}`}>
                {item.content}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section className="mt-[51px] mb-[80px] lg:mt-[204px] lg:mb-[156px] px-[43px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[700px] z-10">
        <h1 className="heading-1">{eatingDisorderContent.section3Heading}</h1>
        <p className="mt-[24px] lg:mt-[32px] body-text">
          {eatingDisorderContent.section3Paragraph}
        </p>
        <p className="mb-[24px] lg:mb-[32px] body-text">
          <span className="ml-4"></span>
          {eatingDisorderContent.section3Paragraph1}
        </p>
        <h2 className="mb-[37px] lg:mb-[48px] heading-2 w-full max-w-[275px] md:max-w-[405px]">
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
