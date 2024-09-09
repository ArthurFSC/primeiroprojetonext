// pages/contact/page.js

import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contato</h1>
            <section className={styles.info}>
                <h2 className={styles.subtitle}>Informações de Contato</h2>
                <p className={styles.paragraph}>
                    Se você deseja entrar em contato com a Riot Games, utilize as seguintes informações:
                </p>
                <ul className={styles.contactList}>
                    <li><strong>Email:</strong> support@riotgames.com</li>
                    <li><strong>Endereço:</strong> Avenida Thomas Edison, 849, Barra Funda, São Paulo, SP, CEP 01.140-001</li>
                </ul>
            </section>
            <section className={styles.formSection}>
                <h2 className={styles.subtitle}>Formulário de Contato</h2>
                <form className={styles.contactForm}>
                    <label className={styles.label} htmlFor="name">Nome:</label>
                    <input className={styles.input} type="text" id="name" name="name" required />

                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} type="email" id="email" name="email" required />

                    <label className={styles.label} htmlFor="message">Mensagem:</label>
                    <textarea className={styles.textarea} id="message" name="message" rows="5" required></textarea>

                    <button className={styles.submitButton} type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
}
