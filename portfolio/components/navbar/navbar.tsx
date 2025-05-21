import Image from "next/image";
import logo from "@/assets/jiji.jpg";
import style from "./navbar.module.scss";

export default function Navbar(){
    return(
        <nav className={style.navbar}>
            <ul className={style.list}>
                <li><Image src={logo} alt="Logo" 
                width={40}
                height={40} /></li>
                <li><a href="/">Presentation</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Project</a></li>
            </ul>
        </nav>
    )
}