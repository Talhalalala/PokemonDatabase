import React, { FC, useState, useMemo, useEffect } from 'react';
import { usePokemonQuery } from 'graphql/generated';
import { AbilityT } from 'components/molecules/AbilityT';
import { PokemonImage } from 'components/atoms/PokemonImage';

type Props = {};

export const OrganismTable: FC<Props> = (props) => {
  const { data } = usePokemonQuery();
  const [info, setInfo] = useState<
    {
      name: string;
      japName: string;
      hp: number;
      defense: number;
      attack: number;
      weight: number;
      speed: number;
      types: string;
    }[]
  >([]);
  const [search, setSearch] = useState('');

  const getPokemonInfo = async () => {
    try {
      const information = data?.findManyPokemon;
      const newInfo =
        information?.flatMap((info) => ({
          name: info.name,
          japName: info.japanese_name,
          hp: info.hp,
          defense: info.defense,
          attack: info.attack,
          weight: info.weight_kg,
          speed: info.speed,
          types: info.types
            .filter((p) => p.type.type)
            .map((p) => p.type.type)
            .join(', '),
          abilities: info.abilities.map((p) => p.ability.ability).join(', '),
        })) ?? [];
      setInfo(newInfo);
    } catch {
      throw new Error("Couldn't get the info");
    }
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  const searchClick = (e: any) => {
    e.preventDefault();
    const clicked = e.target.textContent;
    console.log(clicked);
    setSearch(clicked);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Pokemon',
        columns: [
          {
            Header: 'Pokemon Name',
            accessor: 'name',
          },
          {
            Header: 'Japanese Name',
            accessor: 'japName',
          },
          {
            Header: 'HP',
            accessor: 'hp',
          },
          {
            Header: 'Defense',
            accessor: 'defense',
          },
          {
            Header: 'Attack',
            accessor: 'attack',
          },
          {
            Header: 'Weight (kg)',
            accessor: 'weight',
          },
          {
            Header: 'Speed',
            accessor: 'speed',
          },
          {
            Header: 'Types',
            accessor: 'types',
          },
          {
            Header: 'Abilities',
            accessor: 'abilities',
          },
        ],
      },
    ],
    [info]
  );

  return (
    <div>
      <div
        style={{
          maxHeight: '400px',
          overflowY: 'scroll',
          border: 'solid',
          textAlign: 'center',
          marginBottom: '25px',
        }}
      >
        {/* {info && <AbilityT columns={columns} data={info} />}  */}
        <AbilityT columns={columns} data={info} search={searchClick} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <PokemonImage pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${search}`} />
      </div>
    </div>
  );
};
