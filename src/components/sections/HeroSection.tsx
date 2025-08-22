import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// Removed carousel in favor of crossfade background
import { useEffect, useState } from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import heroImage1 from '@/assets/banner/hero1.jpg';
import heroImage2 from '@/assets/banner/hero2.jpg';
import heroImage3 from '@/assets/banner/hero3.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out mt-16 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay to-professional/50" />
      
      {/* Content */}
      <SectionWrapper className='relative z-10 text-center max-w-6xl'>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Trusted Partner for{' '}
            <span className="text-white">
              Decarbonisation
            </span>{' '}
            and{' '}
            <span className="text-white">
              Climate Resilience Solutions
            </span>
          </h1>
          
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-strong"
          >
            <Link to="/projects">
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
      </SectionWrapper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to next section"
          className="cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-hero-text/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-hero-text/60 rounded-full mt-2 animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};