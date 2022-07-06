import React, { FC, useEffect, useState } from 'react';
import { gql } from 'graphql-tag';
import { QueryClient } from 'react-query';
import { usePokemonQuery } from '../graphql/generated';
import { PokemonImage } from './atoms/PokemonImage';

const queryClient = new QueryClient();

const newQuery = gql`
  query Pokemon {
    findManyPokemon {
      id
      name
      japanese_name
      percentage_male
      pokedex_number {
        id
      }
      attack
      defense
      hp
      sp_attack
      sp_defense
      speed
      types {
        type {
          type
        }
      }
      weight_kg
      generation {
        generation
      }
      classification {
        classification
      }
      is_legendary
      abilities {
        ability {
          ability
        }
      }
      against_bug
      against_dark
      against_dragon
      against_electric
      against_fairy
      against_fight
      against_fire
      against_flying
      against_ghost
      against_grass
      against_ground
      against_ice
      against_normal
      against_poison
      against_psychic
      against_rock
      against_steel
      against_water
      base_egg_steps
      base_happiness
      base_total
      capture_rate
      experience_growth
      height_m
    }
  }
`;

export const Pokemon: FC = () => {
  const { data } = usePokemonQuery();
  const [pokemonState, setPokemonState] = useState<any>([]);
  useEffect(() => {
    if (data?.findManyPokemon.length) {
      setPokemonState(data?.findManyPokemon);
    }
  }, [data]);

  const pokemon = data?.findManyPokemon ? [...data?.findManyPokemon] : [];
  // Questions on JavaScript

  // 1. What is an inline function?
  const inlineFunction = function () {
    return 'An anonymous function assigned to a variable';
  };

  // 2. What is array/object destructuring?
  const whatIsDestructuring =
    'way of unpacking values from arrays or properties from objects and assigning them values';

  const array1 = [1, 2, 3, 4, 5];
  const [a, , c, ...rest] = array1;
  const object1 = {
    key1: 'words',
    key2: 72873,
  };

  const { key1: newNew, key2 = 'default value' } = object1;

  // 3. How do we write template strings?
  const random = 8;
  const howToWriteTemplateString = `like this, and you can pass variables into it like this ${random}`;

  // 4. What is a ternary operator?
  const outcome = true;
  const ternaryOperator = outcome
    ? 'if outcome is true this will be the value of the variable'
    : 'if outcome is false, this will be the value of the variable';

  // 5. What is the difference between let and const?
  let notConstant = 'starts like this';
  notConstant = 'but can be changed like this';

  const constant = 'This stays like this';
  // const = 'this will error';

  // 6. How do we write default parameters for a function?
  function defaultParameters(parameter1 = 'has a default parameter') {
    // console.log(parameter1);
  }
  defaultParameters(); //this will log has a default parameter as no argument was passed through

  const argument1 = 'this will override the default parameter';
  defaultParameters(argument1); //this will log the value of the argument1 variable

  // Note that [...pokemon] just creates a copy of the pokemon array
  // You should only use this array for the following questions (i.e. don't query anything else in GraphQL)
  // 1. Order the Pokemon by height in descending order
  const tallestPokemon = [...pokemon].sort((a, b) => b.height_m - a.height_m);
  // console.log('TALL------->>>>', tallestPokemon);

  // 2. Order the Pokemon by weight in ascending order
  const skinniestPokemon = [...pokemon].sort((a, b) => a.weight_kg - b.weight_kg);
  const fattestPokemon = [...pokemon].sort((a, b) => b.weight_kg - a.weight_kg);

  // console.log('SKINNY --------->>>>>',skinniestPokemon)
  // console.log('FAT --------->>>>>',fattestPokemon)

  // 3. Create a list of legendary Pokemon
  const legendaryPokemon = [...pokemon].filter((pokemon) => pokemon.is_legendary === true);

  // console.log('LEGENDS ------->>>>>', legendaryPokemon)

  // 4. Create a list of female Pokemon
  const femalePokemon = [...pokemon].filter((pokemon) => pokemon.percentage_male === 0);
  // console.log('FEMALE POKEMON ------->>>>', femalePokemon);

  // 5. Create a list of the 10 happiest Pokemon
  const happiestPokemon = [...pokemon]
    .sort((a, b) => b.base_happiness - a.base_happiness)
    .slice(0, 10);
  // console.log('10 HAPPIEST POKEMON', happiestPokemon);

  // 6. Find the total height and weight of all Pokemon
  const totalHeightAndWeight = [...pokemon].reduce(
    ({ total_height, total_weight }, pokemon) => {
      const totalHeight = (total_height += pokemon.height_m);
      const totalWeight = (total_weight += pokemon.weight_kg);
      return { total_weight: totalHeight, total_height: totalWeight };
    },
    { total_height: 0, total_weight: 0 }
  );

  // console.log('TOTAL ------->>>>>>', totalHeightAndWeight);

  // 7. Create a function that accepts a generationId as an input and returns all the Pokemon for that generation
  const findGeneration = (genId: number) =>
    pokemon.filter((pokemon) => pokemon.generation['generation'] === genId);
  // console.log('FIND GENERATION--->>>>', findGeneration(3))

  // 8. Find the Pokemon in the list which has the highest overall stats summed (attack, defense, hp, sp_attack, sp_defense and speed)
  // const strongestPokemon = pokemon?.[0];
  const strongestPokemon = pokemon
    .map((pokemon) => ({
      name: pokemon.name,
      strength:
        pokemon.attack +
        pokemon.defense +
        pokemon.hp +
        pokemon.sp_attack +
        pokemon.sp_defense +
        pokemon.sp_defense +
        pokemon.speed,
    }))
    .sort((a, b) => b.strength - a.strength)[0];

  // console.log('STRONGEST ----->>>>>>>',strongestPokemon)

  // 9. Order the Pokemon by their overall stats summed (attack, defense, hp, sp_attack, sp_defense and speed)
  const toughestPokemon = [...pokemon]
    .map((pokemon) => ({
      name: pokemon.name,
      strength:
        pokemon.attack +
        pokemon.defense +
        pokemon.hp +
        pokemon.sp_attack +
        pokemon.sp_defense +
        pokemon.sp_defense +
        pokemon.speed,
    }))
    .sort((a, b) => b.strength - a.strength);

  // console.log('TOUGHEST ------>>>>>>', toughestPokemon)

  // 10. Create lists of the unique abilities, classifications, generations and types from the list of Pokemon
  const abilities = pokemon
    .flatMap((pokemon) => pokemon.abilities)
    .map((pokemon) => pokemon.ability.ability);
  const uniqueAbilities = Array.from(new Set(abilities));
  const classifications = pokemon
    .flatMap((pokemon) => pokemon.classification)
    .map((pokemon) => pokemon.classification);
  const uniqueClass = Array.from(new Set(classifications));
  const generations = pokemon
    .flatMap((pokemon) => pokemon.generation)
    .map((pokemon) => pokemon.generation);
  const uniqueGenerations = Array.from(new Set(generations));
  const types = pokemon.flatMap((pokemon) => pokemon.types).map((pokemon) => pokemon.type.type);
  const uniqueTypes = Array.from(new Set(types));

  // 11. Create a function which accepts a type as an input and returns the Pokemon which are the strongest against that type
  const strongestAgainstType = (type: string) =>
    pokemon.sort((a: any, b: any) => a[`against_${type}`] - b[`against_${type}`]).slice(0, 10);

  // React questions
  // 1. Create a stateful variable called 'loading' and set this to true initially. Set this to false when the pokemon array is not empty (should take about 5 seconds)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (pokemonState.length > 1) {
      setTimeout(() => {
        return setLoading(false);
      }, 5000);
    }
  }, [pokemonState]);

  // 2. If loading is true, the component should say somewhere 'Fetching Pokemon...'
  // check return statement

  // 3. Create a stateful variable called 'randomPokemon' and assign a random pokemon to it. Display this random pokemon in the component
  const [randomPokemon, setRandomPokemon] = useState<any>({});

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonState.length);
    const random = pokemonState[randomIndex];
    const randomObject = {
      name: random.name,
      weight_kg: random.weight_kg,
      id: random.id,
    };
    // console.log(pokemonState);
    setRandomPokemon(randomObject);
  };

  useEffect(() => {
    if (pokemonState.length > 1) return getRandomPokemon();
  }, [pokemonState]);

  // 4. Create a button that selects a new random pokemon when it is clicked
  const selectNewPokemon = () => getRandomPokemon();
  // const selectNewPokemon = () => console.log(randomPokemon);

  // 5. Create a new component called PokemonImage which accepts the randomly selected pokemon as a prop and displays its image (fetch from https://pokeapi.co/api/v2/pokemon/id)

  // 6. Create a custom hook that accepts a url as input and fetches the data from that url. Use this in your PokemonImage component

  const checkFunction = () => {
    console.log(strongestAgainstType('grass'));
  };

  return (
    <div>
      <h1>Pokemon</h1>
      {loading && <h3>Fetching Pokemon</h3>}
      <h4>Random Pokemon of the render: {randomPokemon.name}</h4>
      <PokemonImage pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${randomPokemon.id}`} />
      <button onClick={selectNewPokemon}>Get a new random</button>
      <div>
        <button onClick={checkFunction}>console.log</button>
      </div>
      <h2>The first 10 Pokemon</h2>
      {data?.findManyPokemon.slice(0, 10).map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
};
