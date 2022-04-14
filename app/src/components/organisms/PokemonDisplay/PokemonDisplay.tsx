import { Ptable } from 'components/molecules/Ptable';
import React, { FC } from 'react';
import styles from '../../../../styles/organisms/PokemonDisplay.module.css';

type Props = {};

export const PokemonDisplay: FC<Props> = (props) => (
  <div>
    <div className={styles.Ptable}>
      <Ptable />
    </div>
  </div>
);
