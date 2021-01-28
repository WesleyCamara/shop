import React from 'react';
import styles from './Categories.module.css';
import apple from '../../assets/img/apple.webp';

export const Categories = () => {
  return (
    <nav>
      <ul className={styles.categories}>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Celulares</span>
        </li>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Notebooks</span>
        </li>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Câmeras</span>
        </li>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Smartwatch</span>
        </li>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Tablets</span>
        </li>
        <li className={styles.categoriesItem}>
          <div>
            <img src={apple} alt="" />
          </div>
          <span>Video Games</span>
        </li>
      </ul>
    </nav>
  );
};
