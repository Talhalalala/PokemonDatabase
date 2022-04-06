import React, { FC, useState } from 'react';
import {gql} from 'graphql-tag';
import { QueryClient, QueryClientProvider } from 'react-query';
import { usePokemonQuery } from '../../../graphql/generated';


const queryClient = new QueryClient();

type Props = {
    name: string,
    element_type: string,
    searchClick: any
}

gql`query Pokemon {
    findManyPokemon{
        id
        name
        japanese_name
        hp
        defense
        attack
        weight_kg
        speed
        types{
            type{
                type
            }
        }
        abilities {
            ability {
              ability
            }
        }
        is_legendary
    }
}`




export const ElementButton: FC<Props> = ({ name, element_type, searchClick }: Props) => {

    const [isTrue, setIsTrue] = useState(false);

    const { data } = usePokemonQuery();
    const pokemonReturn = data?.findManyPokemon.filter(pokemon => pokemon.types.map(p => p.type.type).includes(element_type));
    // console.log(pokemonReturn)
    // const allPokemon = data?.findManyPokemon;
    // const pokemonTypes = allPokemon?.filter(pokemon => pokemon.types.map(p => p.type.type.includes('water')));
    // console.log(pokemonTypes);
    // const pokemonElements = pokemonTypes.filter(p => p.includes('water'));

    const handleClick = () => {
        if(isTrue){
            setIsTrue(false)
        }else{
            setIsTrue(true)
        }
    }

    // const searchClick = (e: any) => {
    //     e.preventDefault();
    //     console.log('you clicked a pokemon')
    //     console.log(e.currentTarget)
    // }

    return(
        <div >
            <button onClick={handleClick}>{name} Types</button>
            {(isTrue)? 
                <>
                    <div style={{maxHeight: '200px', overflowY: 'scroll'}}>
                        {pokemonReturn?.map(pokemon => <p onClick={searchClick} >{pokemon.name}</p>)}
                    </div>
                </>:
                <>
                </>
            }
            

        </div>
    )
}
;