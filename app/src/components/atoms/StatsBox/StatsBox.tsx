import React, { FC, useEffect, useState } from 'react';
import { usePokemonQuery } from '../../../graphql/generated';


type Props = {
    search: string
}

export const StatsBox: FC<Props> = ({search}: Props) => {
    const { data } = usePokemonQuery();

    const [ hp, setHp ] = useState<any>();
    const [ attack, setAttack ] = useState<any>();
    const [ defense, setDefense ] = useState<any>();
    const [ speed, setSpeed ] = useState<any>();
    const [ weight, setWeight ] = useState<any>();
    const [ type, setType ] = useState<any>([]);
    const [ abilities, setAbilities ] = useState<any>([]);

    useEffect(() => {
        const pokemonData = data?.findManyPokemon.filter(pokemon => pokemon.name.includes(search));
        console.log(pokemonData);
        console.log(pokemonData?.[0]);
        console.log('LINE 24',search)
        console.log(typeof(search))
        if(search === ""){
            setHp("");
            setAttack("");
            setDefense("");
            setSpeed("");
            setWeight("");
            setType([]);
            setAbilities([]);
        } else if(pokemonData?.[0] == undefined){
            setHp("");
            setAttack("");
            setDefense("");
            setSpeed("");
            setWeight("");
            setType([]);
            setAbilities([]);
        }else{
            setHp(pokemonData?.[0].hp);
            setAttack(pokemonData?.[0].attack);
            setDefense(pokemonData?.[0].defense);
            setSpeed(pokemonData?.[0].speed);
            setWeight(pokemonData?.[0].weight_kg);
            const typesArray = pokemonData?.[0].types.map(p => p.type.type);
            setType(typesArray);
            console.log(pokemonData?.[0].abilities);
            const abilityArray = pokemonData?.[0].abilities.map(p => p.ability.ability);
            setAbilities(abilityArray)
        }
    }, [search]);

    



    return(
        <div>
            <p>HP: {hp} | <span> Attack: {attack}</span> | <span> Weight: {weight} kg</span></p>
            <p>Defense: {defense} | <span>Speed: {speed}</span></p>
            <p>Type: {type.join(', ')}</p>
            <p>Abilities: {abilities.join(', ')}</p>
        </div>
    )
};