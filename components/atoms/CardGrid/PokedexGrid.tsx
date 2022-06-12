import React from "react";

import styles from "./CardGrid.module.css";

type PokedexGridProps = {
  children: React.ReactNode;
};

const PokedexGrid = ({ children }: PokedexGridProps) => {
  return <div className={styles.pokedexGrid}>{children}</div>;
};

export { PokedexGrid };
