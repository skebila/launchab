
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-launchab-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/80">
              We're building success stories. Portfolio coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-launchab-light mb-6">
                <TrendingUp className="h-10 w-10 text-launchab-orange" />
              </div>
              <h2 className="text-3xl font-bold text-launchab-navy mb-4">
                Building Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Our portfolio is under construction. Check back soon to see examples of our work.
              </p>
            </div>

            <Link to="/contact" className="btn-primary mt-8">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Added import to avoid build error
import { TrendingUp } from 'lucide-react';

export default Projects;
