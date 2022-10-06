import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Section = ({title, children}) => {
  return (
    <section>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}