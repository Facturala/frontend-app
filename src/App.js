import React from 'react';
import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="container-fluid">
        <BuscarFactura></BuscarFactura>
      </section>
    </div>
  );
}

export default App;
