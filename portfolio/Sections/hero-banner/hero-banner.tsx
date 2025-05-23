import Image from "next/image";
import styles from "./hero-banner.module.scss";
import lou from "@/assets/louu.jpg";

export default function Herobanner() {
  return (
    <section id="presentation" className={styles.herobanner}>
      <h1 className={styles.devTitle}>Développeuse Web</h1>
      <h2 className={styles.nameTitle}>Femy DOMINGO</h2>
      <div className={styles.presentation}>
        <div className={styles.test}>
          <p className={styles.back}>Portfolio</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Image src={lou} alt="photo lou" width={370} height={370} />
        </div>
      </div>
    </section>
  );
}
