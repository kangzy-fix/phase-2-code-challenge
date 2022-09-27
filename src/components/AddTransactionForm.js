import React from "react";
import {useState} from "react"

function AddTransactionForm({cash}) {
    const [data, setData] = useState( {
      date : "",
      description : "",
      category: "",
      amount : ""
    })
     
function set (e) {
  e.preventDefault()
setData({...data, [e.target.name]:e.target.value })
}



function handleSubmit (e) {
let upd = "http://localhost:8001/transactions"
fetch (upd,{ 
method : 'POST',
headers: {"Content-Type": "application/json"},
body : JSON.stringify(data)
}) 
.then(res => res.json())
.then(res => cash(res))
}
      


  return (
    <div className="ui segment">
      <form className="ui form"  >
        <div className="inline fields">
          <input type="date" name="date" onChange={set} value = {data.date}/>
          <input type="text" name="description" placeholder="Description" onChange={set} value ={data.description}/>
          <input type="text" name="category" placeholder="Category" onChange={set} value= {data.category}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={set} value= {data.amount} />
        </div>
        <button className="ui button" type="submit"onClick ={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );

}

export default AddTransactionForm;


//function nextId () {
  //Math.floor(Math.random()*10)
//}