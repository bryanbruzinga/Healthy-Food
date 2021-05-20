import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";

export default function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className={styles.header}>
      <h1>Healthy Food</h1>
      <nav>
        <button className={styles.mobileButton} onClick={handleMenuMobile}>
          <MdRestaurantMenu />
        </button>
        <ul
          className={menuMobile ? `${styles.active}` : `${styles.deactivated}`}
        >
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
