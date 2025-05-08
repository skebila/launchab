
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-launchab-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-launchab-navy mb-6">
              Made for Builders, Doers, <br />and Local Hustlers
            </h1>
            <p className="text-xl text-gray-600">
              We're not a fancy agency. We're builders like you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6">
                At Launchab, we believe local businesses are the backbone of every community.
              </p>
              
              <p className="text-lg mb-6">
                You don't need a 20-page website or a big ad agency.
              </p>
              
              <p className="text-lg mb-6 font-medium">
                You need one page.
              </p>

              <p className="text-lg mb-6">
                One page that looks good, loads fast, and gets the phone ringing.
              </p>
              
              <p className="text-lg mb-6">
                We specialize in lightning-fast, mobile-friendly landing pages that are built for one thing: results.
              </p>

              <p className="text-lg mb-6">
                Whether you're a contractor, a trainer, a landscaper, or a moving company — we build digital storefronts that get you more leads, more calls, and more customers.
              </p>

              <p className="text-lg font-medium">
                We move fast because business doesn't wait. Neither should you.
              </p>

              <div className="mt-12 p-6 bg-launchab-orange/10 rounded-2xl border border-launchab-orange/20">
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
              <a 
                href="https://forms.google.com/your-form-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Your Launch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
