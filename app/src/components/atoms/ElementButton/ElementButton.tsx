import React, { FC, useState } from 'react';
import {gql} from 'graphql-tag';
import { QueryClient, QueryClientProvider } from 'react-query';
import { usePokemonQuery } from '../../../graphql/generated';


const queryClient = new QueryClient();

type Props = {
    name: string,
    element_type: string
}

gql`query Pokemon {
    findManyPokemon{
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
    }
}`




export const ElementButton: FC<Props> = ({ name, element_type }: Props) => {

    const [isTrue, setIsTrue] = useState(false);

    const { data } = usePokemonQuery();
    const pokemonReturn = data?.findManyPokemon.filter(pokemon => pokemon.types.map(p => p.type.type).includes(element_type));
    // console.log(pokemonReturn)
    // const allPokemon = data?.findManyPokemon;
    // const pokemonTypes = allPokemon?.filter(pokemon => pokemon.types.map(p => p.type.type.includes('water')));
    // console.log(pokemonTypes);
    // const pokemonElements = pokemonTypes.filter(p => p.includes('water'));

    const handleClick = () => {
        console.log(isTrue)
        console.log('LINE 53')
        if(isTrue){
            setIsTrue(false)
        }else{
            setIsTrue(true)
        }
        console.log('you clicked')
        console.log(isTrue);
    }

    return(
        <div>
            <button onClick={handleClick}>{name} Types</button>
            {(isTrue)? 
                <>
                    {pokemonReturn?.map(pokemon => <p>{pokemon.name}</p>)}
                </>:
                <>
                </>
            }
            

        </div>
    )
}
;