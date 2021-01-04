import React, {useState} from 'react'

function Search(){
  const [searchVal, setSearchVal] = useState('')

  const renderSearchResult = () => {
    return <p>Search Results Go Here</p>
  }

  return(
    <>
      <input 
        placeholder="Search" 
        value={searchVal} 
        onChange={(e)=>setSearchVal(e.target.value)} 
      />
      <div id="search-results">
        {searchVal ? renderSearchResult() : null}
      </div>
    </>
  )
}

export default Search;