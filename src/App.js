import React from 'react';

import './App.scss';
import Header from './components/header/header';
import BuscarFactura from './components/buscarFactura/buscarFactura';
import Planes from './components/planes/planes';
import Registro from './components/registro/registro';
import Footer from './components/footer/footer';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <main className="container-fluid">
          <BuscarFactura></BuscarFactura>
          <Planes></Planes>
          <Registro></Registro>
          <Footer></Footer>
        </main>
      </div>
    </Provider>
  );
}

export default App;