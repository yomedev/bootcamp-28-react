import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from '../../../redux/counter/action.counter';


export const CounterPage = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()
  // console.log(counter);

  const handleIncrement = () => {
    dispatch(incrementAction())
  }

  const handleDecrement = () => {
    dispatch(decrementAction())
  }

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 50 }}>
        Counter: {counter}
      </p>
      

      <div className="d-flex align-items-center justify-content-center w-100">
        <button type="button" name="android" style={{ fontSize: 20 }} onClick={handleDecrement} className="btn p-3 btn-outline-light w-25 mx-2">
          -1
        </button>
        <button type="button" name="iphone" style={{ fontSize: 20 }} onClick={handleIncrement} className="btn p-3 btn-outline-light w-25 mx-2">
          +1
        </button>
      </div>
    </div>
  );
};