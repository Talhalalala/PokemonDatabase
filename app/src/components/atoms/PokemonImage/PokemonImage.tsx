import React, { FC } from 'react';

type Props = {}

export const PokemonImage: FC<Props> = (props) => {
    const pokemonIm = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png`
    
    return(
        <div>
            <img src={pokemonIm} />
        </div>
    )
};