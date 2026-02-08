import React from 'react';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import WavingGirl from './components/WavingGirl';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body text-[#4A0404] bg-[#FFFDF7] overflow-x-hidden">
      <Hero />
      <ProductList />
      <Testimonials />
      <Footer />
      <WavingGirl />
    </div>
  );
}

export default App;
