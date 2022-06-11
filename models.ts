export type DocumentHead = {
  title: string;
  description: string;
};

export interface PokemonData {
  classification: string;
  fleeRate: string;
  height: { minimum: string; maximum: string };
  id: string;
  image: string;
  maxCP: number;
  maxHP: number;
  name: string;
  number: string;
  resistant: string[];
  types: string[];
  weaknesses: string[];
  weight: { minimum: string; maximum: string };
}
export interface Pokemon {
  pokemon: PokemonData;
}
