"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "@/components/ui/MobileNavbar";
import { useState } from "react";

export default function Navbar(props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full max-w-7xl justify-center lg:justify-between items-center pt-[59px] px-12 lg:fixed top-0 left-1/2 lg:-translate-x-1/2">
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
            <Link href={"/about"}>About</Link>
            {aboutOpen && (
              <ul className="absolute pt-4 z-999">
                <li className="w-fit">
                  <Link href={"#FAQ"}>FAQs</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Link href={"/home"} className="mx-12 no-border">
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
          className="fixed right-12 top-[59px] lg:absolute lg:right-12 lg:top-auto lg:hidden w-full max-w-[25px] md:max-w-[30px] z-[9999]"
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </nav>
      {mobileOpen && <MobileNavbar onClose={() => setMobileOpen(false)} />}
    </>
  );
}
