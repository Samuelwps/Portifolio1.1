import React from 'react';

import { Header } from './components/Header';
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Projects/>
    <GlobalStyle/>
    </>
  );
}

export default App;
