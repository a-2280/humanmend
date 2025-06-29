"use client";

import { useState, useEffect } from "react";

export default function FreeConsult({ isOpen, onClose, onSuccess }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xdkzzrvn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        onSuccess();
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

  if (!isOpen) return null;

  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-full max-w-screen flex justify-center items-start z-50 overflow-y-auto hide-scrollbar">
      <div className="bg-dark-blue p-[43px] pt-[75px] md:p-[86px] md:m-[86px] w-[54rem] max-w-full relative">
        <p
          className="heading-1 text-cream absolute top-8 right-8 !cursor-[url('/cursorButton.svg')_12_12,auto]"
          onClick={onClose}
        >
          X
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="heading-1 text-cream uppercase">
            ready for your free consult?
          </p>
          <p className="body-text text-cream text-justify">
            Starting the healing journey is never easy. Sometimes, it can feel
            like you don&apos;t even know where to begin. That&apos;s why
            we&apos;re here. Join us for a free fifteen-minute consult to
            discuss your needs and see if you think HumanMend is the right fit.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-20 mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col flex-1">
              <label htmlFor="fullName" className="body-text text-cream">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="First Last"
                required
                className="text-cream border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="pronouns" className="body-text text-cream">
                Pronouns (Optional)
              </label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                placeholder="He/Him"
                className=" text-cream border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col flex-1">
              <label htmlFor="email" className="body-text text-cream">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="emailaddress@server.com"
                className="text-cream border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="body-text text-cream">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(XXX) - XXX - XXXX"
                className="text-cream border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-fit gap-4">
            <label htmlFor="howHeard" className="body-text text-cream">
              How did you hear about us?
            </label>
            <select
              id="howHeard"
              name="howHeard"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
              className="body-text text-cream border-b-[1.5px] pb-2 outline-0"
            >
              <option value="" disabled>
                Select One
              </option>
              <option value="google">Google search</option>
              <option value="socialMedia">Social media</option>
              <option value="referral">Referral</option>
              <option value="other">Other (please specify)</option>
            </select>
          </div>

          {selectedOption === "other" && (
            <div className="mt-[-1.5rem] flex flex-col gap-2">
              <label htmlFor="otherSpecify" className="body-text text-cream">
                Please specify:
              </label>
              <input
                type="text"
                id="otherSpecify"
                name="otherSpecify"
                placeholder="Please tell us how you heard about us"
                required
                className="w-64 border-b-[1.5px] text-cream border-cream placeholder-grey text-[14px] py-2 outline-0"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="textBox" className="body-text text-cream mb-4">
              Anything you&apos;d like us to know?
            </label>
            <textarea
              id="textBox"
              name="textBox"
              placeholder="Help us make the most of your consult by sharing a little about yourself."
              className="text-cream border-[1.5px] border-cream h-[171px] placeholder-grey text-[14px] p-2"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-baseline gap-8">
            <input
              type="checkbox"
              id="understanding"
              name="understanding"
              required
            />
            <label htmlFor="understanding" className="body-text text-cream">
              I understand that HumanMend is an out-of-network practice and does
              not accept insurance directly. Superbills are available upon
              request, and we offer Thrizer to help simplify out-of-network
              reimbursement.
            </label>
          </div>
          <div className="flex justify-center items-center pb-[100px] md:pb-[10px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-main text-cream border-b-[1.5px] disabled:opacity-50 disabled:cursor-not-allowed !border-cream"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
