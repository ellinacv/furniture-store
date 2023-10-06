import React from 'react';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Features } from './components/Features/Features';

import './styles/main.scss';
import { Products } from './components/Products/Products';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <Products />
    </>
  );
};
