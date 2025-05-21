import styles from "./skill.module.scss";
import Image from "next/image";

// Logos
import logoC from "@/assets/skill logo/C++ Logo.webp";
import logoJava from "@/assets/skill logo/Java Logo.webp";
import logoJS from "@/assets/skill logo/JS logo.webp";
import logoHTML from "@/assets/skill logo/html logo.webp";
import logoSQL from "@/assets/skill logo/mysql logo.webp";
import logoReact from "@/assets/skill logo/React logo.png";
import logoGit from "@/assets/skill logo/git.png";
import logoVSCode from "@/assets/skill logo/vscode.jpeg";
import logoNext from "@/assets/skill logo/next.png";

export default function Skill() {
  return (
    <section id="skill-section" className={styles.sectionContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.skill}>
          <p className={styles.title}>Skills</p>

          <div className={styles.skillContent}>
            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>web :</p>
              <div className={styles.logoRow}>
                <Image src={logoHTML} alt="HTML" width={20} height={20} />
                <Image src={logoJS} alt="JS" width={20} height={20} />
                <Image src={logoReact} alt="React" width={20} height={20} />
                <Image src={logoNext} alt="Next" width={20} height={20} />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>logiciel:</p>
              <div className={styles.logoRow}>
                <Image src={logoC} alt="C/C++" width={20} height={20} />
                <Image src={logoJava} alt="Java" width={20} height={20} />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>BDD:</p>
              <div className={styles.logoRow}>
                <Image src={logoSQL} alt="SQL" width={20} height={20} />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>design:</p>
              <div className={styles.logoRow}>
                <Image src={logoJS} alt="Placeholder" width={20} height={20} />
                <Image
                  src={logoReact}
                  alt="Placeholder"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>autre:</p>
              <div className={styles.logoRow}>
                <Image src={logoGit} alt="Git" width={20} height={20} />
                <Image src={logoVSCode} alt="VSCode" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.studentText}>
          <h2>
            <span className={styles.IT}>IT</span>student
          </h2>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>
    </section>
  );
}
