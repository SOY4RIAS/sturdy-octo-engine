import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { counterActions } from '../../../store/counter';

import styles from './styles.module.scss';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector<RootState>(({ counter }) => counter.count);

  const [number, setNumber] = useState(0);

  const handleAdd = () => dispatch(counterActions.counterPlus());
  const handleMinus = () => dispatch(counterActions.counterMinus());
  const handleReset = () => dispatch(counterActions.counterReset());
  const handleAddNumber = () => dispatch(counterActions.counterPlussN(number));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNumber(Number(e.currentTarget.value));

  return (
    <div className={styles.container}>
      <h1>Counter</h1>

      <div className={styles['container-counter']}>
        <button type="button" onClick={handleAdd}>
          +1
        </button>
        <h2>counts: {count}</h2>
        <button type="button" onClick={handleMinus}>
          -1
        </button>
      </div>

      <div className={styles['container-input']}>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" onClick={handleAddNumber}>
          Add Number
        </button>
        <input onChange={handleChange} type="number" />
      </div>
    </div>
  );
}

export default Counter;
