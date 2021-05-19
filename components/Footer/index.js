import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© Copyrights 2019 Stack. All Rights Reserved.</span>
      <div>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
    </footer>
  );
}
