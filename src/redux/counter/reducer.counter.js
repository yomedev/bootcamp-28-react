import { createReducer } from "@reduxjs/toolkit"
import { decrementAction, incrementAction } from "./action.counter"
import { counterInitialState } from "./initial-state.counter"


// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     default:
//       return state
//   }
// }


export const counterReducer = createReducer(counterInitialState, {
  [incrementAction]: (state) => {
    return state + 1
  },
  [decrementAction]: (state) => {
    return state - 1
  },
})