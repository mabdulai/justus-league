import { useState } from 'react';
import { usePopper } from 'react-popper';
import styles from '@styles/Popper.module.css';

interface PopperProps {
    children: React.ReactNode;
    text: string;
}

const Popper: React.FC<PopperProps> = ({ children, text }) => {
    const [isOpen, setIsOpen] = useState(true);

    // Popper state and positioning
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
    const { styles: popperStyles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            placement: 'top', // Position above the reference element
        }
    );

    return (
        <>
            <span
                className={styles.text}
                ref={setReferenceElement} // Assign reference element
                onMouseEnter={() => {
                    setIsOpen(true);
                    console.log('hi');
                }} // Show on hover
                onMouseLeave={() => setIsOpen(false)} // Hide on hover leave
            >
                {children}
            </span>

            {/* Popper content */}
            {isOpen && (
                <div
                    className={styles.floating}
                    ref={setPopperElement} // Assign popper element
                    style={popperStyles.popper}
                    {...attributes.popper}
                >
                    {text}
                </div>
            )}
        </>
    );
};

export default Popper;
