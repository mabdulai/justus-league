import styles from '../styles/NPC.module.css';

interface NPCProps {
    name: string;
    picture: string;
    appearsIn: {
        text: string;
        link: string;
    };
    meetingPlace: string;
    rol: string;
    groepPlek: string;
    verhouding: string;
    losseDraadjes: string;
    children?: React.ReactNode;
}

const NPC: React.FC<NPCProps> = ({
    name,
    picture,
    appearsIn,
    meetingPlace,
    rol,
    groepPlek,
    verhouding,
    losseDraadjes,
    children,
}) => {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <img src={picture} alt={name} />
            </div>
            <div className={styles.body}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.meta}>
                    <p className={styles.metaLine}>
                        <span className={styles.metaLabel}>Voor het eerst in:</span>
                        <a className={styles.metaLink} href={appearsIn.link}>
                            {appearsIn.text}
                        </a>
                    </p>
                    <p className={styles.metaLine}>
                        <span className={styles.metaLabel}>Ontmoetingsplek</span>
                        <span>{meetingPlace}</span>
                    </p>
                </div>
                <dl className={styles.fields}>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Rol</dt>
                        <dd className={styles.fieldValue}>{rol}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Groep / plek</dt>
                        <dd className={styles.fieldValue}>{groepPlek}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Verhouding tot de groep</dt>
                        <dd className={styles.fieldValue}>{verhouding}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Wat we nog niet weten</dt>
                        <dd className={styles.fieldValue}>{losseDraadjes}</dd>
                    </div>
                </dl>
                {children ? (
                    <div className={styles.notes}>
                        <h3 className={styles.notesTitle}>Aanvullende notities</h3>
                        <div className={styles.notesBody}>{children}</div>
                    </div>
                ) : null}
            </div>
        </article>
    );
};

export default NPC;
