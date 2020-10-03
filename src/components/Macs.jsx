import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Macs = ({ num }) => {
  const [macArray, setMacArray] = useState([]);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    let remain = 0;
    let numOfMacs = num;
    while (numOfMacs > 100) {
      numOfMacs -= 100;
      remain += 100;
    }
    const arr = new Array(numOfMacs).fill(1);
    setExtra(remain);
    setMacArray(arr);
  }, [num]);

  return (
    <div>
      <div className='big-macs'>
        {macArray.map((x, i) => (
          <img key={i} src='./bigmac.svg' alt='&#127828' />
        ))}
      </div>
      <p className='extra'>{extra > 0 ? `+ ${extra} more` : null}</p>
    </div>
  );
};

export default Macs;

Macs.propTypes = {
  num: PropTypes.number.isRequired,
};
