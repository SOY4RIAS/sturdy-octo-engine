import styles from './styles.module.scss';

function Counter() {
  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <h2>counts: {1}</h2>
      <div>
        <button type="button">+1</button>
        <button type="button">+1</button>
      </div>
    </div>
  );
}

export default Counter;
