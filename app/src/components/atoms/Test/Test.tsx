import React, { FC } from 'react';
import {gql} from 'graphql-tag';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useExampleQueryQuery } from '../../../graphql/generated';


const queryClient = new QueryClient();

gql`query ExampleQuery {
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
    const { data } = useExampleQueryQuery();

    return <div>{data?.findManyPokemon?.[0].name}</div>;
}
    