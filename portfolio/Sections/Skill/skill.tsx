import styles from "./skill.module.scss";
import Image from "next/image";
import logoc from "@/assets/skill logo/C++ Logo.webp";
import logojava from "@/assets/skill logo/Java Logo.webp";
import logojs from "@/assets/skill logo/JS logo.webp";
import logohtml from "@/assets/skill logo/html logo.webp";
import logosql from "@/assets/skill logo/mysql logo.webp";
import logoreact from "@/assets/skill logo/React logo.png";

export default function Skill() {
  return (
    <section id="skill-section" className={styles.sectionContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.skill}>
          <p className={styles.title}>Skills</p>
          <ul className={styles.skillist}>
            <li>
              <Image src={logoc} alt="LogoC" width={35} height={35} />
              C, C++
            </li>
            <li>
              <Image src={logojava} alt="LogoJava" width={35} height={35} />
              JAVA
            </li>
            <li>
              <Image src={logojs} alt="LogoJS" width={35} height={35} />
              JAVASCRIPT
            </li>
            <li>
              <Image src={logohtml} alt="Logohtml" width={35} height={35} />
              HTML, CSS
            </li>
            <li>
              <Image src={logosql} alt="LogoSQL" width={35} height={35} />
              SQL
            </li>
            <li>
              <Image src={logoreact} alt="LogoReact" width={35} height={35} />
              REACT
            </li>
          </ul>
        </div>
        <h2>
          <span className={styles.IT}>IT</span>Student
        </h2>
      </div>

      <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
