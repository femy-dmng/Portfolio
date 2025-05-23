import ProjectItem from "@/components/project/projectItem";
import styles from "./projectSection.module.scss";
import figmalogo from "@/assets/skill logo/figma.png";
import nextlogo from "@/assets/skill logo/next.png";
import reactlogo from "@/assets/skill logo/React logo.png";
import vercelLogo from "@/assets/skill logo/vercel.png";

import logoHtml from "@/assets/skill logo/html logo.webp";
import logoCss from "@/assets/skill logo/CSS.png";
import logoJS from "@/assets/skill logo/JS logo.webp";

import calendrier from "@/assets/project/Calendrier.png";
import portfolio from "@/assets/project/projectTest.png";

export default function Project() {
  return (
    <section id="projet">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectItemContainer}>
        <p className={styles.textBackground}>
          projects
          <br />
          projects
          <br />
          projects
          <br />
          projects
          <br />
          projects
          <br />
          projects
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
            {
              logoImage: vercelLogo,
              logoDescription: "Logo Vercel",
              logoLabel: "Vercel",
            },
          ]}
          description="This project is my personal portfolio — the very website you're browsing right now.

It was built using Next.js, with Vercel handling the hosting. I also set up continuous deployment directly from a GitHub repository"
          githubLink="https://github.com/femy-dmng/Portfolio/"
        />
        <ProjectItem
          isEven={true}
          image={calendrier}
          title="Calendrier"
          logo={[
            {
              logoImage: logoHtml,
              logoDescription: "Logo html",
              logoLabel: "HTML",
            },
            {
              logoImage: logoCss,
              logoDescription: "Logo css",
              logoLabel: "CSS",
            },
            {
              logoImage: logoJS,
              logoDescription: "Logo JS",
              logoLabel: "JavaScript",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        />
      </div>
    </section>
  );
}
