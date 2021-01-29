import React from 'react';
import { ReactComponent as FilterIcon } from '../../assets/img/filter.svg';
import styles from './Filter.module.css';

export const Filter = () => {
  return (
    <div className={styles.box}>
      <FilterIcon />
    </div>
  );
};
