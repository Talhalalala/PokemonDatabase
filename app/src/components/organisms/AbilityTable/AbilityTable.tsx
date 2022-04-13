import React, { FC, useState, useMemo, useEffect } from 'react';
import {gql} from 'graphql-tag';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAbilitiesQuery } from 'graphql/generated';
import { AbilityT } from 'components/molecules/AbilityT';
import axios from 'axios';

const queryClient = new QueryClient();


type Props = {
    // Header: String,
    // accessor: any
}
gql`query Abilities {
    abilities {
      id
      ability
    }
  }`

export const AbilityTable: FC<Props> = (props) => {

    const [descriptions, setDescriptions] = useState<{ name: string; description: string, pokemon: string}[]>([]);

    const { data } = useAbilitiesQuery();
    const abilities = data?.abilities.map(a => a.ability);

    const getAllDescriptions = async (abilities: string[]) => {
      try {
        const response = await Promise.all(abilities.map(async a => await axios.get(`https://pokeapi.co/api/v2/ability/${a.toLowerCase().replace(/ /g, "-")}/`)));
        const newDescriptions = response.map((res) => ({ name: res.data.name, description: res.data.effect_entries.filter((entry: any) => entry.language.name === 'en')[0].effect, pokemon: 'lol' }));
        setDescriptions(newDescriptions);
      } catch {
        throw new Error("Couldn't get descriptions");
      }
    }


    useEffect(() => {
      if (abilities?.length) {
        getAllDescriptions(abilities.slice(0, 5));
      }
    }, [data]);



    const columns = useMemo(
        () => [
            {
                Header: "Abilities",
                columns: [
                    {
                        Header: "Ability",
                        accessor: "name"
                    },
                    {
                        Header: "Description",
                        accessor: "description"
                    },
                    {
                        Header: "Pokemon",
                        accessor: "pokemon"
                    }

                ]
            }
        ],
        []
    )


return(
        <div style={{maxHeight: "800px", overflowY: 'scroll', border: 'solid'}}>
            <AbilityT columns={columns} data={descriptions} />
        </div>
    )
};