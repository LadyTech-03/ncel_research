import { ReactNode } from 'react';

interface PageHeroProps {
  title?: string | ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  altText?: string;
  children?: ReactNode;
}

export const PageHero = ({ title, subtitle, backgroundImage, altText, children }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
      <div className="absolute inset-0">
        {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt={altText}
          className="w-full h-full object-cover"
        />
        )}
        {/* {(title || subtitle) && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        )} */}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {title && (
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {title.toString().toUpperCase()}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};