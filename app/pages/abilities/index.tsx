import { AbilityTable } from 'components/organisms/AbilityTable';
import { PokemonTable } from 'components/organisms/PokemonTable';
import type { NextPage } from 'next'


const Abilities: NextPage = () => {
    return (
        <div>
            <p>This is the abilities page</p>
            <AbilityTable />
        </div>
    )
}; 

export default Abilities
