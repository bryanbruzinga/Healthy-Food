import Image from "next/image";
import styles from "./styles.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.serviceContainer}>
      <div className={styles.imgService}>
        <Image
          src="/bloco_services.svg"
          alt="serviços"
          width={600}
          height={600}
          objectFit="responsive"
        />
      </div>
      <div className={styles.serviceDescription}>
        <div>
          <h2>The best services ready </h2>
          <h2>To serve you</h2>
        </div>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button>Know More</button>
      </div>
    </section>
  );
}
