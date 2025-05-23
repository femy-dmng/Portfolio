import Image, { StaticImageData } from "next/image";
import styles from "./projectItem.module.scss";
import SkillItem from "../skill/skillItem";
import Link from "next/link";
import githubIcon from "@/assets/skill logo/github.png";

type ProjectItemProps = {
  isEven?: boolean;
  image: string | StaticImageData;
  title: string;
  logo: {
    logoImage: StaticImageData;
    logoDescription: string;
    logoLabel: string;
  }[];
  description: string;
  githubLink?: string;
};

export default function ProjectItem({
  isEven = false,
  image,
  title,
  logo,
  description,
  githubLink,
}: ProjectItemProps) {
  return (
    <article
      className={`${styles.projectContainer} ${isEven ? styles.even : ""}`}
    >
      <Image className={styles.imageProject} src={image} alt="Image projet" />

      <div className={styles.description}>
        <div className={styles.titleLine}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.technoLogo}>
            {logo.map((logo, index) => (
              <SkillItem
                key={index}
                image={logo.logoImage}
                description={logo.logoDescription}
                label={logo.logoLabel}
              />
            ))}
          </div>
        </div>
        <p className={styles.textDescription}>{description}</p>
        {githubLink && (
          <Link href={githubLink} target="_blank" className={styles.githubLink}>
            <Image
              src={githubIcon}
              alt="Github logo link"
              width={30}
              height={30}
            />
          </Link>
        )}
      </div>
    </article>
  );
}
