import { PokemonTable } from 'components/molecules/PokemonTable';
import React, { FC } from 'react';
import { usePokemonQuery } from '../../../graphql/generated';

type Props = {};

export const LegendTable: FC<Props> = (props) => {
  const { data } = usePokemonQuery();

  // const pokemonReturn = data?.findManyPokemon.filter(pokemon => pokemon.types.map(p => p.type.type).includes());
  const pokemonReturn = data?.findManyPokemon.filter((pokemon) => pokemon.is_legendary === true);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Legendary pokemon</h1>
      <div style={{ overflowY: 'scroll', maxHeight: '900px', textAlign: 'center' }}>
        {pokemonReturn?.map((pokemon) => (
          <PokemonTable details={pokemon} />
        ))}
      </div>
    </div>
  );
};
