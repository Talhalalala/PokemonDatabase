import React, { FC } from 'react';
import {gql} from 'graphql-tag';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useBananaQuery } from '../../../graphql/generated';


const queryClient = new QueryClient();

gql`query banana {
    findManyPokemon {
        id
        name
        abilities {
            ability {
                ability
            }
        }
    }
}`

type Props = {}

export const Test: FC<Props> = (props) => {
    const { data } = useBananaQuery();

    return <div>{data?.findManyPokemon?.[10].abilities[1].ability.ability}</div>;
}
    