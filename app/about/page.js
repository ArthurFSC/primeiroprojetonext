import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Riot Games: Transformando o Mundo dos Jogos</h2>
                <p className={styles.paragraph}>Desde a sua fundação em 2006, a Riot Games tem se dedicado a criar experiências de jogo inovadoras e envolventes. Com a missão de ser a empresa de entretenimento interativo mais centrada no jogador, a Riot se destaca por sua paixão por jogos e seu compromisso em oferecer experiências de alta qualidade aos jogadores ao redor do mundo.</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Nossa Missão e Visão</h2>
                <p className={styles.paragraph}><strong>Missão:</strong> Na Riot Games, nossa missão é colocar o jogador em primeiro lugar. Acreditamos que os jogos são uma forma poderosa de conectar pessoas e criar comunidades vibrantes. Nosso objetivo é elevar o padrão dos jogos, fornecendo experiências que não apenas entretêm, mas também inspiram e conectam jogadores de todas as origens.</p>
                <p className={styles.paragraph}><strong>Visão:</strong> Transformar a forma como as pessoas jogam e se conectam, fornecendo experiências de jogo excepcionais e promovendo uma cultura de inclusão, criatividade e inovação.</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Nossos Jogos</h2>
                <p className={styles.paragraph}>Desde o lançamento de nosso primeiro título, <em>League of Legends</em>, a Riot Games tem sido uma força inovadora na indústria de jogos. <em>League of Legends</em> é um dos jogos mais jogados e populares do mundo, com uma base de jogadores ativa que supera os 100 milhões de usuários mensais.</p>

                <ul className={styles.paragraph}>
                    <li><strong>League of Legends:</strong> Um jogo de MOBA (Multiplayer Online Battle Arena) que revolucionou o gênero com seu complexo sistema de campeões, jogabilidade estratégica e uma comunidade de eSports global.</li>
                    <li><strong>Valorant:</strong> Um jogo de tiro tático em primeira pessoa que combina a precisão de jogos de tiro com habilidades únicas de personagens, criando uma experiência de jogo competitiva e emocionante.</li>
                    <li><strong>Legends of Runeterra:</strong> Um jogo de cartas colecionáveis ambientado no universo de <em>League of Legends</em>, oferecendo uma jogabilidade estratégica e acessível para jogadores novos e experientes.</li>
                    <li><strong>Wild Rift:</strong> Uma versão móvel e otimizada de <em>League of Legends</em>, que traz a mesma profundidade e estratégia do jogo original para dispositivos móveis e consoles.</li>
                    <li><strong>Ruined King: A League of Legends Story:</strong> Um RPG que explora a narrativa e o mundo de <em>League of Legends</em>, oferecendo uma nova forma de interagir com o universo do jogo.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Estatísticas e Impacto</h2>
                <p className={styles.paragraph}><strong>Impacto Global:</strong></p>
                <ul className={styles.paragraph}>
                    <li><em>League of Legends</em> tem mais de 100 milhões de jogadores ativos mensais em todo o mundo.</li>
                    <li>Os torneios de eSports de <em>League of Legends</em> atraem milhões de espectadores, com a Final do Campeonato Mundial sendo um dos eventos de eSports mais assistidos globalmente.</li>
                    <li><em>Valorant</em> rapidamente se estabeleceu como um dos principais jogos de eSports, com torneios internacionais e uma comunidade crescente de jogadores competitivos.</li>
                </ul>

                <p className={styles.paragraph}><strong>Compromisso com a Comunidade:</strong></p>
                <ul className={styles.paragraph}>
                    <li>A Riot Games investe continuamente na criação de conteúdo e atualizações para manter nossos jogos frescos e interessantes. A cada mês, lançamos novas atualizações, campeões e eventos para engajar e satisfazer nossa comunidade de jogadores.</li>
                    <li>Trabalhamos para garantir um ambiente de jogo positivo e inclusivo, com iniciativas para combater toxicidade e promover a integridade no jogo.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Nosso Futuro</h2>
                <p className={styles.paragraph}>Olhando para o futuro, a Riot Games está comprometida em continuar inovando e expandindo nosso portfólio de jogos. Estamos explorando novas tecnologias e formas de melhorar a experiência de jogo para todos, desde novos jogadores até veteranos.</p>

                <p className={styles.paragraph}><strong>Inovação Contínua:</strong> Nossa equipe de desenvolvimento está sempre em busca de novas maneiras de aprimorar nossos jogos e oferecer experiências únicas. Seja através de novos lançamentos, atualizações ou iniciativas comunitárias, nosso objetivo é manter a experiência de jogo emocionante e envolvente.</p>

                <p className={styles.paragraph}><strong>Cultura e Diversidade:</strong> A Riot Games valoriza uma cultura de inclusão e diversidade. Buscamos criar um ambiente onde todos se sintam bem-vindos e possam contribuir com suas habilidades e perspectivas únicas.</p>
            </section>
        </div>
    );
}
