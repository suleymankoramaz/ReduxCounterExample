import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter-actions';
import { RootState } from './counter-reducer';

const Counter = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;