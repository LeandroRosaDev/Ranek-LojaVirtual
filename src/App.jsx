import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Produtos } from './Components/Produtos';
import { Contato } from './Components/Contato';
import { Produto } from './Components/Produto';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <div className="content">
          <Routes>
            <Route path="/Ranek-LojaVirtual" element={<Produtos />} />
            <Route
              path="/Ranek-LojaVirtual/produto/:id"
              element={<Produto />}
            />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
