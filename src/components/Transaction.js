import React from "react";
function Transaction({list}) {



  return (
    <tr key ={list.id}>
      <td>{list.date}</td>
      <td>{list.description}</td>
      <td>{list.category}</td>
      <td>{list.amount}</td>
    </tr>
  );
}

export default Transaction;