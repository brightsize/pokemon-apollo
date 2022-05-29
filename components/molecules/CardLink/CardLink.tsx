import React from "react";
import Link from "next/link";

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
      <Link href={href} className={styles["card-link"]}>
        <a>
          <h2>{title} &rarr;</h2>
        </a>
      </Link>
      {children}
    </Card>
  );
};

export { CardLink };
