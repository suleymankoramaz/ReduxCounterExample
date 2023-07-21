import { AnyAction, configureStore } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: counterReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;