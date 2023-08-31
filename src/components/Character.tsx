import styles from '@styles/Character.module.css';

interface CharacterProps {
    name: string;
    race: string;
    klas: string;
    level: number;
    children: React.ReactNode;
}

const Character: React.FC<CharacterProps> = ({ name, race, klas, level, children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.characterImage}>{children}</div>

            <div className={styles.border}>
                <div className={styles.level}>{level}</div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>
                    {klas} {race}
                </div>
            </div>
        </div>
    );
};

export default Character;
