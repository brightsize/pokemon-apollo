import Image from "next/image";
import React from "react";
import { CardLink } from "../../molecules";

type PokemonCardProps = {
  name: string;
  id: number;
  src: string;
};

const PokemonCard = ({ name, id, src }: PokemonCardProps) => {
  return (
    <CardLink title={name} href={`/pokemon/${id}`}>
      <Image
        src={src}
        height="150px"
        width="150px"
        objectFit="contain"
        alt={name}
      />
    </CardLink>
  );
};

export { PokemonCard };
