import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { InterestsSection } from '@/components/sections/InterestsSection';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { CollaboratorsSection } from '@/components/sections/CollaboratorsSection';
import { Footer } from '@/components/sections/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo,  } from 'react';


const Index = () => {
  const location = useLocation();
  useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, [location.search, location.hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <InterestsSection />
      <PillarsSection/>
      <CollaboratorsSection />
      <Footer />
    </div>
  );
};

export default Index;
