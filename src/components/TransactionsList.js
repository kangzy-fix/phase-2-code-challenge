import React from "react";
import Transaction from "./Transaction";

function TransactionsList({lists}) {
  console.log(lists)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {lists.map (list => <Transaction key ={list.id} list= {list}/>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;