import Image from "next/image";
import Application from "./Application";
import Success from "./Success";
import { useState } from "react";

export default function PreFooter() {
  const [modalState, setModalState] = useState("closed");

  return (
    <section className="w-full max-w-[520px] md:max-w-[650px] flex flex-col justify-center items-center mb-[64px] lg:mb-[204px] px-[20px] md:px-[43px]">
      <Image
        src="/footer.gif"
        alt="Vase"
        width={845}
        height={610}
        className="mb-[24px] md:mb-[96px] w-full lg:min-w-[845px]"
      />
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
  );
}
