import React, { FC } from 'react';
import { usePokemonUrl } from '../../hooks/usePokemonUrl';

type Props = {
  pokemonUrl: string;
};

export const PokemonImage: FC<Props> = (props) => {
  const pokemonImg = usePokemonUrl(props.pokemonUrl);

  return (
    <div>
      <img src={pokemonImg} />
    </div>
  );
};
