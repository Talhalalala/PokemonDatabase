import React, { FC, useState } from 'react';

type Props = {}

export const SearchBar: FC<Props> = (props) => {

    const [inputText, setInputText] = useState("");


    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.currentTarget.elements.searchBar.value;
        const searchCap = search.charAt(0).toUpperCase() + search.slice(1)
        setInputText(searchCap)
    };

    return(
        <>
             <form onSubmit={handleSearch}>
                
                <input
                    type="text"
                    id="searchBar"
                    placeholder="Enter Pokemon Name Here"
                    name="s" 
                />
                <button type="submit" id="search-submit" >Search</button>
            </form>
            
        </>
    )
};