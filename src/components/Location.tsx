import styles from '../styles/NPC.module.css';

export interface LocationProps {
    name: string;
    picture: string;
    appearsIn: {
        text: string;
        link: string;
    };
    regio: string;
    soort: string;
    plotRol: string;
    herinneringen: string;
    openVragen: string;
    children?: React.ReactNode;
}

const Location: React.FC<LocationProps> = ({
    name,
    picture,
    appearsIn,
    regio,
    soort,
    plotRol,
    herinneringen,
    openVragen,
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
                        <span className={styles.metaLabel}>Regio</span>
                        <span>{regio}</span>
                    </p>
                </div>
                <dl className={styles.fields}>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Soort plek</dt>
                        <dd className={styles.fieldValue}>{soort}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Belang voor het verhaal</dt>
                        <dd className={styles.fieldValue}>{plotRol}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Wat de Justus-League meemaakte</dt>
                        <dd className={styles.fieldValue}>{herinneringen}</dd>
                    </div>
                    <div className={styles.field}>
                        <dt className={styles.fieldLabel}>Nog open of mysterieus</dt>
                        <dd className={styles.fieldValue}>{openVragen}</dd>
                    </div>
                </dl>
                {children ? (
                    <div className={styles.notes}>
                        <h3 className={styles.notesTitle}>Uit de sessies</h3>
                        <div className={styles.notesBody}>{children}</div>
                    </div>
                ) : null}
            </div>
        </article>
    );
};

export default Location;
