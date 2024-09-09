// components/useToggle/ToggleComponent.js
"use client";

import React from 'react';
import { useToggle } from './useToggle';
import styles from '@/app/toggle/toggle.module.css'; // Import the CSS module

const ToggleComponent = () => {
    const [isVisible, toggleVisibility] = useToggle();

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={toggleVisibility}>
                {isVisible ? 'Esconder' : 'Mostrar'} Texto
            </button>
            {isVisible && <p className={styles.text}>Valorant e Lol é uma doença sem cura.</p>}
        </div>
    );
};

export default ToggleComponent;
