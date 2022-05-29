import { getRandomBetween } from "./getRandomBetween";

export const getRandomPokemonId = () => {
  const randomPokemonNumber = getRandomBetween(1, 151);
  const paddedNumberString = ("000" + randomPokemonNumber).slice(-3);
  return Buffer.from(`Pokemon:${paddedNumberString}`).toString("base64");
};
