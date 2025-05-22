import ProjectItem from "@/components/project/projectItem";
import styles from "./projectSection.module.scss";
import figmalogo from "@/assets/skill logo/figma.png";
import nextlogo from "@/assets/skill logo/next.png";
import reactlogo from "@/assets/skill logo/React logo.png";
import portfolio from "@/assets/project/projectTest.png";

export default function Project() {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectItemContainer}>
        <p className={styles.textBackground}>
          project
          <br />
          project
          <br />
          project
          <br />
          project
          <br />
          project
          <br />
          project
          <br />
        </p>
        <ProjectItem
          image={portfolio}
          title="Mon Portfolio"
          logo={[
            {
              logoImage: figmalogo,
              logoDescription: "Logo Figma",
              logoLabel: "Figma",
            },
            {
              logoImage: nextlogo,
              logoDescription: "Logo Next",
              logoLabel: "Next",
            },
            {
              logoImage: reactlogo,
              logoDescription: "Logo React",
              logoLabel: "React",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        />
        <ProjectItem
          isEven={true}
          image={portfolio}
          title="Calendrier"
          logo={[
            {
              logoImage: figmalogo,
              logoDescription: "Logo Figma",
              logoLabel: "Figma",
            },
            {
              logoImage: nextlogo,
              logoDescription: "Logo Next",
              logoLabel: "Next",
            },
            {
              logoImage: reactlogo,
              logoDescription: "Logo React",
              logoLabel: "React",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        />
      </div>
    </section>
  );
}
