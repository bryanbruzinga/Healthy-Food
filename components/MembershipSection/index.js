import Image from "next/image";
import styles from "./styles.module.css";
import Tada from "react-reveal/Tada";
import Slide from "react-reveal/Slide";

export default function MembershipSection() {
  return (
    <section className={styles.MembershipSectionContainer}>
      <Tada>
        <div className={styles.MembershipOfferContainer}>
          <h2>Join our membership to get special offer</h2>

          <div>
            <input type="text" placeholder="Enter your email address" />
            <button>Join</button>
          </div>
        </div>
      </Tada>
      <Slide right>
        <div className={styles.MembershipImg}>
          <Image
            src="/bloco_final_image.svg"
            alt="Membership"
            width={620}
            height={620}
            objectFit="responsive"
          />
        </div>
      </Slide>
    </section>
  );
}
