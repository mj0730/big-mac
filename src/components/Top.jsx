import React from 'react'
import PropTypes from 'prop-types'

const Top = () => {
  return (
    <section id='top'>
      <p>Your country: country</p>
      <label htmlFor='amount'>Please enter an amount of money in your local currency:</label>
      <input id='amount' type='number' name='amount' value='' autoFocus />

    </section>
  )
}

export default Top

Top.propTypes = {}