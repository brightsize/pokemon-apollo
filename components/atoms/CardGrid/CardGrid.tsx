import React from "react";

import styles from "./CardGrid.module.css";

type CardGridProps = {
  children: React.ReactNode;
};

const CardGrid = ({ children }: CardGridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export { CardGrid };
