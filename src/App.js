import React from 'react';
import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura';
import Planes from './components/planes/planes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="container-fluid">
        <BuscarFactura></BuscarFactura>
        <Planes></Planes>
      </section>
    </div>
  );
}

export default App;
