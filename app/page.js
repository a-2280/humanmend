"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landingpage() {
  const [visibleImages, setVisibleImages] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => {
      setVisibleImages([true, false, false]);
    }, 1000);

    setTimeout(() => {
      setVisibleImages([true, true, false]);
    }, 1500);

    setTimeout(() => {
      setVisibleImages([true, true, true]);
    }, 2000);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="md:bg-[url(/blue-background.png)] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full px-[44px] lg:px-0">
        <div className="min-w-[1750px] min-h-[1150px] max-w-[1701px] max-h-[1105px] absolute top-0 left-1/2 -translate-x-1/2">
          <Image
            src={"/landing-group-1.svg"}
            alt="men"
            width={650}
            height={600}
            className={`hidden md:flex absolute bottom-[110px] left-[100px] transition-all duration-700 ease-out ${
              visibleImages[0]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          />
          <Image
            src={"/landing-group-2.svg"}
            alt="men"
            width={800}
            height={800}
            className={`hidden md:flex absolute top-[100px] right-[150px] transition-all duration-700 ease-out ${
              visibleImages[1]
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          />
          <Image
            src={"/landing-group-3.svg"}
            alt="men"
            width={1050}
            height={500}
            className={`hidden md:flex absolute bottom-[100px] right-[200px] transition-all duration-700 ease-out ${
              visibleImages[2]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          />
        </div>
        <Image
          src={"/man.png"}
          alt="man"
          width={95}
          height={91}
          className="md:hidden"
        />
        <Image
          src={"/cream_logotype.svg"}
          alt="Humanmend logotype"
          width={210.88}
          height={18.968}
          className="mt-16 lg:m-0 hidden md:block"
        />
        <Image
          src={"/blue_logotype.svg"}
          alt="Humanmend logotype"
          width={163.393}
          height={24.48}
          className="mt-[42px] md:hidden"
        />
        <p className="heading-2 my-[35.49px] mb-[37px] max-w-[245px] md:max-w-[330px] text-center text-blue md:text-cream">
          PSYCHOTHERAPY PRACTICE FOR EATING DISORDER & ANXIETY THERAPY IN NEW
          YORK CITY
        </p>
        <Image
          src={"/cream_lettermark.svg"}
          alt="Lettermark"
          width={28.61}
          height={31.26}
          className="hidden md:block"
        />
        <Image
          src={"/blue_lettermark.svg"}
          alt="Lettermark"
          width={22.168}
          height={24.224}
          className="md:hidden"
        />
        <Link
          href="/home"
          className="button-main text-blue md:text-cream md:!border-cream border-b-[1.5px] uppercase mt-[35.49px] z-50 no-color hidden md:block"
        >
          Welcome
        </Link>
        <Link
          href="/home"
          className="button-main text-blue md:text-cream md:!border-cream border-b-[1.5px] uppercase mt-[35.49px] z-50 md:hidden"
        >
          Welcome
        </Link>
      </div>
    </div>
  );
}
