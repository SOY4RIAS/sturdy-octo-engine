import { CounterActions, CounterTypes } from './types';

export const counterPlus = (): CounterActions => ({ type: CounterTypes.COUNTER_PLUS });

export const counterMinus = (): CounterActions => ({ type: CounterTypes.COUNTER_MINUS });

export const counterReset = (): CounterActions => ({ type: CounterTypes.COUNTER_RESET });

export const counterPlussN = (payload: number): CounterActions => ({
  type: CounterTypes.COUNTER_PLUS_N,
  payload
});
