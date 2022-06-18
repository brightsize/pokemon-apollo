import React from "react";

import styles from "./CardGrid.module.css";

type CardGridProps = {
  children: React.ReactNode;
  className?: String;
};

const CardGrid = ({ children, className }: CardGridProps) => {
  const customClass = className;
  return (
    <div className={className ? styles[`${customClass}`] : styles.grid}>
      {children}
    </div>
  );
};

export { CardGrid };
