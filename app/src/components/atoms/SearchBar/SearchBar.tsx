import React, { FC } from 'react';

type Props = {}

export const SearchBar: FC<Props> = (props) => {

    const handleSearch = 'lol';

    return(
        <>
             <form action="/" method="get">
                
                <input
                    type="text"
                    id="header-search"
                    placeholder="Enter Pokemon Name Here"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
};