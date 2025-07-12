import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue mix-blend-multiply w-full p-[45px] md:p-[84px] flex flex-col gap-[28px] md:gap-[69px] justify-center items-center full-width-breakout">
      <p className="heading-1 max-w-[250px] md:max-w-[325px] text-cream">
        HUMANMEND PSYCHOTHERAPY 26 Court street, suite 409 brooklyn, NY 11242
      </p>
      <Image
        src={"/cream_lettermark.svg"}
        alt="lettermark"
        width={35}
        height={35}
        className="max-w-[25px] md:max-w-[35px]"
      />
      <div className="flex justify-center items-baseline gap-2 md:hidden">
        <Link
          href="https://www.instagram.com/humanmend"
          className="button-main border-cream text-cream"
        >
          Instagram
        </Link>
        <p className="body-text text-cream">/</p>
        <Link href="#" className="button-main border-cream text-cream">
          Email
        </Link>
      </div>
      <div className="w-full flex gap-8 justify-between items-center md:hidden">
        <p className="heading-1 text-cream">© HUMANMEND 2025</p>
        <p className="heading-1 text-cream">Site by Sugarcoat</p>
      </div>
      <div className="hidden w-full md:flex gap-8 justify-between items-center px-[43px]">
        <p className="heading-1 text-cream">© HUMANMEND 2025</p>
        <div className="flex justify-center items-baseline gap-2">
          <Link
            href="#"
            className="button-main !border-cream text-cream no-hover no-color"
          >
            Instagram
          </Link>
          <p className="body-text text-cream">/</p>
          <Link
            href="mailto:info@humanmend.com"
            className="button-main !border-cream text-cream no-hover no-color"
          >
            Email
          </Link>
        </div>
        <p className="heading-1 text-cream">Site by Sugarcoat</p>
      </div>
    </footer>
  );
}
