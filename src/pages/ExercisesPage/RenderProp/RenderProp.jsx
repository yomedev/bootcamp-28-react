import React, { useState } from 'react'
import { Button } from '../../../components/Button/Button'

const Counter = ({ children }) => {
  const [counter, setCounter] = useState(0)
  return children(counter, setCounter)
}

const CounterBtn = ({ counter, setCounter }) => {
  return (
    <>
      <p>{counter}</p>
      <Button onClick={() => setCounter(prev => prev + 1)}>+1</Button>
    </>
  )
}

const RenderProp = () => {
  return (
    <>
      <Counter>
        {
          (counter, setCounter) => {
            return <CounterBtn counter={counter} setCounter={setCounter} />
          }
        }
      </Counter>
    </>
  )
}

export default RenderProp