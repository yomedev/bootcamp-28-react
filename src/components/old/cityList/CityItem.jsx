import React from 'react'
import PropTypes from 'prop-types'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from '@emotion/styled'

const CityItem = ({ cityName, isOnline }) => {

  return (
    <ListItem>
      <MyText className={isOnline ? 'online' : 'offline'}>{cityName}</MyText>
      <MyIcon />
    </ListItem>
  )
}

export default CityItem

CityItem.propTypes = {
  cityName: PropTypes.string.isRequired
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 200px;
`

const MyIcon = styled(BsThreeDotsVertical)`
  color: green;
`

const MyText = styled.p`
  text-decoration: line-through;
  color: ${props => props.color};
`

const MyTextRed = styled(MyText)`
  color: red;
`
const MyTextGreen = styled(MyText)`
  color: green;
`

