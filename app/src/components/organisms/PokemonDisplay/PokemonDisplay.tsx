import { Ptable } from 'components/molecule s/Ptable';
import React, { FC } from 'react';
import styles from '../../../../styles/organisms/PokemonDisplay.module.css'


type Props = {}

export const PokemonDisplay: FC<Props> = (props) => {
    return(
        <div>
            <div className={styles.Ptable}>
                <Ptable />
            </div>
        </div>
    )
};