"use client";

import Link from "next/link";

export default function Popup({ title, text, link, onClose }) {
  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-full max-w-screen flex justify-center items-start z-50 overflow-y-auto hide-scrollbar">
      <div className="bg-dark-blue p-[43px] pt-[75px] md:p-[86px] md:m-[86px] w-[54rem] max-w-full relative flex flex-col justify-center items-center h-screen md:h-auto">
        <p
          className="heading-1 text-cream absolute top-8 right-8 !cursor-[url('/cursorButton.svg')_12_12,auto]"
          onClick={onClose}
        >
          X
        </p>
        <div className="flex flex-col justify-center items-center gap-[32px] md:mb-[245px]">
          <p className="heading-1 text-cream uppercase !leading-4">{title}</p>
          <div>
            <p className="body-text text-cream max-w-[612px]">{text}</p>
          </div>
        </div>
        <div className="h-full flex flex-col-reverse">
          <Link href={"/blog"} className="button-main text-cream !border-cream">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
