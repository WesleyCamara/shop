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
      </nav>
      <ul className={styles.menuItems}>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
      </ul>
    </>
  );
};
