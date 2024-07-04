import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Arunkumar's copyright {new Date().getFullYear()} Any one can copy
        and uses it
      </p>
    </footer>
  );
}
