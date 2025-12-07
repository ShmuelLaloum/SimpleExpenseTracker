import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function AddTransactionForm({listIncome, setListIncome}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [categories] = useState(["income", "expenditure"]);
    const [selectedCategory, setSelectedCategory] = useState("income");

    const handleAdd = () =>{
        if(!description.trim()||!amount){
            toast.error("complete the process!");
            return;
        }
        if(amount < 0){
          toast.error("can't type a negative number");
          return;
        }
    const newIncome = { id: crypto.randomUUID(), description, amount, selectedCategory}; 
    setListIncome(prevListIncome => [...prevListIncome , newIncome])

    setDescription("");
    setAmount("");
    toast.success(`${selectedCategory} added!`);
    };

  return (
    <div className="column-container">
      <input  type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a description" />
      <input  type= "number" value={amount}  onChange={(e) => setAmount(e.target.value)}placeholder="Add a amount"/>
      <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((cat, i) => (
        <option key={i} value={cat}>
          {cat}
        </option>
      ))}
    </select>
      <button onClick={handleAdd}>Add</button>

    </div>
  );
}

export default AddTransactionForm;
