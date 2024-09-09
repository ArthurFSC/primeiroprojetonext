// components/Header/header.js
"use client"; // Adiciona essa linha para tornar o componente Client-side

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Header/header.module.css'; // Certifique-se de que o caminho está correto
import { useDocumentTitle } from '@/components/useDocumentTitle/useDocumentTitle'; // Certifique-se de que o caminho está correto

export default function Header() {
    const [title, setTitle] = useState('');

    useDocumentTitle(title); // Atualiza o título do documento com base no estado

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/1638262259958.png" alt="Logo" className={styles.logoImage} />
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link className={styles.color} href="/">Home</Link></li>
                    <li><Link className={styles.color} href="/about">About</Link></li>
                    <li><Link className={styles.color} href="/contact">Contact</Link></li>
                    <li><Link className={styles.color} href="/clicker">Clicker</Link></li>
                    <li><Link className={styles.color} href="/toggle">Toggle</Link></li>
                    <li><Link className={styles.color} href="/LocalStorage">LocalStorage</Link></li>
                    <li><Link className={styles.color} href="/DocumentTitle">DocumentTitle</Link></li>
                </ul>
            </nav>
        </header>
    );
}
