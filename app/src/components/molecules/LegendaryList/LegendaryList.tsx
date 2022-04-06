import React, { FC, useState } from 'react';
import { usePokemonQuery } from '../../../graphql/generated';


type Props = {}
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


export const LegendaryList: FC<Props> = (props) => {
    const { data } = usePokemonQuery();

    // const pokemonReturn = data?.findManyPokemon.filter(pokemon => pokemon.types.map(p => p.type.type).includes());
    const pokemonReturn = data?.findManyPokemon.filter(pokemon => pokemon.is_legendary === true);
    console.log(pokemonReturn)

    return(
        <div>
            <h1>Legendary pokemon</h1>
            <>
                    <div style={{maxHeight: '900px', overflowY: 'scroll'}}>
                        <table>
                            <tr>
                                <th>Pokemon Name</th>
                                <th>Japanese Name</th>
                                <th>types</th>
                                <th>Abilities</th>
                                
                            </tr>
                        </table>
                        {pokemonReturn?.map(pokemon => {
                            <table>
                                
                            </table>
                        })}
                    </div>
                </>:

        </div>
    )
};