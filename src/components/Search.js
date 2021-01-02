import React, { useState } from 'react'

const Search = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={isActive ? 'search active' : 'search'}>
      <input type='text' className='input' placeholder='Search...' />
      <button className='btn' onClick={() => setIsActive(!isActive)}>
        <i className='fas fa-search'></i>
      </button>
    </div>
  )
}

export default Search
