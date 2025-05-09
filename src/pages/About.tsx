import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    initScrollAnimations();
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const observers: IntersectionObserver[] = [];

  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .zoom-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach(el => observer.observe(el));
    observers.push(observer);
  };

  const handleStartLaunch = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-launchab-navy to-launchab-navy/90 dark:from-[#0A2540] dark:to-[#132D44]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-white fade-up">
              Made for Builders, Doers, <br />
              and Local Hustlers
            </h1>
            <p className="text-xl text-white/80 fade-up">
              We're not a fancy agency. We're builders like you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A2540]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl mb-6 fade-up">
                At Launchab, we build websites designed to grow your business — not just sit pretty.
              </p>

              <p className="text-lg mb-6 fade-up">
                Whether it's a single landing page or a full multi-page site, our focus is simple:
                create fast, modern websites that convert visitors into real customers.
              </p>

              <p className="text-lg mb-6 fade-up">
                We craft clean, mobile-first designs that are optimized to drive more calls, bookings,
                and inquiries — without the fluff.
              </p>

              <p className="text-lg mb-6 fade-up">
                From contractors to trainers, landscapers to creatives, we help local businesses show
                up online and stand out in their space.
              </p>

              <p className="text-lg font-medium fade-up">
                Business moves fast. Your website should too.
              </p>

              <div className="mt-12 p-6 bg-launchab-light rounded-2xl border border-launchab-orange/20 fade-up dark:bg-[#1B3A57] dark:border-launchab-orange/10">
                <h3 className="text-xl font-bold mb-3 text-launchab-navy dark:text-white">
                  Why choose Launchab?
                </h3>
                <p className="mb-0 text-gray-700 dark:text-gray-300">
                  Because we understand what local business owners need: a reliable online presence
                  that brings in business without the headache or expense of traditional web development.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center zoom-in">
              <button
                onClick={handleStartLaunch}
                className="btn-primary btn-enhanced text-lg px-8 py-4"
              >
                Start Your Launch
              </button>
            </div>

            {/* Stats Section */}
{/*             <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-up">
                <AnimatedCounter end={48} suffix="h" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Delivery Time</p>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '100ms' }}>
                <AnimatedCounter end={97} suffix="%" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Client Satisfaction</p>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '200ms' }}>
                <AnimatedCounter end={250} suffix="+" />
                <p className="mt-2 text-gray-700 dark:text-gray-300">Websites Launched</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
