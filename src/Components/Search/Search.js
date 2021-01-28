import React from 'react';
import searchIcon from '../../assets/img/search.svg';
import styles from './Search.module.css';

export const Search = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Pesquisar" />
      <button>
        <img src={searchIcon} alt="Pesquisar" className={styles.searchIcon} />
      </button>
    </form>
  );
};
