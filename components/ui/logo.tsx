import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/GlintHawk-logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2.5"
      aria-label="Glinthawk Technology"
    >
      <Image src={logo} alt="Glinthawk Logo" width={32} height={32} />
      <span className="font-nacelle text-lg font-semibold tracking-tight text-white">
        Glinthawk
      </span>
    </Link>
  );
}
