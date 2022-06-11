import Image from "next/image";
import React from "react";
import styles from "./FeatureCard.module.css";
import { Card } from "../../../components";
import { PokemonData } from "../../../models";

const FeatureCard = ({
  classification,
  fleeRate,
  height,
  image,
  maxCP,
  maxHP,
  name,
  number,
  resistant,
  types,
  weaknesses,
  weight,
}: PokemonData) => {
  const typeBadges = types.map((type) => {
    return (
      <div key={type} className={styles.type_badge}>
        {type}
      </div>
    );
  });

  const weaknessBadges = weaknesses.map((type) => {
    return (
      <div key={type} className={styles.type_badge}>
        {type}
      </div>
    );
  });

  const resistanceBadges = resistant.map((type) => {
    return (
      <div key={type} className={styles.type_badge}>
        {type}
      </div>
    );
  });

  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h1>
            {name} #{number}
          </h1>
          <h2>{classification}</h2>
          {types.length > 1 ? <strong>Types</strong> : <strong>Type</strong>}
          <span className={styles.type_list}>{typeBadges}</span>
        </div>
        <div className={styles.image}>
          <Image src={image} layout="fill" objectFit="contain" alt={name} />
        </div>
        <div className={styles.content}>
          <h3>Resistances</h3>
          <span className={styles.type_list}>{resistanceBadges}</span>
          <h3>Weaknesses</h3>
          <span className={styles.type_list}>{weaknessBadges}</span>
          <div className={styles.stat_block}>
            <div>
              <h3>Max HP</h3>
              <p>{maxHP}</p>
            </div>
            <div>
              <h3>Max CP</h3>
              <p>{maxCP}</p>
            </div>
            <div>
              <h3>Height</h3>
              <p>
                {height.minimum} - {height.maximum}
              </p>
            </div>
            <div>
              <h3>Weight</h3>
              <p>
                {weight.minimum} - {weight.maximum}
              </p>
            </div>
            <div>
              <h3>Flee rate</h3>
              <p>{fleeRate}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { FeatureCard };
