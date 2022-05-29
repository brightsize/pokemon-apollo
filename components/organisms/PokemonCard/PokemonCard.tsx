import Image from "next/image";
import React from "react";
import styles from "./PokemonCard.module.css";
import { CardLink } from "../../molecules";
import { POKEMON } from "../../../config";

type PokemonCardProps = {
  name: string;
  number: string;
  id: string;
  image: string;
  style?: React.CSSProperties;
};

const PokemonCard = ({ name, number, id, image, style }: PokemonCardProps) => {
  return (
    <CardLink
      title={`Featured ${POKEMON}`}
      href={`/pokemon/${id}`}
      style={style}
    >
      <h3>
        Number: {number} - {name}
      </h3>
      <div className={styles["image-container"]}>
        <Image src={image} layout="fill" objectFit="contain" alt={name} />
      </div>
    </CardLink>
  );
};

export { PokemonCard };
