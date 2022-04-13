import { Ptable } from 'components/molecule s/Ptable';
import type { NextPage } from 'next'

const AllPokemon: NextPage = () => {
    return (
        <div>
            <h3>This is the all pokemon page</h3>
            <Ptable />
        </div>
    )
}; 

export default AllPokemon