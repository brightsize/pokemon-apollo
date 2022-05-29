import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <a href="https://github.com/brightsize/">Bright Size Software</a>
    </footer>
  );
};

export { Footer };
