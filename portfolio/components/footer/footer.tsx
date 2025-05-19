import Image from "next/image";
import logoGitHub from "@/assets/GitHub Logo.webp";
import logoLinkedIn from "@/assets/LinkedIn logo.webp";
import style from "./footer.module.scss";
import Link from "next/link";

export default function footer() {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <Image src={logoGitHub} alt="GitHub" width={40} height={40} /> GitHub
        </li>
        <li>
          <Image src={logoLinkedIn} alt="LinkedIn" width={40} height={40} />{" "}
          LinkedIn
        </li>
      </ul>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}
