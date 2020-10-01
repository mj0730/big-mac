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
      .then((res) => setUserCountry(res.data['country_name']))
      .catch((e) => console.error('Error fetching country data', e));
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
      <h1>Big Mac Index</h1>
      <Top amount={amount} setAmount={setAmount} userCountry={userCountry} />
      <Middle amount={amount} formatCurrency={formatCurrency} />
      <Bottom amount={amount} formatCurrency={formatCurrency} />
      <footer>
        <a
          href='https://github.com/mj0730/big-mac/'
          target='_blank'
          rel='noreferrer noopener'
          title='Visit the GitHub repository for this application'
        >
          <img src='./GitHub-Mark-Light-64px.png' alt='GitHub logo'></img>github.com/mj0730/big-mac
        </a>
      </footer>
    </div>
  );
}

export default App;
