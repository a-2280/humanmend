import Image from "next/image";
import Link from "next/link";

export default function Landingpage() {
  return (
    <div className="md:bg-[url(/landing-page-1.png)] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full">
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
        height={24.48}
        className="mt-24 hidden md:block"
      />
      <Image
        src={"/blue_logotype.svg"}
        alt="Humanmend logotype"
        width={210.88}
        height={24.48}
        className="mt-16 md:hidden"
      />
      <p className="heading-1 my-8 max-w-[400px] text-center text-blue md:text-cream">
        PSYCHOTHERAPY PRACTICE FOR EATING DISORDER & ANXIETY THERAPY IN NEW YORK
        CITY
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
        width={28.61}
        height={31.26}
        className="md:hidden"
      />
      <Link
        href="/home"
        className="button-main text-blue md:text-cream md:!border-cream border-b-[1.5px] uppercase mt-8"
      >
        Welcome
      </Link>
    </div>
  );
}
