import { Component } from 'react'

// Змінна стейту і пропсів викликає render і так відбувається динамічне відображення даннів на сторінці
// Передача callback в setState

class Counter extends Component {

  state = {
    counter: 4,
  }

  handleMinus = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }))
  }

  handlePlus = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))
  }

  handleUpdate = (event) => {
    console.log(event.target);
    const { name } = event.target
    switch (name) {
      case "minus":
        this.setState((prevState) => ({ counter: prevState.counter - 1 }))
        break
      case "plus":
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
        break

      default: new Error('Something went wrong!')
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>{counter}</p>

        <div className="d-flex align-items-center justify-content-center w-100">

          <Button label="Plus" name="plus" onClick={this.handleUpdate} />
          <Button label="Minus" name="minus" onClick={this.handleUpdate} />

          {/* <button name="minus" onClick={this.handleUpdate} type='button' className="btn p-3 btn-outline-light w-25 mx-2">
            Minus
          </button>
          <button name="plus" onClick={this.handleUpdate} type='button' className="btn p-3 btn-outline-light w-25 mx-2">
            Plus
          </button> */}
        </div>
      </div>
    )
  }
}

const Button = ({label, name, onClick}) => {
  return (
    <button name={name} onClick={onClick} type='button' className="btn p-3 btn-outline-light w-25 mx-2">
      {label}
    </button>
  )
}

// Counter.defaultProps = {
//   counter: 4
// }

// const Counter = ({counter = 4}) => {
//   return (
//     
//   )
// }

export default Counter