import React, { FC, useState, useMemo, useEffect } from 'react';
import { gql } from 'graphql-tag';
import { QueryClient } from 'react-query';
import { usePokemonQuery } from 'graphql/generated';
import { AbilityT } from 'components/molecules/AbilityT';
import axios from 'axios';

const queryClient = new QueryClient();

type Props = {
  // Header: String,
  // accessor: any
};

export const AbilityTable: FC<Props> = (props) => {
  const [descriptions, setDescriptions] = useState<
    { name: string; description: string; pokemon: string }[]
  >([]);

  const { data } = usePokemonQuery();
  // const abilities = data?.findManyPokemon.abilities.map((a: any) => a.ability);
  const pokemon = data?.findManyPokemon ? [...data?.findManyPokemon] : [];
  const abilities = [...pokemon].flatMap((ability) =>
    ability.abilities.map((a) => a.ability.ability)
  );

  const getAllDescriptions = async (abilities: string[]) => {
    try {
      const response = await Promise.all(
        abilities.map(
          async (a) =>
            await axios.get(
              `https://pokeapi.co/api/v2/ability/${a.toLowerCase().replace(/ /g, '-')}/`
            )
        )
      );
      const newDescriptions = response.map((res) => ({
        name: res.data.name,
        description: res.data.effect_entries.filter((entry: any) => entry.language.name === 'en')[0]
          .effect,
        pokemon: 'lol',
      }));
      setDescriptions(newDescriptions);
    } catch {
      throw new Error("Couldn't get descriptions");
    }
  };

  useEffect(() => {
    if (abilities?.length) {
      getAllDescriptions(abilities.slice(0, 5));
    }
  }, [data]);

  const columns = useMemo(
    () => [
      {
        Header: 'Abilities',
        columns: [
          {
            Header: 'Ability',
            accessor: 'name',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Pokemon',
            accessor: 'pokemon',
          },
        ],
      },
    ],
    []
  );

  return (
    <div style={{ maxHeight: '800px', overflowY: 'scroll', border: 'solid' }}>
      <AbilityT columns={columns} data={descriptions} search={undefined} />
    </div>
  );
};
