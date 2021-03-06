import React from "react";
import Link from "next/link";

import { Card } from "../../atoms";
import styles from "./CardLink.module.css";

type CardLinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const CardLink = ({ href, title, children, style }: CardLinkProps) => {
  return (
    <Card style={style}>
      <Link href={href}>
        <a className={styles["card-link"]}>
          <h2>{title} &rarr;</h2>
        </a>
      </Link>
      {children}
    </Card>
  );
};

export { CardLink };
