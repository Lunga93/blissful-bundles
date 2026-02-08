import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './lib/firebase';
import { pricesAtom } from './store/atoms';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import WavingGirl from './components/WavingGirl';
import Testimonials from './components/Testimonials'; // Import the new component

function App() {
  const [, setPrices] = useAtom(pricesAtom);

  useEffect(() => {
    // Real-time listener for prices
    try {
      const unsubscribe = onSnapshot(collection(db, "prices"), (snapshot) => {
        const newPrices = {};
        snapshot.docs.forEach(doc => {
          newPrices[doc.id] = doc.data().price;
        });
        setPrices(newPrices);
      }, (error) => {
        console.error("Error fetching prices:", error);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Firebase initialization error or missing config:", e);
    }
  }, [setPrices]);

  return (
    <div className="min-h-screen flex flex-col font-body text-[#4A0404] bg-[#FFFDF7] overflow-x-hidden">
      <Hero />
      <ProductList />
      <Testimonials /> {/* Add Testimonials section */}
      <Footer />
      <WavingGirl />
    </div>
  );
}

export default App;
