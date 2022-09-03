import React from 'react';
import {useState} from 'react';

import { Header } from './components/Header';
import { HeaderMob } from './components/HeaderMob';
import { GlobalStyle } from "./styles/global";
import Rout from './routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Rout/>
    <Footer/>
    <GlobalStyle/>
    </>
  );
}

export default App;
