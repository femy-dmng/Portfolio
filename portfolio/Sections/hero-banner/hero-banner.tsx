import Image from "next/image";
import styles from "./hero-banner.module.scss";
import lou from "@/assets/louu.jpg";

export default function Herobanner() {
  return (
    <section id="presentation" className={styles.herobanner}>
      <h1 className={styles.devTitle}>Web Developer</h1>
      <h2 className={styles.nameTitle}>Femy DOMINGO</h2>
      <div className={styles.presentation}>
        <div className={styles.test}>
          <p className={styles.back}>Portfolio</p>
          <p>
            I'm an IT student based in France with a passion for front-end
            development and creating smooth, engaging user experiences on the
            web. From clean interfaces to interactive components. Currently
            honing my skills in HTML, CSS, JavaScript, and frameworks like
            React, I'm always looking for opportunities to learn, collaborate,
            and build projects that not only look good — but feel great to use.
            Feel free to explore my work below.
          </p>
        </div>
        <div>
          <Image src={lou} alt="photo lou" width={370} height={370} />
        </div>
      </div>
    </section>
  );
}
