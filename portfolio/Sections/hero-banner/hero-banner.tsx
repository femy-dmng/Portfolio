import Image from "next/image";
import styles from "./hero-banner.module.scss";
import lou from "@/assets/louu.jpg";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <h1>Développeuse Web</h1>
      <h2>Femy DOMINGO</h2>
      <div className={styles.presentation}>
        <div>
          <p className={styles.back}>Portfolio</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <Image src={lou} alt="photo lou" width={370} height={370} />
        </div>
      </div>
    </section>
  );
}
