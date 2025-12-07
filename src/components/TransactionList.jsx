import React from 'react';
import TransactionItem from './TransactionItem';
import "../App.css";
function TransactionList({ listIncome, setListIncome }) {
  return (
    <div className="card-list">
      {listIncome.map(item => (
        <TransactionItem key={item.id} income={item} setListIncome={setListIncome} />
      ))}
    </div>
  );
}

export default TransactionList;
