
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Users, Mail, BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Accueil', path: '/', icon: <Home className="w-5 h-5 mr-1" /> },
    { name: 'À propos', path: '/about', icon: <BookOpen className="w-5 h-5 mr-1" /> },
    { name: 'Activités', path: '/activities', icon: <Activity className="w-5 h-5 mr-1" /> },
    { name: 'Adhésion', path: '/membership', icon: <Users className="w-5 h-5 mr-1" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5 mr-1" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-2xl tracking-tight text-ceera-orange">CEERA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-ceera-orange font-medium'
                    : 'text-foreground hover:text-ceera-orange'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-ceera-orange"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden h-screen bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center p-3 rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'bg-secondary text-ceera-orange font-medium'
                    : 'hover:bg-secondary'
                }`}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
