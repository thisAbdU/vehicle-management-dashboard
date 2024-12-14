import React from 'react';
import Listing from './components/Listing';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AddCar from './components/AddCar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Listing />
        <AboutUs />
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Want to Sell Your Car?</h2>
            <AddCar></AddCar>
          </div>
        </section>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;