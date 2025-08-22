import { Card, CardContent } from '@/components/ui/card';
import { Microscope, Users, Lightbulb, BarChart3 } from 'lucide-react';
import SectionWrapper from '@/components/sections/SectionWrapper';


const pillars = [
  {
    id: 'research',
    logo: '/icons/research.png',
    icon: Microscope,
    title: 'Research',
    description: 'NCEL drives innovative, science-based research across all areas of climate action, with expertise in decarbonisation, carbon intensity assessment, net-zero strategy development, advanced emissions monitoring, carbon capture and storage (CCS), enhanced rock weathering (ERW), underground hydrogen storage (UHS), climate risk assessment, and adaptation planning. Our research is rooted in local realities but meets global standards, addressing both Ghanaian and international sustainability challenges.',
  },
  {
    id: 'capacity-building',
    logo: '/icons/capacity-building.png',
    icon: Users,
    title: 'Capacity Building',
    description: 'We deliver targeted training programmes for companies and institutions across a wide range of climate action themes, including carbon accounting, CDR technologies, emissions modelling and forecasting, net-zero strategy development, climate risk assessment, and climate resilience planning. NCEL also offers intensive postgraduate and undergraduate training through its research projects, equipping students with high-quality research skills and practical experience needed for leadership in the green economy.',
  },
  {
    id: 'entrepreneurship',
    logo: '/icons/entrepreneurship.png',
    icon: Lightbulb,
    title: 'Entrepreneurship',
    description: 'NCEL is committed to nurturing the next generation of green entrepreneurs. Our undergraduate and postgraduate projects are designed not only for academic excellence but also for real-world impact, with a strong focus on innovation and business incubation. We support the transformation of research outputs and thesis projects into climate-focused startups, laying the groundwork for new green enterprises to emerge from the lab.',
  },
  {
    id: 'consulting',
    logo: '/icons/consulting.png',
    icon: BarChart3,
    title: 'Consulting',
    description: 'NCEL provides expert consulting services to industry, government, and development partners, offering science-based solutions in decarbonisation, climate risk assessment, emissions management, climate adaptation, and sustainability strategy. Our consulting leverages rigorous research and local expertise to help clients achieve measurable progress toward their climate and sustainability goals.',
  },
];

export const PillarsSection = () => {
  return (
    <section className="mx-6 rounded-3xl py-12 bg-gradient-to-br from-professional to-primary-dark relative">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-48 translate-y-48 blur-3xl" />
      </div>

      <SectionWrapper className='relative'>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="lg:sticky lg:top-24 self-start z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-8">
              NCEL's Pillars
            </h2>
            
            <p className="text-xl lg:text-2xl text-primary-foreground leading-relaxed mb-0 md:mb-8">
              At NCEL, our work is anchored in pillars that drive climate innovation and sustainability. Through cutting-edge research, skill-building programs, entrepreneurial development, and expert consulting, we create science-based solutions tailored to local realities and global needs.
            </p>
          </div>
          
          {/* Pillars Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary-foreground/20" />
            <div className="space-y-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const Logo = pillar.logo;
                return (
                  <div key={pillar.title} className="relative pl-16">
                    {/* Timeline node */}
                    <div className="absolute -left-1 top-6">
                      <div className="w-14 h-14 rounded-full bg-primary-foreground ring-2 ring-primary-foreground/40 flex items-center justify-center shadow-sm">
                        {/* <Icon className="h-6 w-6 text-primary-foreground" /> */}
                        <img src={Logo} alt={`${pillar.title} logo`} className="h-12 w-12 object-contain" />
                      </div>
                    </div>
                    {/* Card */}
                    <Card id={pillar.id} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                            {pillar.title}
                          </h3>
                          {/* <span className="mt-1 text-sm font-medium text-primary-foreground/70">{String(index + 1).padStart(2, '0')}</span> */}
                        </div>
                        <p className="mt-3 text-xl md:text-lg text-primary-foreground/90 leading-relaxed">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};