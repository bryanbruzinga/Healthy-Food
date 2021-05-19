import Image from "next/image";
import styles from "./styles.module.css";

export default function MembershipSection() {
  return (
    <section className={styles.MembershipSectionContainer}>
      <div className={styles.MembershipOfferContainer}>
        <h2>Join our membership to get special offer</h2>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>Join</button>
        </div>
      </div>
      <Image
        src="/bloco_final_image.svg"
        alt="Membership"
        width={620}
        height={620}
        objectFit="responsive"
      />
    </section>
  );
}
