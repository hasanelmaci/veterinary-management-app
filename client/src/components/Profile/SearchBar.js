import React from 'react'

function SearchBar({search}) {

    

    return (
        <div className='search-container'>
            <input className='searchbar' placeholder='Ara' onChange={(e)=> search(e)}/>
        </div>
    )
}

export default SearchBar
