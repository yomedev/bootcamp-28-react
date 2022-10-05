import React from 'react'
import PropTypes from 'prop-types'
import TutorItem from './TutorItem'
import Button from '../button/Button'
import styles from './TutorList.module.css'

const TutorList = ({ tutors }) => {
  return (
    <>
      <ul className={`${styles.list}`}>
        {
          tutors.map(({ lastName, email }) => (
            <TutorItem key={email} lastName={lastName} email={email} />
          ))
        }
      </ul>
      <button className={`${styles.btn} active`}></button>
    </>

  )
}

export default TutorList

TutorList.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired
}