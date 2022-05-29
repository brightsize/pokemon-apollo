import Image from "next/image";
import React from "react";
import { CardLink } from "../../molecules";

type PokemonCardProps = {
  name: string;
  id: string;
  image: string;
};

const PokemonCard = ({ name, id, image }: PokemonCardProps) => {
  return (
    <CardLink title={name} href={`/pokemon/${id}`}>
      <Image
        src={image}
        height="150px"
        width="150px"
        objectFit="contain"
        alt={name}
      />
    </CardLink>
  );
};

export { PokemonCard };
