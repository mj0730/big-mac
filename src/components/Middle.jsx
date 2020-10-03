import React from 'react';
import PropTypes from 'prop-types';
import Macs from './Macs';

const Middle = ({ amount, data }) => {
  const ppp = data.user['Dollar PPP'];
  const numOfMacs = Math.floor(amount / data.user['Local price']);

  return (
    <section id='middle'>
      <h2>Dollar Purchasing Parity (PPP)</h2>
      <p>
        {numOfMacs > 1
          ? `You can buy about ${numOfMacs} Big Mac's `
          : numOfMacs === 1
          ? `You can buy ${numOfMacs} Big Mac `
          : `You can't buy any Big Macs `}
        in your country.
      </p>
      <Macs num={numOfMacs} />
      <p>Your Dollar Purchasing Parity is {ppp}.</p>
    </section>
  );
};

export default Middle;

Middle.propTypes = {
  amount: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
