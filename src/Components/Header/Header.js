import React from 'react';
import { ReactComponent as Cart } from '../../assets/img/cart.svg';

import { Menu } from '../Menu/Menu';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <h1>Home</h1>
      <Cart className={styles.cart} />
    </header>
  );
};
