
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const updateCounter = (time: number) => {
            const elapsedTime = time - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Use easing function for smoother animation
            const easedProgress = easeOutQuart(progress);
            const currentCount = Math.floor(easedProgress * end);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration]);
  
  // Easing function for smoother counter animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  return (
    <div ref={counterRef} className="font-bold text-4xl">
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
