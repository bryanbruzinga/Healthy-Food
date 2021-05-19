import styles from "./styles.module.css";
import Link from "next/link";

export default function HeaderCadastro() {
  return (
    <header className={styles.headerCadastro}>
      <Link href="/">
        <a>
          <h1>Healthy Food</h1>
        </a>
      </Link>
    </header>
  );
}
