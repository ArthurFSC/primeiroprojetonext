// app/page.js

import Image from 'next/image'; // Importa o componente Image do Next.js
import styles from './page.module.css'; // Se estiver usando módulos CSS para estilização

export default function HomePage() {
  return (
    <div>
      <header className={styles.header}> {/* Assegure-se de ter a classe header correta aqui */}
        {/* Aqui pode vir o conteúdo do cabeçalho, como navegação e logo */}
      </header>

      <div className={styles.inicio}>
        {/* Usando o componente Image do Next.js */}
        <h1 className={styles.title}>Riot Games</h1>
      </div>

      <h2 className={styles.subtitle}>
        A Riot Games é uma desenvolvedora e publicadora de jogos conhecida por criar experiências imersivas e inovadoras no mundo dos videogames. Desde a sua fundação em 2006, a Riot se destacou por seu compromisso com a qualidade e a comunidade.
      </h2>

      <p className={styles.paragraph}>
        A Riot Games, desenvolvedora por trás de sucessos globais como Valorant, League of Legends e Teamfight Tactics, tem se destacado no cenário dos jogos eletrônicos com suas produções extremamente populares e amplamente jogadas. Seus títulos alcançaram uma impressionante audiência global, com milhões de jogadores ativos diariamente. O impacto da Riot Games é evidente no modo como seus jogos não apenas dominam as paradas de popularidade, mas também moldam tendências e definem o padrão para novos lançamentos no gênero. Com uma combinação de inovação contínua, engajamento da comunidade e suporte robusto, a Riot Games consolidou sua posição como uma força dominante no mundo dos eSports e dos jogos digitais.
      </p>
    </div>
  );
}
