
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, Puzzle, TrendingUp } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleStartLaunch = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-launchab-navy overflow-hidden dark:navy-gradient">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-launchab-orange/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white">
              Fast Websites. <br />
              <span className="text-launchab-orange dark:text-launchab-orange-muted">Real Results.</span>
            </h1>
            <p className="subheading text-white/80 mt-6 max-w-2xl">
              Launchab builds sleek landing pages for local businesses — designed to generate calls, bookings, and real growth.
            </p>
            <div className="mt-10">
              <button 
                onClick={handleStartLaunch}
                className="btn-primary mr-4"
              >
                Start Your Launch
              </button>
              <Link to="/about" className="text-white border border-white/30 font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300 dark:border-white/20 dark:hover:bg-white/5">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-launchab-light dark:bg-launchab-navy-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-launchab-navy dark:text-white">
              We focus on what matters most
            </h2>
            <p className="subheading">
              Simple, focused websites built for local businesses that need real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speed Feature */}
            <div className="feature-card">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 dark:bg-launchab-orange/20">
                <Rocket className="h-7 w-7 text-launchab-orange dark:text-launchab-orange-muted" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3 dark:text-white">Speed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your page live in 48 hours or less.
              </p>
            </div>

            {/* Simplicity Feature */}
            <div className="feature-card">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 dark:bg-launchab-orange/20">
                <Puzzle className="h-7 w-7 text-launchab-orange dark:text-launchab-orange-muted" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3 dark:text-white">Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No complicated designs. One page. One clear goal: grow your business.
              </p>
            </div>

            {/* Growth Feature */}
            <div className="feature-card">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 dark:bg-launchab-orange/20">
                <TrendingUp className="h-7 w-7 text-launchab-orange dark:text-launchab-orange-muted" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3 dark:text-white">Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                More clicks, more calls, more customers. That's the Launchab promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Ready to Launch Your Business Online?
            </h2>
            <p className="subheading text-white/80 mb-8">
              Get a fast, effective website designed to bring in real business results.
            </p>
            <button 
              onClick={handleStartLaunch}
              className="btn-primary text-lg px-8 py-4 btn-enhanced"
            >
              Start Your Launch
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
