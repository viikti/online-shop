export const pokemonsStats = (pokemonStat) => {
  return pokemonStat?.map(({ title, value }) => [title, value]);
};
