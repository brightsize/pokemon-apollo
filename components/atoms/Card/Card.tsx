import React from "react";

import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = ({ children, style }: CardProps) => {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
};

export { Card };
