import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

function App() {
  const [amount, setAmount] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {}, []);

  const formatCurrency = (value, country, currency) => {
    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return nf.format(value);
  };

  return (
    <div className='App'>
      <Top amount={amount} setAmount={setAmount} />
      <Middle amount={amount} formatCurrency={formatCurrency} />
      <Bottom amount={amount} formatCurrency={formatCurrency} />
    </div>
  );
}

export default App;
