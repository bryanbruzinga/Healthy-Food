import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Healthy Food</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>HEALTHY RECIPES</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>BLOG</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>JOIN</a>
            </Link>
          </li>

          <li className={styles.registerButton}>
            <Link href="/cadastro">
              <a>REGISTER</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
