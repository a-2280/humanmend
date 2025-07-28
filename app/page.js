"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landingpage() {
  const [visibleImages, setVisibleImages] = useState([false, false, false]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // List of critical images to preload
  const criticalImages = [
    "/blue-background.png",
    "/landing-group-1.svg",
    "/landing-group-2.svg",
    "/landing-group-3.svg",
    "/man.png",
    "/cream_logotype.svg",
    "/blue_logotype.svg",
    "/cream_lettermark.svg",
    "/blue_lettermark.svg",
  ];

  // Preload images and track loading progress
  useEffect(() => {
    let loadCount = 0;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => {
          loadCount++;
          setLoadedCount(loadCount);
          resolve(src);
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload all critical images
    Promise.all(criticalImages.map(preloadImage))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.warn("Some images failed to preload:", error);
        // Still show content after a timeout even if some images fail
        setTimeout(() => setImagesLoaded(true), 3000);
      });
  }, []);

  // Start animations only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const timeouts = [
      setTimeout(() => setVisibleImages([true, false, false]), 300),
      setTimeout(() => setVisibleImages([true, true, false]), 800),
      setTimeout(() => setVisibleImages([true, true, true]), 1300),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [imagesLoaded]);

  // Loading screen component - matching your home page style
  const LoadingScreen = () => (
    <div className="fixed inset-0 overflow-hidden">
      <div className="md:bg-[url(/blue-background.png)] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full px-[44px] lg:px-0">
        <div className="md:hidden w-screen h-screen flex justify-center items-center mt-[-4rem]">
          <Image src="/footer.gif" alt="vase" width={100} height={100} />
        </div>
        <div className="hidden w-screen h-screen md:flex justify-center items-center">
          <Image src="/footer.gif" alt="vase" width={100} height={100} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!imagesLoaded && <LoadingScreen />}

      <div
        className={`fixed inset-0 overflow-hidden transition-opacity duration-500 ${
          imagesLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:bg-[url(/blue-background.png)] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full px-[44px] lg:px-0">
          <div className="min-w-[1750px] min-h-[1150px] max-w-[1701px] max-h-[1105px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/landing-group-1.svg"
              alt="men"
              width={650}
              height={600}
              priority
              className={`hidden md:flex absolute bottom-[110px] left-[100px] transition-all duration-700 ease-out ${
                visibleImages[0]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            />
            <Image
              src="/landing-group-2.svg"
              alt="men"
              width={800}
              height={800}
              priority
              className={`hidden md:flex absolute top-[100px] right-[150px] transition-all duration-700 ease-out ${
                visibleImages[1]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            />
            <Image
              src="/landing-group-3.svg"
              alt="men"
              width={1050}
              height={500}
              priority
              className={`hidden md:flex absolute bottom-[100px] right-[200px] transition-all duration-700 ease-out ${
                visibleImages[2]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            />
          </div>

          <Image
            src="/man.png"
            alt="man"
            width={95}
            height={91}
            priority
            className="md:hidden mt-[-5rem]"
          />

          <Image
            src="/cream_logotype.svg"
            alt="Humanmend logotype"
            width={210.88}
            height={18.968}
            priority
            className="mt-16 lg:m-0 hidden md:block"
          />

          <Image
            src="/blue_logotype.svg"
            alt="Humanmend logotype"
            width={163.393}
            height={24.48}
            priority
            className="mt-[42px] md:hidden"
          />

          <p className="heading-2 my-[35.49px] mb-[37px] max-w-[245px] md:max-w-[330px] text-center text-blue md:text-cream">
            PSYCHOTHERAPY PRACTICE FOR EATING DISORDER & ANXIETY THERAPY IN NEW
            YORK CITY
          </p>

          <Image
            src="/cream_lettermark.svg"
            alt="Lettermark"
            width={28.61}
            height={31.26}
            priority
            className="hidden md:block"
          />

          <Image
            src="/blue_lettermark.svg"
            alt="Lettermark"
            width={22.168}
            height={24.224}
            priority
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
    </>
  );
}
