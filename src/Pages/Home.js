import React from 'react';
import { Categories } from '../Components/Categories/Categories';
import { Header } from '../Components/Header/Header';
import { Search } from '../Components/Search/Search';

export const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Categories />
    </>
  );
};
