import styles from '../styles/Character.module.css';

interface CharacterProps {
    name: string;
    picture: string;
    race: string;
    klas: string;
    level: number;
}

const Character: React.FC<CharacterProps> = ({ name, picture, race, klas, level }) => {
    return (
        <div className={styles.card}>
            <div className={styles.characterImage}>
                <img src={picture} alt={name} />
            </div>

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
