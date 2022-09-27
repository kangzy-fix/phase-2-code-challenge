
import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transaction, setTransaction] = useState([]);
  const[search, setSearch]=useState('')

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);
  const handleTransList = (addTrans) => {
    const newTransList = [...transaction, addTrans];
    setTransaction(newTransList);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        getTransactions={handleTransList} 
        transaction={transaction} 
        search={search}
        setSearch = {setSearch}
        />
    </div>
  );
}

export default App;