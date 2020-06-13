import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpense } from './components/IncomeExpense'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="reading-container">
          <Balance />
          <IncomeExpense />
        </div>
        <div className="show-container">
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
