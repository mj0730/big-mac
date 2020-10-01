import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

function App() {
  const [amount, setAmount] = useState('');
  const [userCountry, setUserCountry] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/country')
      .then((res) => res.json())
      .then((res) => setUserCountry(res.data['country_name']));
  }, []);

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
      <Top amount={amount} setAmount={setAmount} userCountry={userCountry} />
      <Middle amount={amount} formatCurrency={formatCurrency} />
      <Bottom amount={amount} formatCurrency={formatCurrency} />
    </div>
  );
}

export default App;
