import styles from '@styles/Popper.module.css';
import { useState } from 'react';
import { useFloating, useHover, useInteractions } from '@floating-ui/react';

interface PopperProps {
    text: string;
}

const Popper: React.FC<PopperProps> = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const hover = useHover(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
    return (
        <>
            <span
                className={styles.text}
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                {text}
            </span>
            {isOpen && (
                <div
                    className={styles.floating}
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                >
                    Floating element
                </div>
            )}
        </>
    );
};

export default Popper;
