import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import ProductGrids from "./components/ProductGrids";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <ContactForm/> } />
        <Route path="/product/:id" element={<ProductGrids />} />
              </Routes>
      <Footer />
    </div>
  )
}

export default App