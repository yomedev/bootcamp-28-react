import React, { Component, PureComponent, useCallback, useEffect, useState, memo } from 'react';

// class Button extends PureComponent {
//   render() {
//     const { children, onClick } = this.props;
//     console.log('Button');

//     return (
//       <button className="btn btn-outline-light" type="button" onClick={onClick}>
//         {children}
//       </button>
//     );
//   }
// }

const Button = memo(({ onClick, children }) => {
  console.log('Button');
  return (
    <button className="btn btn-outline-light" type="button" onClick={onClick}>
      {children}
    </button>
  )
})

// Rerender() => handleCount

export const Rerender = () => {
  console.log('Rerender');
  const [counter, setCounter] = useState(0)

  const fetch = useCallback(() => { }, [])

  useEffect(() => { }, [fetch])


  const handleCount = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 bg-dark rounded-3 mb-5">
      <h2 className="text-light">{counter}</h2>

      <Button onClick={handleCount} >Click me!</Button>
    </div>
  );
}



// export class Rerender extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCount = () => {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     console.log('Rerender');

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 bg-dark rounded-3 mb-5">
//         <h2 className="text-light">{counter}</h2>

//         <Button onClick={this.handleCount} >Click me!</Button>
//       </div>
//     );
//   }
// }

// new Rerender() => render()