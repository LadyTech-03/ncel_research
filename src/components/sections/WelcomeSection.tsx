import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/sections/SectionWrapper';

import drSokamaImage from '@/assets/team/dr-yen.jpg';

export const WelcomeSection = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-background to-muted">
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-32">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={drSokamaImage} 
                  alt="Dr. Yen Adams Sokama-Neuyam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 w-80 mx-auto lg:mx-0">
              <div className="bg-card border border-border rounded-xl p-2 shadow-card">
                <h3 className="font-bold text-md text-primary text-center">Dr. Yen Adams Sokama-Neuyam</h3>
                <p className="text-foreground text-lg text-center">Principal Investigator</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to {' '}
              <span className="text-primary">NCEL</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-2xl text-foreground leading-relaxed">
              <p>
                The Net-Zero Carbon Emission Lab (NCEL) is a specialized research hub at the Kwame Nkrumah University of Science and Technology (KNUST), Kumasi. At NCEL, we deliver data-driven, science-based solutions for effective decarbonization and climate resilience.
              </p>
              
              <p>
                As a specialized research hub, we work closely with local and international partners on impactful projects, deliver high-quality training, and share our expertise to drive evidence-based climate action.
              </p>
              
              <p>
                We invite you to collaborate with us as we work toward a sustainable future for Ghana, Africa, and beyond. We are your trusted partner for decarbonization and climate resilience solutions!
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start mt-8">
              <Button 
                size="lg"
                className="text-sm bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};