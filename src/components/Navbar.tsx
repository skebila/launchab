
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleStartLaunch = () => {
    navigate('/contact');
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    // Projects page hidden from navigation
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-launchab-navy/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-bold ${scrolled || location.pathname !== '/' ? 'text-launchab-navy dark:text-white' : 'text-white'}`}>
              Launchab<span className="text-launchab-orange">.</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  scrolled || location.pathname !== '/' 
                    ? 'text-gray-800 hover:text-launchab-orange dark:text-white/90 dark:hover:text-launchab-orange' 
                    : 'text-white/90 hover:text-white'
                } font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleStartLaunch}
              className="btn-primary btn-enhanced"
            >
              Start Your Launch
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled || location.pathname !== '/' ? 'text-launchab-navy dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled || location.pathname !== '/' ? 'text-launchab-navy dark:text-white' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`fixed inset-0 bg-launchab-navy dark:bg-gray-900 z-40 transform transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white text-2xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={handleStartLaunch}
                className="btn-primary btn-enhanced"
              >
                Start Your Launch
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
