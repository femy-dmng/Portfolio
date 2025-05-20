import Image from "next/image";
import logoGitHub from "@/assets/GitHub Logo.webp";
import logoLinkedIn from "@/assets/LinkedIn logo.webp";
import style from "./footer.module.scss";
import Link from "next/link";

export default function footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.listfooter}>
        <li>
          <Image
            className={style.logo}
            src={logoGitHub}
            alt="GitHub"
            width={40}
            height={40}
          />
          GitHub
        </li>
        <li>
          <Image
            className={style.logo}
            src={logoLinkedIn}
            alt="LinkedIn"
            width={40}
            height={40}
          />
          LinkedIn
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
