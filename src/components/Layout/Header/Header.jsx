import React from 'react'
import { PropTypes } from 'prop-types';

const Header = ({title}) => {
  return (
    <header className="pb-4">
      <h1>{title}</h1>
    </header>
  )
}

export default Header

Header.propType = {
  title: PropTypes.string.isRequired,
};