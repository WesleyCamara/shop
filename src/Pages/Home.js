import React from 'react';
import { Categories } from '../Components/Categories/Categories';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { Produts } from '../Components/Products/Produts';
import { Search } from '../Components/Search/Search';

export const Home = () => {
  return (
    <>
      <div >
        <Header />
        <Search />
        <Categories />
        <Produts />
      </div>
      <Footer />
    </>
  );
};
