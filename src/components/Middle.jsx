import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Middle = ({ amount, data }) => {
  const exchangeRate = 2; //usercurrency / dollar
  const ppp = amount / exchangeRate;
  const numBigMacs = amount / 1;

  console.log('here is the data!!!!!!!', data);
  return (
    <section id='middle'>
      <h3>Dollar Purchasing Parity (PPP)</h3>
      <p>You can buy {numBigMacs} of Big Macs in your country.</p>
      <p>Your Dollar Purchasing Parity is {ppp}</p>
    </section>
  );
};

export default Middle;

Middle.propTypes = {
  amount: PropTypes.string.isRequired,
};
