import { createAction } from "@reduxjs/toolkit";

export const incrementAction = createAction('counter/increment')
export const decrementAction = createAction('counter/decrement')

// {type: 'increment'}