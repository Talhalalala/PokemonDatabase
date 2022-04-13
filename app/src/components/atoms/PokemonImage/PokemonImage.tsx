import React, { FC, useEffect, useState } from 'react';
import { usePokemonQuery } from '../../../graphql/generated';


type Props = {
    search: string
}

export const PokemonImage: FC<Props> = ({search}: Props) => {
    const { data } = usePokemonQuery();

    const pokeball = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'


    const [id, setId] = useState<any | null>(pokeball);

    useEffect(() => {
        const pokemonData = data?.findManyPokemon.filter(pokemon => pokemon.name.includes(search));
        // console.log(pokemonData);
        if(pokemonData?.[0] == undefined){
            setId(pokeball)
        }else{
            const pokemonId = pokemonData?.[0].id
            setId(pokemonId)
        }
    }, [search])


    const pokemonIm = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    
    return(
        <div style={{border: 'groove', padding: '10px', maxWidth: '300px', margin: '0 auto', borderRadius: '15px', backgroundColor: 'yellow', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{border: 'groove', backgroundColor: 'lightgreen'}}>
                {(id >= 0)?
                <>
                    <img style={{maxWidth: '250px', textAlign: 'center'}} src={pokemonIm} />
                </>:
                <>
                    <img style={{maxWidth: '250px', textAlign: 'center'}}src={pokeball} />
                </>
                }
            </div>
        </div>
    )
};