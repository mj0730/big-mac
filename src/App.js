import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

function App() {
  const [amount, setAmount] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/country')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setUserCountry(res.user.Country);
      })
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
      {!data ? <p>Loading...</p> : <Middle amount={amount} formatCurrency={formatCurrency} data={data} />}
      {!data ? <p></p> : <Bottom amount={amount} formatCurrency={formatCurrency} data={data} />}

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
