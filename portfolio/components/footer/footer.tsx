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
          <Link href="https://github.com/femy-dmng" target="_blank">
            <Image
              className={style.logo}
              src={logoGitHub}
              alt="GitHub"
              width={40}
              height={40}
            />
            GitHub{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/femy-domingo/"
            target="_blank"
          >
            <Image
              className={style.logo}
              src={logoLinkedIn}
              alt="LinkedIn"
              width={40}
              height={40}
            />
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
