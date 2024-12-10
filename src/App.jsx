import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import './App.css'
import Hero from "./components/hero/Hero";


const App = () => {
  return (
    <div className="main">
      <Header className='header' />
      <Hero />
      <Footer className='footer' />
    </div>
  );
};

export default App;
