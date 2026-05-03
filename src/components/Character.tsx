import styles from '@styles/Character.module.css';

interface CharacterProps {
    name: string;
    race: string;
    klas: string;
    level: number;
    children: React.ReactNode;
    variant?: 'default' | 'former';
    tagline?: string;
}

const Character: React.FC<CharacterProps> = ({
    name,
    race,
    klas,
    level,
    children,
    variant = 'default',
    tagline,
}) => {
    const cardClass =
        variant === 'former' ? `${styles.card} ${styles.cardFormer}` : styles.card;

    return (
        <div className={cardClass}>
            <div className={styles.characterImage}>{children}</div>

            <div className={variant === 'former' ? `${styles.border} ${styles.borderFormer}` : styles.border}>
                <div className={variant === 'former' ? `${styles.level} ${styles.levelFormer}` : styles.level}>
                    <span className={styles.levelFace} aria-hidden="true" />
                    <span className={styles.levelDigit}>{level}</span>
                </div>
            </div>
            <div className={styles.info}>
                <div className={variant === 'former' ? `${styles.name} ${styles.nameFormer}` : styles.name}>
                    {name}
                </div>
                <div className={styles.desc}>
                    {klas} · {race}
                </div>
                {tagline ? <div className={styles.tagline}>{tagline}</div> : null}
            </div>
        </div>
    );
};

export default Character;
