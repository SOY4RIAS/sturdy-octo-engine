import { CounterActions, CounterState, CounterTypes } from './types';

const initialState: CounterState = {
  count: 0
};

function counterReducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    case CounterTypes.COUNTER_PLUS:
      return { ...state, count: state.count + 1 };

    case CounterTypes.COUNTER_MINUS:
      return { ...state, count: state.count - 1 };

    case CounterTypes.COUNTER_RESET:
      return { ...state, count: 0 };

    case CounterTypes.COUNTER_PLUS_N:
      return { ...state, count: state.count + action.payload };

    default:
      return state;
  }
}

export default counterReducer;
