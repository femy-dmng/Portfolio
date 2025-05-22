import Image from "next/image";
import logo from "@/assets/jiji.jpg";
import style from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <Link href="./">
            <Image src={logo} alt="Logo" width={35} height={35} />
          </Link>
        </li>
        <li>
          <Link href="/">Presentation</Link>
        </li>
        <li>
          <Link href="/">Skill</Link>
        </li>
        <li>
          <Link href="/">Project</Link>
        </li>
      </ul>
    </nav>
  );
}
