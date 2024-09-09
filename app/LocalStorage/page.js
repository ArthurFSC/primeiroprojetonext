// app/LocalStorage/page.js
"use client";

import React from 'react';
import LocalStorageComponent from '../../components/useLocalStorage/LocalStorageComponent';
import styles from './localStorage.module.css'; // Importa o CSS

const LocalStoragePage = () => {
    return (
        <div className={styles.container}>
            <h1>LocalStorage Page</h1>
            <LocalStorageComponent />
        </div>
    );
};

export default LocalStoragePage; // Certifique-se de exportar LocalStoragePage
