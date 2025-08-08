import Image from "next/image";
import Application from "./Application";
import Success from "./Success";
import { useState } from "react";

export default function PreFooter() {
  const [modalState, setModalState] = useState("closed");

  // ADD THIS STATE VARIABLE for the newsletter form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ADD THIS FUNCTION for the newsletter form
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // Add a form type identifier
    formData.append("formType", "newsletter_prefooter");

    try {
      const response = await fetch("https://formspree.io/f/mqabnrbe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        e.target.reset(); // Just reset the form
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-[520px] md:max-w-[650px] flex flex-col justify-center items-center mb-[64px] lg:mb-[204px] px-[44px]">
      <Image
        src="/footer.gif"
        alt="Vase"
        width={845}
        height={610}
        loading="lazy"
        className="mb-[24px] md:mb-[96px] w-full lg:min-w-[845px]"
      />
      <h2 className="heading-2 mb-[48px] lg:mb-[86px] max-w-[350px] lg:max-w-[490px]">
        for more support, check out our blog, or subscribe to receive our free
        printable note cards: Permission Notes for Being Human.
      </h2>

      {/* UPDATED NEWSLETTER FORM */}
      <form
        className="w-full flex justify-center items-center mb-[48px] lg:mb-[96px]"
        onSubmit={handleNewsletterSubmit}
        // REMOVED: action="https://formspree.io/f/mqabnrbe"
        // REMOVED: method="POST"
      >
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required
          disabled={isSubmitting}
          className="border-b-1 border-dark-blue body-text placeholder:!text-blue py-2 w-full outline-0 focus:!placeholder-transparent disabled:opacity-50"
        />
        <button type="submit" className="!border-none" disabled={isSubmitting}>
          <Image
            src="/right-arrow.svg"
            alt="right arrow"
            width={24}
            height={24}
            className="min-w-[15px] md:min-w-[20px] ml-[-1rem] md:ml-[-1.5rem]"
          />
        </button>
      </form>

      <div className="flex flex-col justify-center items-center gap-[12px]">
        <p className="body-text">
          Now serving clients in NY, NJ, CT, MA, and CO.
        </p>
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
