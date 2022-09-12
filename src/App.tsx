import React from 'react';

import { Header } from './components/Header';

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
