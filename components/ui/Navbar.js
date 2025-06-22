"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex w-full max-w-7xl justify-center lg:justify-between items-center mt-[59px] relative px-12">
      <ul className="flex-1 hidden lg:flex gap-4 justify-between max-w-[388px]">
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          className=""
        >
          <Link href={""}>Services</Link>
          {servicesOpen && (
            <ul className="absolute pt-4 flex flex-col gap-4 z-999">
              <li className="w-fit">
                <Link href={"/anxiety-therapy"}>Anxiety Therapy</Link>
              </li>
              <li className="w-fit">
                <Link href={"/eating-disorder-therapy"}>
                  Eating Disorder Therapy
                </Link>
              </li>
              <li className="w-fit">
                <Link href={"/group-therapy"}>Group Therapy</Link>
              </li>
              <li className="w-fit">
                <Link href={"/consultation"}>Consultation</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <Link href={""}>About</Link>
          {aboutOpen && (
            <ul className="absolute pt-4 z-999">
              <li className="w-fit">
                <Link href={"/faqs"}>FAQs</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <Link href={"/home"} className="mx-12">
        <Image
          src={"/blue_logotype.svg"}
          alt="logotype"
          width={221}
          height={25.84}
          className="max-w-[142.92px] md:max-w-none"
        />
      </Link>
      <ul className="flex-1 hidden lg:flex gap-4 justify-between max-w-[388px]">
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Image
        src={"/plus.svg"}
        alt="burger menu"
        width={30}
        height={30}
        className="absolute right-12 lg:hidden cursor-pointer w-full max-w-[25px] md:max-w-[30px]"
        onClick={() => setMobileOpen(!mobileOpen)}
      />
      {mobileOpen && (
        <ul className="p-4 pb-8 w-full flex justify-evenly items-center flex-wrap gap-6 absolute top-8 right-0 bg-[url(/background_texture_image.png)] bg-repeat bg-cover z-999 px-[43px]">
          <li className="w-fit">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="w-fit">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="w-fit">
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="w-fit">
            <Link href={"/faqs"}>FAQs</Link>
          </li>
          <li className="w-fit">
            <Link href={"/anxiety-therapy"}>Anxiety Therapy</Link>
          </li>
          <li className="w-fit">
            <Link href={"/eating-disorder-therapy"}>
              Eating Disorder Therapy
            </Link>
          </li>
          <li className="w-fit">
            <Link href={"/group-therapy"}>Group Therapy</Link>
          </li>
          <li className="w-fit">
            <Link href={"/consultation"}>Consultation</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
