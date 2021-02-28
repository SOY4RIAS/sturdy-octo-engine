export interface CounterState {
  count: number;
}

export enum CounterTypes {
  COUNTER_PLUS = 'COUNTER_PLUS',
  COUNTER_MINUS = 'COUNTER_MINUS',
  COUNTER_RESET = 'COUNTER_RESET',
  COUNTER_PLUS_N = 'COUNTER_PLUS_N'
}

interface CounterPlus {
  type: CounterTypes.COUNTER_PLUS;
}

interface CounterMinus {
  type: CounterTypes.COUNTER_MINUS;
}

interface CounterReset {
  type: CounterTypes.COUNTER_RESET;
}

interface CounterPlusN {
  type: CounterTypes.COUNTER_PLUS_N;
  payload: number;
}

export type CounterActions = CounterPlus | CounterMinus | CounterReset | CounterPlusN;
