import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Healthy Food</h1>
      <nav>
        <ul>
          <li>Healthy Recipes</li>
          <li>Blog</li>
          <li>Join</li>
          <li>Register</li>
        </ul>
      </nav>
    </header>
  );
}
