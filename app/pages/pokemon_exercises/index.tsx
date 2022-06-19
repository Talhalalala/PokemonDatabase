import { PokemonDisplay } from 'components/organisms/PokemonDisplay';
import { Pokemon } from 'components/Pokemon';
import type { NextPage } from 'next';

const PokemonExercises: NextPage = () => (
  <div>
    <h3>This is the all pokemon page</h3>
    {/* <PokemonDisplay /> */}
    <Pokemon />
  </div>
);

export default PokemonExercises;
