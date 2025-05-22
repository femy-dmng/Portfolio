import Image from "next/image";
import PImage from "@/assets/project/projectTest.png";
import Figma from "@/assets/skill logo/figma.png";
import styles from "./projectItem.module.scss";
import SkillItem from "../skill/skillItem";

export default function ProjectItem() {
  return (
    <article className={styles.projectContainer}>
      <Image src={PImage} alt="Image projet" />
      <div className={styles.description}>
        <div className={styles.titleLine}>
          <h3 className={styles.projectTitle}>Project</h3>
          <div className={styles.technoLogo}>
            <SkillItem image={Figma} description="Logo Figma" label="Figma" />
            <SkillItem image={Figma} description="Logo Figma" label="Figma" />
          </div>
        </div>
        <p className={styles.textDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </article>
  );
}
