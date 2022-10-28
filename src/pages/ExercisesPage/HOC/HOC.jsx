import axios from 'axios'
import React, { Component } from 'react'
import { useFetcher } from 'react-router-dom'

const withFetch = url => Element => {
  class InnerComponent extends Component {
    state = {
      value: [],
      isLoading: false
    }

    componentDidMount() {
      this.setState({ isLoading: true })
      axios.get(url)
        .then(({ data }) => this.setState({ value: data.data }))
        .finally(() => this.setState({ isLoading: false }))
    }

    render() {
      const { value, isLoading } = this.state
      return <Element value={value} isLoading={isLoading} />
    }
  }

  return InnerComponent
}

const List = ({ value, isLoading }) => {

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {value?.map(({ fact }) => <li key={fact}>{fact}</li>)}
    </ul>
  )
}

const urlFetch = withFetch('https://catfact.ninja/facts?limit=10')
const Facts = urlFetch(List)
//Facts => <InnerComponent />

class HOC extends Component {
  render() {
    return (
      <>
        <Facts />
      </>
    )
  }

}



export default HOC

const sum = (a, b) => {
  const res = a + b

  return res
}


const sub = (a, b) => {
  const res = a - b

  return res
}

const logDecorator = func => {
  return (a, b) => {
    const result = func(a, b)
    console.log(`${a} + ${b} = ${result}`);
    return result
  }
}

const sumVar = logDecorator(sum) // => (a, b) => sum(a, b) open
sumVar(5, 6)

console.log(logDecorator(sum)(5, 6)) // (a, b) => result
console.log(logDecorator(sub)(10, 5)) // (a, b) => result