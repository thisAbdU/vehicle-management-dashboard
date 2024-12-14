import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-700 hover:text-black transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-black transition-colors">About Us</Link></li>
            <li><Link to="/listings" className="text-gray-700 hover:text-black transition-colors">Car Listings</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-black transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="text-gray-700 hover:text-black transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-gray-700 hover:text-black transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="text-gray-700 hover:text-black transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;