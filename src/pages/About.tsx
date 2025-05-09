
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
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
      {/* Hero Section - Updated with contrasting design */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-launchab-navy to-launchab-navy/90">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-white mb-6">
              Made for Builders, Doers, <br />and Local Hustlers
            </h1>
            <p className="text-xl text-white/80">
              We're not a fancy agency. We're builders like you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Updated with new content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6">
                At Launchab, we build websites designed to grow your business — not just sit pretty.
              </p>
              
              <p className="text-lg mb-6">
                Whether it's a single landing page or a full multi-page site, our focus is simple: create fast, modern websites that convert visitors into real customers.
              </p>
              
              <p className="text-lg mb-6">
                We craft clean, mobile-first designs that are optimized to drive more calls, bookings, and inquiries — without the fluff.
              </p>

              <p className="text-lg mb-6">
                From contractors to trainers, landscapers to creatives, we help local businesses show up online and stand out in their space.
              </p>

              <p className="text-lg font-medium">
                Business moves fast. Your website should too.
              </p>

              <div className="mt-12 p-6 bg-launchab-light rounded-2xl border border-launchab-orange/20">
                <h3 className="text-xl font-bold mb-3 text-launchab-navy">
                  Why choose Launchab?
                </h3>
                <p className="mb-0">
                  Because we understand what local business owners need: a reliable online presence that brings in business without the headache or expense of traditional web development.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <button 
                onClick={handleStartLaunch}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Launch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
