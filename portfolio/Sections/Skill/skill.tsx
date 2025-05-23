import styles from "./skill.module.scss";

// Logos
import logoC from "@/assets/skill logo/C++ Logo.webp";
import logoJava from "@/assets/skill logo/Java Logo.webp";
import logoJS from "@/assets/skill logo/JS logo.webp";
import logoTS from "@/assets/skill logo/TS.webp";
import logoHTML from "@/assets/skill logo/html logo.webp";
import logoCSS from "@/assets/skill logo/CSS.png";
import logoSQL from "@/assets/skill logo/mysql logo.webp";
import logoReact from "@/assets/skill logo/React logo.png";
import logoGit from "@/assets/skill logo/git.png";
import logoVSCode from "@/assets/skill logo/vscode.png";
import logoNext from "@/assets/skill logo/next.png";
import logofigma from "@/assets/skill logo/figma.png";
import SkillItem from "@/components/skill/skillItem";

export default function Skill() {
  return (
    <section id="skill" className={styles.sectionContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.skill}>
          <p className={styles.title}>Skills</p>

          <div className={styles.skillContent}>
            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>web :</p>
              <div className={styles.logoRow}>
                <SkillItem
                  image={logoHTML}
                  description="logo HTML"
                  label="HTML"
                />
                <SkillItem image={logoCSS} description="logo CSS" label="CSS" />
                <SkillItem
                  image={logoJS}
                  description="logo JS"
                  label="JavaScript"
                />
                <SkillItem
                  image={logoTS}
                  description="logo TS"
                  label="TypeScript"
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
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>logiciel :</p>
              <div className={styles.logoRow}>
                <SkillItem image={logoC} description="logo C++" label="C++" />
                <SkillItem
                  image={logoJava}
                  description="logo Java"
                  label="Java"
                />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>BDD :</p>
              <div className={styles.logoRow}>
                <SkillItem image={logoSQL} description="logo SQL" label="SQL" />
              </div>
            </div>

            <div className={styles.skillLine}>
              <p className={styles.categoryTitle}>outils :</p>
              <div className={styles.logoRow}>
                <SkillItem image={logoGit} description="logo Git" label="Git" />
                <SkillItem
                  image={logoVSCode}
                  description="logo VSCode"
                  label="VSCode"
                />
                <SkillItem
                  image={logofigma}
                  description="logo Figma"
                  label="Figma"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.studentText}>
          <h2>
            <span className={styles.IT}>IT</span>student
          </h2>
          <p className={styles.para}>
            As part of my ongoing two-year technical degree in IT and
            Electronics, I’m developing strong skills in programming, data
            management, networking, and cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
}
