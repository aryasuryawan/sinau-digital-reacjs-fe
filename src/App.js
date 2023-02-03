import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import SingleTraining from "./pages/SingleTraining";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <ContactForm/> } />
        <Route path="/training/:id" element={<SingleTraining />} />
              </Routes>
      <Footer />
    </div>
  )
}

export default App