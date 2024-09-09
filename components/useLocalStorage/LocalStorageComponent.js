import React, { useState } from 'react';
import { useLocalStorage } from '../../components/useLocalStorage/useLocalStorage';
import styles from '@/app/LocalStorage/localstorage.module.css';

const LocalStorageComponent = () => {
    const [value, setValue] = useLocalStorage('myKey', []);
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleAdd = () => {
        if (input.trim()) {
            setValue([...value, input.trim()]);
            setInput('');
        }
    };

    const handleRemove = (index) => {
        const newValue = value.filter((_, i) => i !== index);
        setValue(newValue);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Local Storage</div>
            <div className={styles.box}>
                <div className={styles['input-container']}>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={handleChange} 
                        placeholder="Escreva Algo"
                        className={styles.input}
                    />
                    <button 
                        onClick={handleAdd} 
                        className={styles.addButton}
                    >
                        Adicionar
                    </button>
                </div>
                <div className={styles['value-container']}>
                    <ul className={styles.list}>
                        {Array.isArray(value) && value.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                {item}
                                <button 
                                    onClick={() => handleRemove(index)} 
                                    className={styles.removeButton}
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LocalStorageComponent;
