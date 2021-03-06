import React from 'react';
import PropTypes from 'prop-types';

const Top = ({ amount, userCountry, setAmount, currency }) => {
  const handleInput = (e) => {
    const val = e.target.value
      .toString()
      .split('.')
      .map((el, i) => (i ? el.split('').slice(0, 2).join('') : el))
      .join('.');

    setAmount(val);
    //still allows multiple decimals
  };

  return (
    <section id='top'>
      <p>Your country: {userCountry}</p>
      <label htmlFor='amount'>Please enter an amount of money in {currency}</label>
      <input
        id='amount'
        type='number'
        name='amount'
        placeholder='enter amount'
        value={amount}
        onChange={(e) => handleInput(e)}
        autoFocus
      />
    </section>
  );
};

export default Top;

Top.propTypes = {
  amount: PropTypes.string.isRequired,
  userCountry: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
