import React from 'react'

const SearchBar = ({handleChange, searchValue}) => {
    return (
      <input type="text" value={searchValue} onChange={handleChange} />
    )
}

export default SearchBar