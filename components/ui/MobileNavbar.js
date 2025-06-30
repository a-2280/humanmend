"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function MobileNavbar({ onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <nav className="bg-blue h-screen w-screen z-[9999] absolute top-0 left-1/2 -translate-x-1/2 pt-[61px]">
      <div
        className="w-full h-full flex flex-col justify-start items-center"
        onClick={handleBackgroundClick}
      >
        <Link href={"/home"} className="mb-[91px]" onClick={handleLinkClick}>
          <Image
            src="/cream_logotype.svg"
            alt="Humanmend"
            width={142.92}
            height={17}
          />
        </Link>
        <ul className="flex flex-col justify-center items-center gap-[48px]">
          <li>
            <Link
              href={"/home"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/anxiety-therapy"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Anxiety Therapy
            </Link>
          </li>
          <li>
            <Link
              href={"/eating-disorder-therapy"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Eating Disorder Therapy
            </Link>
          </li>
          <li>
            <Link
              href={"/group-therapy"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Group Therapy
            </Link>
          </li>
          <li>
            <Link
              href={"/consultation"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Consultation
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="button-main text-cream !border-cream"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
