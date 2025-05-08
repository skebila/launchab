
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Puzzle, TrendingUp } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-launchab-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-launchab-orange/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white">
              Fast Websites. <br />
              <span className="text-launchab-orange">Real Results.</span>
            </h1>
            <p className="subheading text-white/80 mt-6 max-w-2xl">
              Launchab builds sleek landing pages for local businesses — designed to generate calls, bookings, and real growth.
            </p>
            <div className="mt-10">
              <Link to="/#features" className="btn-primary mr-4">
                Start Your Launch
              </Link>
              <Link to="/about" className="text-white border border-white/30 font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-launchab-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-launchab-navy">
              We focus on what matters most
            </h2>
            <p className="subheading">
              Simple, focused websites built for local businesses that need real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speed Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Rocket className="h-7 w-7 text-launchab-orange" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3">Speed</h3>
              <p className="text-gray-600">
                We deliver your page within 48 hours. No endless meetings or revisions.
              </p>
            </div>

            {/* Simplicity Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Puzzle className="h-7 w-7 text-launchab-orange" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3">Simplicity</h3>
              <p className="text-gray-600">
                No fluff, no stress. One page. One goal. We focus on what drives results.
              </p>
            </div>

            {/* Growth Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-launchab-orange/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-launchab-orange" />
              </div>
              <h3 className="text-xl font-bold text-launchab-navy mb-3">Growth</h3>
              <p className="text-gray-600">
                Your phone rings more. That's our mission. We design for conversions, not awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg text-launchab-navy">
              Real Results for Real Businesses
            </h2>
            <p className="subheading">
              Don't take our word for it. Here's what our clients have to say.
            </p>
          </div>

          <div className="bg-launchab-light rounded-2xl shadow-md p-8 md:p-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="italic text-xl md:text-2xl text-gray-700 mb-8">
                "Coming soon: client testimonials from local businesses just like yours."
              </p>
              <div className="mt-6">
                <h4 className="font-bold text-launchab-navy">Future Client</h4>
                <p className="text-gray-600">Local Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-launchab-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Ready to Launch Your Business Online?
            </h2>
            <p className="subheading text-white/80 mb-8">
              Get a fast, effective website designed to bring in real business results.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Launch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
