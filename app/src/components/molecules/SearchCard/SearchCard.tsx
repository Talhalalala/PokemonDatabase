import { PokemonImage } from 'components/atoms/PokemonImage';
import { StatsBox } from 'components/atoms/StatsBox';
import React, { FC, useState, useEffect } from 'react';
import { usePokemonQuery } from '../../../graphql/generated';
import { ElementButton } from 'components/atoms/ElementButton';


type Props = {
}

export const SearchCard: FC<Props> = (props) => {
    const { data } = usePokemonQuery();

    const [inputText, setInputText] = useState("");
    const [japaneseName, setJapaneseName] = useState("");
    const [pokemonName, setPokemonName] = useState("");


    const handleSearch = (e: any) => {
        e.preventDefault()
        const search = e.currentTarget.elements.searchBar.value;
        const searchCap = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()
        setInputText(searchCap)
    };


    useEffect(() => {
        const pokemonData = data?.findManyPokemon.filter(pokemon => pokemon.name.includes(inputText));
        // console.log(pokemonData)
        if(inputText == ""){
            setPokemonName("");
        } else if(pokemonData?.[0] == undefined){
            setPokemonName("No Pokemon match your search :(");
            setJapaneseName("")
        } else{
            setPokemonName(pokemonData?.[0].name);
            setJapaneseName(pokemonData?.[0].japanese_name);
        }
    }, [inputText])

    const searchClick = (e: any) => {
        e.preventDefault();
        const clicked = e.target.textContent;
        setInputText(clicked)
    }

    return(
        <div>
            
            <form style={{textAlign: 'center'}} onSubmit={handleSearch}>
                
                <input
                    type="text"
                    id="searchBar"
                    placeholder="Enter Pokemon Name Here"
                    name="s" 
                />
                <button type="submit" id="search-submit" >Search</button>
            </form>
            <div style={{textAlign: 'center'}}>
                <h2>{pokemonName}</h2>
                <h3>{japaneseName}</h3>
                <PokemonImage search={inputText} />
            </div>
            
            <div style={{textAlign: 'center'}}>
                <StatsBox search={inputText}/>
            </div>
        <div style={{textAlign: 'center', display: 'flex'}}>
            
                <ElementButton name='Water' element_type="water" searchClick={searchClick}/>
            
            
                <ElementButton name='Fire' element_type="fire" searchClick={searchClick}/>
            
            
                <ElementButton name='Grass' element_type="grass" searchClick={searchClick}/>
            
            
                <ElementButton name='Electric' element_type="electric" searchClick={searchClick}/>
            
            
                <ElementButton name='Normal' element_type="normal" searchClick={searchClick}/>
                      
            
                <ElementButton name='Poison' element_type="poison" searchClick={searchClick}/>
            
        
            
                <ElementButton name='Flying' element_type="flying" searchClick={searchClick}/>
            
            
                <ElementButton name='Bug' element_type="bug" searchClick={searchClick}/>
            
            
                <ElementButton name='Dark' element_type="dark" searchClick={searchClick}/>
            
            
                <ElementButton name='Ground' element_type="ground" searchClick={searchClick}/>
            
            
                <ElementButton name='Ice' element_type="ice" searchClick={searchClick}/>
                      
            
                <ElementButton name='Fairy' element_type="fairy" searchClick={searchClick}/>
            
            
                <ElementButton name='Fighting' element_type="fighting" searchClick={searchClick}/>
            
            
                <ElementButton name='Psychic' element_type="psychic" searchClick={searchClick}/>
            
            
                <ElementButton name='Rock' element_type="rock" searchClick={searchClick}/>
            
            
                <ElementButton name='Steel' element_type="steel" searchClick={searchClick}/>
            
            
                <ElementButton name='Ghost' element_type="ghost" searchClick={searchClick}/>
                      
            
                <ElementButton name='Dragon' element_type="dragon" searchClick={searchClick}/>

            </div>
            
        </div>

    )
};
