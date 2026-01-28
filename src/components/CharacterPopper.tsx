import { useState } from 'react';
import { usePopper } from 'react-popper';
import styles from '@styles/Popper.module.css';
import fernir from '@assets/images/fernir.png';
import ool from '@assets/images/ool.jpeg';
import xannax from '@assets/images/xannax.png';
import ithil from '@assets/images/ithil.png';
import nedsie from '@assets/images/nedsie.jpg';
import Character from './Character';

interface PopperProps {
  children: React.ReactNode;
  character: CharacterType;
}

type CharacterType = 'fernir' | 'ool' | 'xannax' | 'ithil' | 'nedsie';

const getCharacterInfo = (character: CharacterType) => {
  const characters = {
    fernir: { name: 'Fernir', race: 'Dragonborn', klas: 'Barbarian', image: fernir.src },
    maldrak: { name: 'Maldrak', race: 'Dragonborn', klas: 'Paladin', image: fernir.src },
    ool: { name: 'Ool', race: 'Halfling', klas: 'Monk', image: ool.src },
    nedsie: { name: 'Nedsie', race: 'Halfling', klas: 'Fighter', image: nedsie.src },
    ithil: { name: 'Ithil', race: 'Elf', klas: 'Druid', image: ithil.src },
    xannax: { name: 'Xannax', race: 'Changeling', klas: 'Warlock', image: xannax.src },
  };

  return characters[character];
};

const getCharacter = (character: CharacterType) => {
  const info = getCharacterInfo(character);
  return (
    <Character name={info.name} klas={info.klas} race={info.race} level={4}>
      <img src={info.image} alt={info.name} width="80%" />
    </Character>
  );
};

const CharacterPopper: React.FC<PopperProps> = ({ children, character }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Popper state and positioning
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const characterImage = getCharacter(character);
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'top',
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    },
  );

  return (
    <>
      <span
        className={styles.text}
        ref={setReferenceElement}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
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
          <div ref={setArrowElement} style={popperStyles.arrow}></div>
          {characterImage}
        </div>
      )}
    </>
  );
};

export default CharacterPopper;
