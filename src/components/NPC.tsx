import styles from '../styles/NPC.module.css';

interface NPCProps {
    name: string;
    picture: string;
    appearsIn: {
        text: string;
        link: string;
    };
    meetingPlace: string;
    children: React.ReactNode;
}

const NPC: React.FC<NPCProps> = ({
    name,
    picture,
    appearsIn,
    meetingPlace,
    children,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={picture} alt={name} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <p className={styles.appearsIn}>
                    <strong>Verschijnt in: </strong> <br />
                    <a href={appearsIn.link}>{appearsIn.text}</a>
                </p>
                <p>
                    <strong>Ontmoetingsplek:</strong> <br />
                    {meetingPlace}
                </p>
                <p>
                    <strong>Info:</strong>
                    <br />
                    {children}
                </p>
            </div>
        </div>
    );
};

export default NPC;
