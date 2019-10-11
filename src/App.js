import React from 'react';
import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="p-0">
        <BuscarFactura></BuscarFactura>
      </section>
    </div>
  );
}

export default App;
