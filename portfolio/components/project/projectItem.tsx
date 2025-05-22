import Image, { StaticImageData } from "next/image";
import styles from "./projectItem.module.scss";
import SkillItem from "../skill/skillItem";

type ProjectItemProps = {
  image: string | StaticImageData;
  title: string;
  logo: {
    logoImage: StaticImageData;
    logoDescription: string;
    logoLabel: string;
  }[];
  description: string;
};

export default function ProjectItem({
  image,
  title,
  logo,
  description,
}: ProjectItemProps) {
  return (
    <article className={styles.projectContainer}>
      <Image src={image} alt="Image projet" />
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
      </div>
    </article>
  );
}
