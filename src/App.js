import React from 'react';

import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura';
import Planes from './components/planes/planes';
import Registro from './components/registro/registro';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="container-fluid">
        <BuscarFactura></BuscarFactura>
        <Planes></Planes>
        <Registro></Registro>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;