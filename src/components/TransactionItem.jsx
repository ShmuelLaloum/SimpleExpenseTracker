import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function TransactionItem({ income, setListIncome }){
  
  const deleteIncome = () => {
    setListIncome(prev => prev.filter(I => I.id !== income.id));
    toast.info(`${income.selectedCategory} deleted!`);
  };

  return (
    <div className='card'>
      <p><strong>description:</strong> {income.description}</p>
      <p><strong>Amount:</strong> {income.amount}₪</p>
      <p><strong>category:</strong> {income.selectedCategory}</p>
      <button onClick={deleteIncome}>Delete</button>
    </div>
  );
}

export default TransactionItem;
