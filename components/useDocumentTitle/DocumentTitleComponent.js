"use client";

import React, { useState } from 'react';
import { useDocumentTitle } from '@/components/useDocumentTitle/useDocumentTitle';
import styles from '@/app/DocumentTitle/documentTitle.module.css'; // Certifique-se de que o caminho está correto

const DocumentTitleComponent = () => {
    const [title, setTitle] = useState(''); // Estado para armazenar o valor do input
    const [tempTitle, setTempTitle] = useState(''); // Estado temporário para o input

    const handleChange = (event) => {
        setTempTitle(event.target.value); // Atualiza o título temporário conforme o usuário digita
    };

    const handleConfirm = () => {
        setTitle(tempTitle); // Atualiza o título da página quando o botão for clicado
    };

    useDocumentTitle(title); // Atualiza o título do documento com base no estado

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Atualizar Título da Página</h1>
            <div className={styles.box}>
                <div className={styles.inputContainer}>
                    <input 
                        type="text" 
                        value={tempTitle} 
                        onChange={handleChange} 
                        placeholder="Digite o título da página..." 
                        className={styles.input}
                    />
                </div>
                <button 
                    onClick={handleConfirm} 
                    className={styles.confirmButton}
                >
                    Confirmar Atualização
                </button>
            </div>
        </div>
    );
};

export default DocumentTitleComponent;
