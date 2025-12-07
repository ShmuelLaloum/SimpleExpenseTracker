import React from 'react';

function Balance({ listIncome }) {
  const income = listIncome
    .filter(item => item.selectedCategory === 'income')
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expenditure = listIncome
    .filter(item => item.selectedCategory === 'expenditure')
    .reduce((acc, item) => acc + Math.abs(Number(item.amount)), 0);

  return (
    <div className='balance'>
      <h3>Income: {income}</h3>
      <h3>Expenditure: {expenditure}</h3>
      <h3>Balance: {income - expenditure}</h3>
    </div>
  );
}

export default Balance;
