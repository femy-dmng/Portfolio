import styles from "./skill.module.scss";

export default function Skill() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.skill}>
          <p className={styles.title}>Skills</p>
          <ul>
            <li>
              {/*<Image src={logo} alt="Logo" width={35} height={35} />*/}
              C, C++
            </li>
            <li>
              {/*<Image src={logo} alt="Logo" width={35} height={35} />*/}
              JAVA
            </li>
            <li>
              {/*<Image src={logo} alt="Logo" width={35} height={35} />*/}
              JAVASCRIPT
            </li>
            <li>
              {/*<Image src={logo} alt="Logo" width={35} height={35} />*/}
              HTML, CSS
            </li>
            <li>
              {/*<Image src={logo} alt="Logo" width={35} height={35} />*/}
              SQL
            </li>
          </ul>
        </div>
        <h2>
          <span className={styles.IT}>IT</span>Student
        </h2>
      </div>

      <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}
