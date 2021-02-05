import React, { useState } from 'react';
import styles from './Menu.module.css';

export const Menu = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);

  return (
    <>
      <nav
        className={`${styles.menu} ${expandedMenu && styles.expanded}`}
        onClick={() => setExpandedMenu(!expandedMenu)}
      >
        <span
          className={`${styles.hamburger} ${expandedMenu && styles.expanded}`}
        ></span>
        {expandedMenu && (
          <ul className={styles.menuItems}>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum </li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        )}
      </nav>
    </>
  );
};
