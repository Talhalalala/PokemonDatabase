import { PokemonImage } from 'components/atoms/PokemonImage';
import { TableData } from 'components/atoms/TableData';
import { TableRow } from 'components/atoms/TableRow';
import React, { FC } from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  details: any;
};

export const PokemonTable: FC<Props> = ({ details }: Props) => {
  // const types = details?.types.map((p: { type: { type: any; }; }) => p.type.type).join(', ');
  const types = details?.types
    .map(
      (p: { type: { type: any } }) =>
        `${p.type.type.charAt(0).toUpperCase() + p.type.type.slice(1).toLowerCase()}`
    )
    .join(', ');
  const abilities = details?.abilities
    .map((p: { ability: { ability: any } }) => p.ability.ability)
    .join(', ');
  const id = details.id;
  const pokemonIm = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div style={{ textAlign: 'center', display: 'inline-block', border: 'solid', margin: '10px' }}>
      <TableRow>
        <TableData heading="Name">{details.name}</TableData>
        <TableData heading="Japanese Name">{details.japanese_name}</TableData>
        <img src={pokemonIm} />
        <TableData heading="Abilities">{abilities}</TableData>
        <TableData heading="Types">{types}</TableData>
      </TableRow>
    </div>
  );
};
