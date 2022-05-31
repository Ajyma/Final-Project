import React from 'react'

const Search = ({isSearch, toggleSearch}) => {
  return (
    <div className={isSearch ? 'mob-search active' : 'mob-search'}>
      <input type="text" className='searchInput' />
      <p onClick={toggleSearch} className='otmena'>Отмена</p>
    </div>
  )
}

export default Search