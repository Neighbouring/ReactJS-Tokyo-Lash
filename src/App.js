import React from 'react';
import './style.css';

// Componentes Constantes
import Header from './comp/_0_main/Header';
// Componentes: Main
import MainIndex from './comp/MainIndex';
// Componentes: Footer
import Footer from './comp/_0_main/Footer';

import { printToScreen } from './ConsoleLog';
printToScreen('Start: Tokyo Lash');

export default function App() {
  return (
    <div>
      <Header />
      <MainIndex />
      <Footer />
    </div>
  );
}
