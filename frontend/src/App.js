import { Contact } from 'lucide-react';
import './App.css';
import AboutUs from './components/AboutUs';
import AddCarBox from './components/AddCar';
import Hero from './components/Hero';
import Listing from './components/Listing';
import Navbar from './components/Navbar.tsx';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Listing></Listing>
      <AboutUs></AboutUs>

      <section className="bg-white-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Want to Sell Your Car?</h2>
          <AddCarBox />
        </div>
      </section>

     <ContactUs></ContactUs>
    </div>
  );
}

export default App;