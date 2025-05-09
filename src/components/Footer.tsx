
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-launchab-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Launchab<span className="text-launchab-orange">.</span>
            </Link>
            <p className="mt-3 text-white/70">
              Fast Websites. Real Results.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-white/70">
              Get in touch to learn how we can help your business launch.
            </p>
            <Link to="/contact" className="inline-block mt-3 text-launchab-orange hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} Launchab.</p>
          <p>For builders, doers, and local hustlers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
