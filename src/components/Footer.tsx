
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ceera-dark text-white">
      <div className="container mx-auto pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-ceera-gold">CEERA</h3>
            <p className="text-gray-300 mb-4">
              Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou, unis pour la solidarité et le développement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ceera-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ceera-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-ceera-orange transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-ceera-orange transition-colors">À propos</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-ceera-orange transition-colors">Activités</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-ceera-orange transition-colors">Adhésion</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-ceera-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ceera-orange" />
                <span className="text-gray-300">Agnibilékrou, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-ceera-orange" />
                <span className="text-gray-300">contact@ceera.org</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-ceera-orange" />
                <span className="text-gray-300">+225 01 23 45 67</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CEERA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
