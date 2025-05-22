import ProjectItem from "@/components/project/projectItem";
import styles from "./projectSection.module.scss";

export default function Project() {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectItemContainer}>
        <ProjectItem />
      </div>
    </section>
  );
}
