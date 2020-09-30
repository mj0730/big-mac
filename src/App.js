import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

function App() {
  const [amount, setAmount] = useState(0);
  const [country, setCountry] = useState('');

  useEffect(() => {}, []);

  return (
    <div className='App'>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
