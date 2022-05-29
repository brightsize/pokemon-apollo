import React from "react";

import { Card } from "../../atoms";
import styles from "./CardLink.module.css";

type CardLinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

const CardLink = ({ href, title, children }: CardLinkProps) => {
  return (
    <Card>
      <a href={href} className={styles["card-link"]}>
        <h2>{title} &rarr;</h2>
      </a>
      {children}
    </Card>
  );
};

export { CardLink };
