import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleStartLaunch = () => {
    navigate('/contact');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white/95 dark:bg-[#0A2540] backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1
              className={`text-2xl font-bold transition-colors ${
                scrolled || !isHomePage
                  ? 'text-launchab-navy dark:text-white'
                  : 'text-white'
              }`}
            >
              Launchab<span className="text-launchab-orange">.</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-800 hover:text-launchab-orange dark:text-white/90 dark:hover:text-launchab-orange'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={handleStartLaunch} className="btn-primary btn-enhanced">
              Start Your Launch
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X
                  className={`h-6 w-6 transition-colors ${
                    scrolled || !isHomePage ? 'text-launchab-navy dark:text-white' : 'text-white'
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 transition-colors ${
                    scrolled || !isHomePage ? 'text-launchab-navy dark:text-white' : 'text-white'
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <div
            className={`fixed inset-0 bg-[#0A2540] dark:bg-[#0A2540] z-40 transform transition-all duration-300 ease-in-out ${
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
              <button onClick={handleStartLaunch} className="btn-primary btn-enhanced">
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
