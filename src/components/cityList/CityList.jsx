import React from 'react'
import PropTypes from 'prop-types'

import styles from "./CityList.module.scss"

import Button from '../button/Button'
import CityItem from './CityItem'


const CityList = ({ cities }) => {
  
  return (
    <>
      <ul className={styles.list}>
        {
          cities.map(({name, isOnline}) => (
            <CityItem key={name} isOnline={isOnline} cityName={name} />
          ))
        }
      </ul>
      <Button label="Add city" />
    </>
  )
}

export default CityList

// CityList.propTypes = {
//   cities: PropTypes.arrayOf(PropTypes.string).isRequired
// }