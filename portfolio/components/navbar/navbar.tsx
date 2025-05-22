import Image from "next/image";
import logo from "@/assets/jiji.jpg";
import style from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <Link href="#presentation">
            <Image src={logo} alt="Logo" width={35} height={35} />
          </Link>
        </li>
        <li>
          <Link href="#presentation">Presentation</Link>
        </li>
        <li>
          <Link href="#skill">Skill</Link>
        </li>
        <li>
          <Link href="#projet">Project</Link>
        </li>
      </ul>
    </nav>
  );
}
