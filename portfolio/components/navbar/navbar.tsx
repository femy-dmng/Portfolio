"use client";
import Image from "next/image";
import logo from "@/assets/jiji.jpg";
import style from "./navbar.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={style.navbar}>
      <button className={style.burgerMenu} onClick={toggleMenu}>
        <span
          className={`${style.burgerBar} ${isOpen ? style.open : ""}`}
        ></span>
        <span
          className={`${style.burgerBar} ${isOpen ? style.open : ""}`}
        ></span>
        <span
          className={`${style.burgerBar} ${isOpen ? style.open : ""}`}
        ></span>
      </button>

      <div className={style.logoContainer}>
        <Link href="#presentation" onClick={closeMenu}>
          <Image src={logo} alt="Logo" width={35} height={35} />
        </Link>
      </div>

      <ul className={`${style.list} ${isOpen ? style.open : ""}`}>
        <li>
          <Link href="#presentation" onClick={closeMenu}>
            Presentation
          </Link>
        </li>
        <li>
          <Link href="#skill" onClick={closeMenu}>
            Skill
          </Link>
        </li>
        <li>
          <Link href="#projet" onClick={closeMenu}>
            Project
          </Link>
        </li>
      </ul>
    </nav>
  );
}
