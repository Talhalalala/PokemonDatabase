import { PokemonTable } from 'components/organisms/PokemonTable';
import type { NextPage } from 'next'


const AllPokemon: NextPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>All Pokemon page</h1>
            <PokemonTable />
        </div>
    )
}; 

export default AllPokemon