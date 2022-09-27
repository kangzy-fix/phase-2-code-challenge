import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import {useState, useEffect} from "react"


function AccountContainer() {
  let API = "http://localhost:8000/transactions"
  const [listFilter, setListFilter] = useState ("")
  const [list, setList] = useState([])
  
  useEffect (()=>{
    fetch(API)
    .then(res=>res.json())
    .then(setList)
    
  },[])

  //let filteredList = list.filter(list =>listFilter==="" ? true : list.description.startsWith(listFilter))

function handleSearch (filter) {
  setList(list => list.filter(item=>item.description.startsWith(filter)))
}




  
  return (
    <div>
      <Search searcher={handleSearch}/>
      <AddTransactionForm cash = {list} />
      <TransactionsList lists={ list}/>
    </div>
  );
}

export default AccountContainer;