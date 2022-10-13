import axios from "axios";
import { useEffect, useState, useRef } from "react";

const COUNTER_KEY = 'counter-key'

const getLocalData = () => {
  return JSON.parse(localStorage.getItem(COUNTER_KEY))
}

export const Counter = ({ someProp }) => {
  const [android, setAndroid] = useState(() => getLocalData()?.android ?? 0)
  const [iphone, setIphone] = useState(() => getLocalData()?.iphone ?? 0)
  const prevProp = useRef(null)
  const containerRef = useRef(null)

  const stateMap = {
    android: setAndroid,
    iphone: setIphone,
  }

  useEffect(() => {
    const fetch = async () => {
      // axios
    }
    fetch()

    (async () => {

    })()
  }, [])

  const handleChange = event => {
    const { name } = event.target
    stateMap[name](prev => prev + 1)
  }
  console.log(containerRef.current);
  useEffect(() => {
    if (prevProp.current !== someProp) {
      //...
    }
    prevProp.current = someProp

    console.log(containerRef.current.scrollHeight + 200);
    localStorage.setItem(COUNTER_KEY, JSON.stringify({ android, iphone }))
  }, [android, iphone, someProp])

  return (
    <div ref={containerRef} className="mb-5 p-4 text-white bg-dark rounded-3">
      <p className="text-center my-3" style={{ fontSize: 50 }}>
        Android: {android}
      </p>
      <p className="text-center my-3" style={{ fontSize: 50 }}>
        iPhone: {iphone}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={handleChange}
        >
          Android
        </button>
        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={handleChange}
        >
          iPhone
        </button>
      </div>
    </div>
  );
}

// import { Component } from 'react';

// export class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   handleUpdate = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { android, iphone } = this.state;

//     return (
//       <div className="mb-5 p-4 text-white bg-dark rounded-3">
//         <p className="text-center my-3" style={{ fontSize: 50 }}>
//           Android: {android}
//         </p>
//         <p className="text-center my-3" style={{ fontSize: 50 }}>
//           iPhone: {iphone}
//         </p>

//         <div className="d-flex align-items-center justify-content-center w-100">
//           <button
//             type="button"
//             name="android"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             Android
//           </button>
//           <button
//             type="button"
//             name="iphone"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             iPhone
//           </button>
//         </div>
//       </div>
//     );
//   }
// } 