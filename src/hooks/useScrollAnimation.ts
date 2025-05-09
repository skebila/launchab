
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

/**
 * Hook to initialize scroll animations for elements with animation classes
 */
const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      root: null,
      rootMargin: '0px',
      ...options
    };
    
    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .zoom-in');
    
    // Create observer to detect when elements enter viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add appear class to trigger animation
          entry.target.classList.add('appear');
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);
    
    // Start observing elements
    animatedElements.forEach(el => observer.observe(el));
    
    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [options]);
};

export default useScrollAnimation;
