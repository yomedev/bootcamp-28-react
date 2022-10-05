import React from 'react'

const Button = ({label}) => {
  const style = {
    backgroundColor: "red",
  }
  
  return (
    <button style={style} >{label}</button>
  )
}

export default Button