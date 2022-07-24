import React from 'react';

import { Header } from './components/Header';
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
