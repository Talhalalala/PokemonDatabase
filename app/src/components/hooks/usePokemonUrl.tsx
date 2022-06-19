import { useEffect, useState } from 'react';
import axios from 'axios';

export function usePokemonUrl(pokemonUrl: string) {
  const [pokemonImg, setPokemonImg] = useState('');

  useEffect(() => {
    getPokemonData(pokemonUrl);
  }, [pokemonUrl]);

  const getPokemonData = async (pokemon: string) => {
    try {
      const url = pokemon;
      const res = await axios.get(url);
      setPokemonImg(res.data.sprites.other['official-artwork'].front_default);
    } catch (e) {
      console.log(e);
    }
  };

  return pokemonImg;
}
