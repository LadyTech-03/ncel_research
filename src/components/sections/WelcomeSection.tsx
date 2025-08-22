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
              Welcome to the{' '}
              <span className="text-primary">Net-Zero Carbon Emission Lab</span>
            </h2>
            
            <div className="space-y-6 text-xl text-foreground leading-relaxed">
              <p>
                At NCEL, a specialized research hub at the Kwame Nkrumah University of Science and Technology (KNUST), we deliver data-driven, science-based solutions for effective decarbonisation and climate resilience.
              </p>
              
              <p>
                We work closely with leading international and industrial partners on impactful projects both locally and globally, deliver high-quality training programmes, and share our expertise at key events and conferences.
              </p>
              
              <p>
                We are always open to collaborations and invite you to join us as we drive evidence-based climate action for a sustainable future in Ghana, Africa, and beyond.
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