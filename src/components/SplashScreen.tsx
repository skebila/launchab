
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    // Complete splash screen after 2.5 seconds
    const completeTimer = setTimeout(() => {
      setAnimate(false);
      
      // Allow fade out animation to complete before removing splash screen
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-launchab-navy to-[#1A3859] transition-opacity duration-500 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`transform transition-all duration-700 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Launchab<span className="text-launchab-orange">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Fast Websites. Real Results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
