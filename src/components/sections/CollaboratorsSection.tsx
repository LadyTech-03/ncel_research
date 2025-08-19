import SectionWrapper from '@/components/sections/SectionWrapper';

const collaborators = [
  { name: 'YINSON', logo: '/collaborators/1.png' },
  { name: 'UTP', logo: '/collaborators/2.png' },
  { name: 'NMIMT', logo: '/collaborators/3.png' },
  { name: 'GNPC', logo: '/collaborators/4.jpg' },
  { name: 'NORCE', logo: '/collaborators/5.png' },
  { name: 'PETROLEUM COMMISSION, GHANA', logo: '/collaborators/6.png' },
  { name: 'AGATE PROJECT', logo: '/collaborators/7.png' },
  { name: 'UNIVERSITY OF STAVANGER', logo: '/collaborators/8.png' },
  { name: 'COLLEGE OF ENGINEERING', logo: '/collaborators/9.png' },
];

export const CollaboratorsSection = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <SectionWrapper>
      <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Partners & Collaborators</h2>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of collaborators */}
            {collaborators.map((collaborator, index) => (
              <div 
                key={`first-${collaborator.name}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                style={{ animationPlayState: 'running' }}
                onMouseEnter={(e) => {
                  e.currentTarget.parentElement!.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.parentElement!.style.animationPlayState = 'running';
                }}
              >
                <img 
                  src={collaborator.logo} 
                  alt={collaborator.name}
                  className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {collaborators.map((collaborator, index) => (
              <div 
                key={`second-${collaborator.name}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.parentElement!.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.parentElement!.style.animationPlayState = 'running';
                }}
              >
                <img 
                  src={collaborator.logo} 
                  alt={collaborator.name}
                  className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};