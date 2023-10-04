import React from 'react';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';

import './styles/main.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
    </>
  );
};
