import Image, { StaticImageData } from "next/image";
import styles from "./skillItem.module.scss";

type SkillItemProps = {
  image: string | StaticImageData;
  description: string;
  label: string;
};

export default function SkillItem({
  image,
  description,
  label,
}: SkillItemProps) {
  return (
    <div className={styles.logoWrapper}>
      <Image src={image} alt={description} width={40} height={40} />
      <span className={styles.techName}>{label}</span>
    </div>
  );
}
