
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ExternalLink } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Tech Startup Landing Page",
    description: "Fast-loading landing page designed to capture leads for a tech startup.",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Local Restaurant Site",
    description: "Mobile-optimized website with online ordering capabilities for a local bistro.",
    category: "Business Site",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Fitness Coach Platform",
    description: "Responsive website with class scheduling and client testimonials.",
    category: "Service Business",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  },
  {
    id: 4,
    title: "Home Services Contractor",
    description: "Lead-generating website for a local plumbing and HVAC contractor.",
    category: "Service Business",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

const Projects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .zoom-in');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-launchab-navy text-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 fade-up">
              Our Projects
            </h1>
            <p className="text-xl text-white/80 fade-up">
              Websites that deliver real business results
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-16 text-center fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-launchab-light dark:bg-gray-800 mb-6">
              <TrendingUp className="h-10 w-10 text-launchab-orange" />
            </div>
            <h2 className="text-3xl font-bold text-launchab-navy dark:text-white mb-4">
              Building Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our focus is on creating websites that drive growth for local businesses.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="hover-card shadow-md dark:shadow-gray-800/30 rounded-2xl h-96 fade-up"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="hover-card-overlay">
                  <div className="hover-card-content">
                    <span className="text-launchab-orange text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {project.description}
                    </p>
                    <Link 
                      to="#" 
                      className="inline-flex items-center text-white bg-launchab-orange/90 hover:bg-launchab-orange px-4 py-2 rounded-lg transition-colors"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 zoom-in">
            <Link to="/contact" className="btn-primary btn-enhanced">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-launchab-light dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm fade-up">
              <AnimatedCounter end={98} suffix="%" />
              <p className="mt-3 text-gray-700 dark:text-gray-300">Mobile Optimized</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm fade-up" style={{animationDelay: "100ms"}}>
              <AnimatedCounter end={2} prefix="<" suffix="s" />
              <p className="mt-3 text-gray-700 dark:text-gray-300">Load Time</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm fade-up" style={{animationDelay: "200ms"}}>
              <AnimatedCounter end={40} prefix="+" suffix="%" />
              <p className="mt-3 text-gray-700 dark:text-gray-300">Conversion Boost</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Import the AnimatedCounter component
import AnimatedCounter from '../components/AnimatedCounter';

export default Projects;
