import React from 'react';
import {useState} from 'react';

import { Header } from './components/Header';
import { HeaderMob } from './components/HeaderMob';
import { GlobalStyle } from "./styles/global";
import Rout from './routes';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Rout/>
    <Footer/>
    <ToastContainer/>
    <GlobalStyle/>
    </>
  );
}

export default App;
