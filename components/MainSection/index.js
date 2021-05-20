import Image from "next/image";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainerLeft}>
        <h2>Ready for trying a new recipe?</h2>
        <div>
          <input type="text" placeholder="Search healthy recipes" />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className={styles.mainContainerRight}>
        <Image
          src="/Illustration.svg"
          alt="ilustração"
          width={760}
          height={650}
          objectFit="responsive"
        />
      </div>
    </section>
  );
}
