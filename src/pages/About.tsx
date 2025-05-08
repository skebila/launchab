
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
                Launchab was created for business owners who don't have time to waste. Whether you're a plumber, trainer, landscaper, or local service provider — you need a web presence that works.
              </p>
              
              <p className="text-lg mb-6">
                We specialize in lightning-fast, single-page websites that look great and convert visitors into paying clients. No complicated navigation, no excessive features — just a clean, professional page that helps potential customers contact you.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-launchab-navy">
                Our Philosophy
              </h2>
              
              <p className="text-lg mb-6">
                While most web agencies focus on selling you expensive, complex websites with features you'll never use, we take a different approach:
              </p>

              <ul className="space-y-3 list-disc pl-5 mb-10">
                <li className="text-lg">
                  <span className="font-medium">Focus on results</span> — Your website should generate calls and leads, not just look pretty
                </li>
                <li className="text-lg">
                  <span className="font-medium">Speed matters</span> — Both in how quickly we deliver and how fast your site loads for users
                </li>
                <li className="text-lg">
                  <span className="font-medium">Simplicity wins</span> — Clear calls to action and straightforward design beat flashy gimmicks
                </li>
              </ul>

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
              <Link to="/contact" className="btn-primary">
                Start Your Launch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
