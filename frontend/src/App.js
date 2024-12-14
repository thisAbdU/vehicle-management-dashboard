import './App.css';
import Hero from './components/Hero';
import Listing from './components/Listing';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Listing></Listing>
    </div>
  );
}

export default App;