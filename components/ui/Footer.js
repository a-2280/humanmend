import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue mix-blend-multiply w-screen p-12 flex flex-col gap-12 justify-center items-center">
      <p className="heading-1 uppercase max-w-[310px] text-center text-cream">
        HUMANMEND PSYCHOTHERAPY 26 Court street, suite 409 brooklyn, NY 11242
      </p>
      <Image
        src={"/cream_lettermark.svg"}
        alt="lettermark"
        width={35}
        height={35}
      />
      <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-center">
        <p className="heading-1 text-cream uppercase">© HUMANMEND 2025</p>
        <div className="flex justify-center items-center gap-2">
          <Link
            href="#"
            className="button-small text-cream border-b-[1px] uppercase leading-none"
          >
            Instagram
          </Link>
          <p className="body-text text-cream">/</p>
          <Link
            href="#"
            className="button-small text-cream border-b-[1px] uppercase leading-none"
          >
            Email
          </Link>
        </div>
        <p className="heading-1 text-cream uppercase">Site by Sugarcoat</p>
      </div>
    </footer>
  );
}
