import Image from "next/image";
import Link from "next/link";

export default function Landingpage() {
  return (
    <div className="md:bg-[url(/blue-background.png)] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-full">
      <Image
        src={"/landing-group-1.svg"}
        alt="men"
        width={500}
        height={500}
        className="hidden md:flex w-[575px] fixed left-8"
      />
      <Image
        src={"/landing-group-2.svg"}
        alt="men"
        width={500}
        height={500}
        className="hidden md:flex w-[750px] fixed right-16 top-2"
      />
      <Image
        src={"/landing-group-3.svg"}
        alt="men"
        width={500}
        height={500}
        className="hidden md:flex w-[1000px] fixed bottom-0 left-1/4"
      />
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
        className="mt-16 hidden md:block"
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
        className="button-main text-blue md:text-cream md:!border-cream border-b-[1.5px] uppercase mt-8 z-50"
      >
        Welcome
      </Link>
    </div>
  );
}
