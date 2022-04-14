import { Ptable } from 'components/molecule s/Ptable';
import { PokemonDisplay } from 'components/organisms/PokemonDisplay';
import type { NextPage } from 'next'

const AllPokemon: NextPage = () => {
    return (
        <div>
            <h3>This is the all pokemon page</h3>
            <PokemonDisplay />
        </div>
    )
}; 

export default AllPokemon