import React from "react";
import {useState} from "react"


function Search({searcher}) {

  const [filter, setFilter] = useState("")

  function handleChange (e) {

    setFilter([ e.target.value])

    searcher(filter)

    
  }

  return (
    <div onChange={handleChange} className="ui large fluid icon input" >
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;