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
      title: "There is beauty in the broken.",
      content: (
        <p className="body-small mb-[24px]">
          We are not here to &#34;fix you.&#34; We&#39;re here to help support
          you on your healing journey.
        </p>
      ),
    },
    {
      title: "We treat the whole person, not just the diagnosis.",
      content: (
        <p className="body-small mb-[24px]">
          We won&#39;t put you in a box. Your experiences can&#39;t be reduced
          to a collection of symptoms or a diagnostic label.
        </p>
      ),
    },
    {
      title: "All parts are welcome.",
      content: (
        <p className="body-small mb-[24px]">
          You&#39;re the expert of your own life. Our role is to ask questions
          that help illuminate the path you&#39;re already sensing.
        </p>
      ),
    },
    {
      title: "Authenticity matters.",
      content: (
        <p className="body-small mb-[24px]">
          Our work together aims to create space for you to discover and reclaim
          the parts of yourself that may have been set aside to please others or
          stay safe.
        </p>
      ),
    },
    {
      title: "Compassionate Curiosity.",
      content: (
        <p className="body-small mb-[24px]">
          Your identity is valid and worthy of celebration, not merely
          tolerance.
        </p>
      ),
    },
    {
      title: "Health at Every Size (HAES).",
      content: (
        <p className="body-small mb-[24px]">
          All bodies, shapes, and sizes are welcome here. Your worth isn&#39;t
          determined by your appearance.
        </p>
      ),
    },
    {
      title: "LGBTQIA+ Affirming.",
      content: (
        <p className="body-small mb-[24px]">
          Even the aspects of yourself you&#39;ve been taught to hide or reject
          have wisdom to offer. We create space for all of you.
        </p>
      ),
    },
  ];

  const accordionItems2 = [
    {
      title: "What if I don’t feel ready? What if I can’t let go?",
      content: (
        <p className="body-small mb-[24px]">
          If the thought of recovery stirs up fear, know that this ambivalence
          is completely normal. Your eating disorder has been with you through
          difficult times. It&#39;s been your coping strategy, your companion,
          your way of feeling safe in an unpredictable world. We honor this
          relationship and understand that letting go happens gradually, not
          overnight. You don&#39;t have to be &#34;all in&#34; to begin healing.
          Curiosity is enough. The desire for something different is enough.
          We&#39;ll meet you exactly where you are as we join you on your
          journey.
        </p>
      ),
    },
    {
      title: "Do you only work with eating disorders?",
      content: (
        <p className="body-small mb-[24px]">
          No, we also specialize in working with clients struggling with
          anxiety, specifically in the areas of perfectionism, relationships,
          people pleasing, and self-esteem. We work from a trauma informed lens
          and view all parts of you as worthy. Read more about our approach to
          anxiety treatment{" "}
          <Link href="/anxiety-therapy" className="border-b-1">
            here
          </Link>
          . Beyond anxiety and eating disorder therapy, we offer general therapy
          services and will offer group therapy services in the near future. Our
          practice also provides consultation opportunities. To learn more,
          visit our{" "}
          <Link href="/consultation" className="border-b-1">
            consultation page
          </Link>{" "}
          or inquire further about our services via our{" "}
          <Link href="/contact" className="border-b-1">
            contact page
          </Link>
          .
        </p>
      ),
    },
    {
      title: "What is the cost of therapy? Do you accept insurance?",
      content: (
        <p className="body-small mb-[24px]">
          We&#39;ve made an intentional choice to practice as out-of-network
          providers.  This allows us to focus entirely on your individualized
          treatment without the limitations of insurance regulations. At
          Humanmend, our rate is $225 per 50 minute session. Many insurance
          plans offer significant coverage for therapy services through
          out-of-network benefits: many PPO plans provide 50-80% coverage for
          therapy sessions after your out-of-network deductible has been met.
        </p>
      ),
    },
    {
      title: "How do I submit for reimbursement?",
      content: (
        <div className="mb-[24px]">
          <p className="body-small">We have two options</p>
          <ul className="body-small">
            <li className="ml-4 md:ml-5 lg:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:ml-[-.75rem] lg:mx-2">
                •
              </span>
              Thrizer: We have partnered with{" "}
              <Link href="#" className="border-b-1">
                Thrizer
              </Link>{" "}
              to help support the claim submission and reimbursement process so
              you don&#39;t have to. There is a minimal fee to use this service
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Superbills: If preferred, we can provide you with a superbill each
              month containing all the information your insurance requires for
              reimbursement processing.
            </li>
          </ul>
          <p className="body-small">
            Please note, if we submit claims to insurance through Thrizer or if
            you&#39;d like a superbill, a diagnosis will need to be assigned.
          </p>
          <p className="body-small mt-4">We accept multiple payment methods:</p>
          <ul className="body-small">
            <li className="ml-4 md:ml-5 lg:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:ml-[-.75rem] lg:mx-2">
                •
              </span>
              HSA/FSA cards
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Credit cards
            </li>
            <li className="ml-4 md:m-0">
              <span className="body-text ml-[-1rem] mr-2 md:mx-[.5rem]">•</span>
              Debit cards
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "How long will I need therapy?",
      content: (
        <p className="body-small mb-[24px]">
          Depending on what you are currently struggling with will determine our
          treatment trajectory. All humans are different and unique and the
          treatment should be as well. Though it&#39;s hard to predict exact
          timelines, we typically see clients weekly for a minimum of six months
          to one+ years. We have many long-term clients who continue to seek
          support and therapy to navigate healing in different areas of their
          life, even after the original symptoms have decreased. We can assess
          this together!
        </p>
      ),
    },
    {
      title: "What is your approach to therapy?",
      content: (
        <p className="body-small mb-[24px]">
          We utilize an individualized (vs one size fits all) approach
          throughout your treatment. We will check in regularly to reassess
          goals, as we go, and determine next steps. See the{" "}
          <Link href="/about" className="border-b-1">
            about page
          </Link>{" "}
          for more information.
        </p>
      ),
    },
    {
      title: "How do I get started?",
      content: (
        <p className="body-small mb-[24px]">
          Please fill out a{" "}
          <Link href="/contact" className="border-b-1">
            contact form
          </Link>{" "}
          and we will get back to you within 48 business hours to schedule a
          free 15 minute consultation call to ensure we are a good fit.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[240px] px-[44px] flex flex-col justify-center items-center w-full max-w-[415px] md:max-w-[650px] z-10">
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
          alt="Man"
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
        <div className="mb-[50px] lg:flex lg:justify-center lg:items-center lg:mb-[204px]">
          <div className="mb-[35px] lg:m-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end">
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
          <div className="mt-[24px] lg:mt-[80px] lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center">
            <Image
              src="/man-3.png"
              alt="man"
              width={630}
              height={502.85}
              className="lg:w-[630px]"
            />
          </div>
        </div>
        <div className="mb-[50px] lg:m-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="flex flex-col justify-center items-center lg:items-center lg:ml-[199px] lg:w-1/2 lg:max-w-[405px]">
            <h1 className="heading-1">{aboutContent.section3Heading}</h1>
            <p className="body-text my-[24px] lg:my-[32px]">
              {aboutContent.section3Paragraph}
            </p>
            <h2 className="heading-2 mb-[24px] lg:mb-[32px] max-w-[300px] lg:max-w-[400px]">
              {aboutContent.section3Subheading}
            </h2>
            <button className="button-main">
              {aboutContent.section3Button}
            </button>
          </div>
          <div className="mt-[24px] lg:mt-[80px] lg:m-0 lg:w-1/2 md:flex md:justify-center md:items-center">
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
            alt="Lindsie"
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
          Instead, I draw from these frameworks flexibly, adapting to what feels
          most supportive and effective for your unique journey.
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
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
            <button className="button-small mt-[15px] md:mt-[24px] lg:m-0">
              Read More
            </button>
          </div>
        </div>
        <hr className="my-[24px]" />
        <h2 className="heading-2 mb-[24px] lg:mb-[48px] lg:mt-[24px]">
          IF YOU HAVE ANY QUESTIONS ABOUT THESE APPROACHES or wonder what might
          be right for you, CONTACT the humanmend office.
        </h2>
        <button className="button-main">Contact Us</button>
      </section>
      <section className="px-[44px] max-w-7xl">
        <Image
          src="/flower-1.png"
          alt="flower"
          width={960.83}
          height={385}
          className="w-full max-w-[354.19px] lg:max-w-[960.83px]"
        />
      </section>
      <section className="my-[80px] lg:mt-[204px] lg:mb-[194px] w-full max-w-[415px] md:max-w-[1310px] px-[44px]">
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]">OUR VALUES</h1>
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
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="heading-2 my-[24px] max-w-[300px] md:max-w-[500px] lg:mt-[70px] lg:mb-[48px]">
            READY TO BEGIN? BOOK YOUR FREE FIFTEEN MINUTE CONSULT & BEGIN the
            journey to your best self.
          </h2>
          <button className="button-main">Book Now</button>
        </div>
      </section>
      <section className="flex bg-[url(/stripes.png)] bg-cover bg-center w-full h-[100px] md:h-[427px] full-width-breakout"></section>
      <section
        className="my-[80px] lg:mt-[204px] lg:mb-[166px] w-full max-w-[415px] md:max-w-[1310px] px-[44px]"
        id="FAQ"
      >
        <h1 className="heading-1 mb-[32px] lg:mb-[86px]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <hr />
        <ul>
          {accordionItems2.map((item, index) => (
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
      <PreFooter />
      <Footer />
    </div>
  );
}
