import styles from "./skill.module.scss";
import Image from "next/image";

// Logos
import logoC from "@/assets/skill logo/C++ Logo.png";
import logoJava from "@/assets/skill logo/Java Logo.webp";
import logoJS from "@/assets/skill logo/js.png";
import logoHTML from "@/assets/skill logo/html logo.webp";
import logoSQL from "@/assets/skill logo/mysql logo.webp";
import logoReact from "@/assets/skill logo/React logo.png";
import logoGit from "@/assets/skill logo/git.png";
import logoVSCode from "@/assets/skill logo/vscode.png";
import logoNext from "@/assets/skill logo/next.png";
import SkillItem from "@/components/skill/skillItem";

export default function Skill() {
  return (
    <section id="skill-section" className={styles.sectionContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.skill}>
          <p className={styles.title}>Skills</p>

          <div className={styles.skillContent}>
            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>web :</p>
              <SkillItem
                image={logoHTML}
                description="logo HTML"
                label="HTML"
              />
              <SkillItem
                image={logoJS}
                description="logo JS"
                label="JavaScript"
              />
              <SkillItem
                image={logoReact}
                description="logo React"
                label="React"
              />
              <SkillItem
                image={logoNext}
                description="logo Next"
                label="Next.js"
              />
              <div className={styles.logoRow}></div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>logiciel:</p>
              <SkillItem image={logoC} description="logo C++" label="C++" />
              <SkillItem
                image={logoJava}
                description="logo Java"
                label="Java"
              />
              <div className={styles.logoRow}></div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>BDD:</p>
              <SkillItem image={logoSQL} description="logo SQL" label="SQL" />
              <div className={styles.logoRow}></div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>design:</p>
              <SkillItem
                image={logoJS}
                description="logo JS"
                label="JavaScript"
              />
              <SkillItem
                image={logoReact}
                description="logo React"
                label="React"
              />
              <div className={styles.logoRow}></div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>autre:</p>
              <SkillItem image={logoGit} description="logo Git" label="Git" />
              <SkillItem
                image={logoVSCode}
                description="logo VSCode"
                label="VSCode"
              />
              <div className={styles.logoRow}></div>
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
