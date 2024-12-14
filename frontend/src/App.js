import './App.css';
import AboutUs from './components/AboutUs';
import AddCarBox from './components/AddCar';
import Hero from './components/Hero';
import Listing from './components/Listing';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Listing></Listing>
      <AboutUs></AboutUs>
      <AddCarBox></AddCarBox>
    </div>
  );
}

export default App;