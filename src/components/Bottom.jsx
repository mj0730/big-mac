import React from 'react';
import PropTypes from 'prop-types';
import Macs from './Macs';

const Bottom = ({ amount, formatCurrency, data }) => {
  const randomCountry = data.random.Country;
  const exchangeRate = data.user['Dollar price'] / data.random['Dollar price'];
  const numOfMacs = Math.round((amount / data.user['Local price']) * exchangeRate);
  const userCurrency = data.currency.user['Alphabetic Code'];
  const randomCurrency = data.currency.random['Alphabetic Code'];
  const userCountryAmount = formatCurrency(amount, userCurrency);
  const otherCountryAmount = formatCurrency(amount * exchangeRate, randomCurrency);

  return (
    <section id='bottom'>
      <h2>Random Country {`- ${randomCountry}`}</h2>
      <p>
        {numOfMacs > 1
          ? `You can buy about ${numOfMacs} Big Mac's `
          : numOfMacs === 1
          ? `You can buy ${numOfMacs} Big Mac `
          : `You can't buy any Big Macs `}
        in {randomCountry} with {userCountryAmount}.
      </p>

      <Macs num={numOfMacs} />

      <p>
        Your {userCountryAmount} is worth about {otherCountryAmount} in {randomCountry}.
      </p>
    </section>
  );
};

export default Bottom;

Bottom.propTypes = {
  amount: PropTypes.string.isRequired,
  formatCurrency: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
