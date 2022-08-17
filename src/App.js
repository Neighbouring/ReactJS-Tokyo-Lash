import React from 'react';
import './style.css';
// Componentes Constantes
import Header from './comp/_0_main/Header';
import Footer from './comp/_0_main/Footer';
// Componentes: Main
import MainIndex from './comp/MainIndex';
// Componentes: Footer

export default function App() {
  return (
    <div>
      <Header />
      <MainIndex />
      <Footer />
    </div>
  );
}
