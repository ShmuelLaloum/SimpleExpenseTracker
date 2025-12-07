import { useState, useEffect } from 'react';
import AddTransactionForm from './components/AddTransactionForm'
import TransactionList from './components/TransactionList';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Balance from './components/Balance';
function App() {
  const [listIncome, setListIncome] = useState(() => {
    const saved = localStorage.getItem("listIncome");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("listIncome", JSON.stringify(listIncome));
  }, [listIncome]);    

  return(
    <div>
    <AddTransactionForm listIncome = {listIncome} setListIncome = {setListIncome}></AddTransactionForm>

    <TransactionList listIncome = {listIncome} setListIncome = {setListIncome}></TransactionList>

    <Balance listIncome={listIncome} ></Balance>

    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )  
}

export default App
