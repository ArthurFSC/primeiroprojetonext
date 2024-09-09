// app/clicker/page.js
'use client';

import { useState } from 'react';
import styles from './clicker.module.css';

export default function Clicker() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={styles.container}>
      <h1>Clicker</h1>
      <p>Current Count: {count}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={decrement}>Subtrair</button>
        <button className={styles.button} onClick={reset}>Resetar</button>
        <button className={styles.button} onClick={increment}>Adicionar</button>
      </div>
    </div>
  );
}
