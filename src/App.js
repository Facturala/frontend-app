import React from 'react';
import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura';
import Planes from './components/planes/planes';
import Registro from './components/registro/registro';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="container-fluid">
        <BuscarFactura></BuscarFactura>
        <Planes></Planes>
        <p>Tan facil como llenar un formulario. Registrandote con nosotros puedes acceder a estadisticas de tu negocio en tiempo real y Gratis.</p>
        <Registro></Registro>
      </section>
    </div>
  );
}

export default App;