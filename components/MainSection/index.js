import Image from "next/image";
import styles from "./styles.module.css";

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainerLeft}>
        <h2>Ready for trying a new recipe?</h2>
        <div>
          <input type="text" placeholder="Search healthy recipes" />
          <button></button>
        </div>
      </div>
      <div className={styles.mainContainerRight}>
        <Image
          src="/illustration.svg"
          alt="ilustração"
          width={760}
          height={650}
          objectFit="responsive"
        />
      </div>
    </section>
  );
}
