import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

function App() {
  const [amount, setAmount] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userCurrency, setUserCurrency] = useState('your local currency');
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/country')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setUserCountry(res.user.Country);
        setUserCurrency(res.currency.user['Alphabetic Code']);
      })
      .catch((e) => console.error('Error fetching country data', e));
  }, []);

  const formatCurrency = (value, currency) => {
    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return nf.format(value);
  };

  return (
    <div className='App'>
      <h1>
        Big{' '}
        <img src='https://fontmeme.com/permalink/201003/3dabcfd2fc226babdbbf7ce1a965b43c.png' alt='mcdonalds-font' />
        ac Index
      </h1>
      <Top amount={amount} setAmount={setAmount} userCountry={userCountry} currency={userCurrency} />
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
