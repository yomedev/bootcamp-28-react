import { counterInitialState } from "./initial-state.counter"

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}