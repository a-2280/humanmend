"use client";

import { useState, useEffect } from "react";

export default function Application({ isOpen, onClose, onSuccess }) {
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
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-screen flex justify-center items-start z-50 overflow-y-auto hide-scrollbar">
      <div className="bg-dark-blue p-[43px] pt-[75px] md:p-[86px] md:m-[86px] w-[54rem] max-w-full relative">
        <p
          className="heading-1 text-cream absolute top-8 right-8 cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="heading-1 text-cream uppercase">
            INTERESTED IN WORKING AT HUMANMEND?
          </p>
          <p className="body-text text-cream text-justify">
            Thank you for your interest in HumanMend. We&apos;re a practice
            grounded in empathy, integrity, and the belief that healing is a
            human process. Tell us about your background, values, and what draws
            you to this work. We&apos;re honored to get to know you.
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
                className="text-cream outline-0 focus:placeholder-transparent border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
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
                className=" text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
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
                className="text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
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
                className="text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
            <div className="flex flex-col w-fit gap-4">
              <label
                htmlFor="currentlyLicensed"
                className="body-text text-cream"
              >
                Are you currently licensed?
              </label>
              <select
                id="currentlyLicensed"
                name="currentlyLicensed"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
                className="body-text text-cream border-b-[1.5px] pb-2 outline-0"
              >
                <option value="" disabled>
                  Yes/No
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {selectedOption === "yes" && (
              <>
                <div className="flex flex-col justify-between items-start min-h-[68px]">
                  <label htmlFor="pronouns" className="body-text text-cream">
                    License Type & State(s):
                  </label>
                  <input
                    type="text"
                    id="pronouns"
                    name="pronouns"
                    placeholder="List licensing and state"
                    className=" text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2 w-full"
                  />
                </div>
                <div className="flex flex-col justify-between items-start min-h-[68px]">
                  <label htmlFor="pronouns" className="body-text text-cream">
                    Where are you based?
                  </label>
                  <input
                    type="text"
                    id="pronouns"
                    name="pronouns"
                    placeholder="City/State"
                    className=" text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2 w-full"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col justify-between items-start gap-4">
              <label htmlFor="pronouns" className="body-text text-cream">
                How many years have you been
                <br /> practicing?
              </label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                placeholder="I have been practicing for X years."
                className=" text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2 w-full"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between items-start">
              <label htmlFor="pronouns" className="body-text text-cream">
                Areas of specialization or interest?
              </label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                placeholder="e.g., eating disorders, trauma, anxiety, etc."
                className=" text-cream outline-0 border-b-[1.5px] border-cream placeholder-grey text-[14px] py-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="textBox" className="body-text text-cream mb-4">
              How do your values as a therapist align with HumanMend&apos;s
              mission and approach?
            </label>
            <textarea
              id="textBox"
              name="textBox"
              placeholder="Tell us what you think makes you the right fit for HumanMend."
              className="text-cream outline-0 border-[1.5px] border-cream h-[77px] placeholder-grey text-[14px] tracking-[0.04rem] p-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="resume" className="body-text text-cream mb-4">
              Upload your resume
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept="image/*,.pdf,.doc,.docx"
                id="file-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="file-upload"
                className="flex items-start justify-start border-[1.5px] border-cream h-[77px] text-grey text-[14px] tracking-[0.04rem] p-2 cursor-pointer"
              >
                Click or drag a file to this area to upload.
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex-1 flex flex-col w-fit gap-4">
              <label
                htmlFor="currentlyLicensed"
                className="body-text text-cream"
              >
                Are you open to future opportunities
                <br /> if we aren&apos;t currently hiring?
              </label>
              <select
                id="currentlyLicensed"
                name="currentlyLicensed"
                required
                className="body-text text-cream border-b-[1.5px] pb-2 outline-0"
              >
                <option value="" disabled>
                  Yes/No
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex flex-col justify-between items-start w-fit gap-4 min-h-[89px]">
              <label htmlFor="howHeard" className="body-text text-cream">
                How did you hear about us?
              </label>
              <select
                id="howHeard"
                name="howHeard"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
                className="body-text text-cream border-b-[1.5px] pb-2 outline-0 w-full"
              >
                <option value="" disabled>
                  Select One
                </option>
                <option value="google">Google search</option>
                <option value="socialMedia">Social media</option>
                <option value="referral">Referral</option>
                <option value="other">Other (please specify)</option>
              </select>
              {selectedOption === "other" && (
                <div className="flex flex-col gap-2 mt-8">
                  <label
                    htmlFor="otherSpecify"
                    className="body-text text-cream"
                  >
                    Please specify:
                  </label>
                  <input
                    type="text"
                    id="otherSpecify"
                    name="otherSpecify"
                    placeholder="Please tell us how you heard about us"
                    required
                    className="w-64 border-b-[1.5px] text-cream outline-0 border-cream placeholder-grey text-[14px] py-2"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center pb-[100px] md:pb-[10px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-main text-cream border-b-[1.5px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed !border-cream"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
