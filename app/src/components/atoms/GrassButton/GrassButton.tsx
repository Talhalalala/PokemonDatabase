import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {gql} from 'graphql-tag';
// import { usePokemonQuery } from '../../../graphql/generated';


const queryClient = new QueryClient();

type Props = {}

// gql`query grass {
//     findManyPokemon{
//         name
//         types{
//             type{
//                 type
//             }
//         }
//     }
// }`


export const GrassButton: FC<Props> = (props) => {
    // const { data } = usePokemonQuery();
    // set state of showPokemon to false
    // onButtonClick set it to true
    // useConditionalRendering to show grass pokemon if showPokemon is true
    
    // const grassPokemon = data?.findManyPokemon.filter(pokemon => pokemon.types.map(p => p.type.type).includes("electric"));
    // console.log(grassPokemon)
    // const allPokemon = data?.findManyPokemon;
    // console.log(allPokemon)
    // const pokemonTypes = allPokemon?.map(pokemon => pokemon.types.map(p => p.type.type));
    // console.log(pokemonTypes);
    // const grassPokemon = allPokemon?.filter(pokemon => pokemon.types.map(p => p.type.type))
    // console.log(grassPokemon);


    // const getGrassTypes = () => {
    // };

    return(
        <div>
            <button>Test Types</button>
            {/* <h3>Name: {data?.findManyPokemon?.[5].name}</h3>
            <h3>Type: {data?.findManyPokemon?.[5].types[0].type.type}</h3> */}
            {/* {showPokemon && (<></>)} */}
            {/* {grassPokemon?.map(pokemon => <p>{pokemon.name}</p>)} */}

        </div>
    )
}
;