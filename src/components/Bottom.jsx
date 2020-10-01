import React from 'react';
import PropTypes from 'prop-types';

const Bottom = ({ amount, formatCurrency }) => {
  const userCountryAmount = formatCurrency(amount);
  const otherCountryAmount = formatCurrency(amount);

  return (
    <section id='bottom'>
      <h3>Random Country</h3>
      <p>You can buy # Big Macs in COUNTRY with {userCountryAmount}.</p>

      <p>
        Your {userCountryAmount} is worth about {otherCountryAmount} in COUNTRY.
      </p>
    </section>
  );
};

export default Bottom;

Bottom.propTypes = {
  amount: PropTypes.string.isRequired,
};
