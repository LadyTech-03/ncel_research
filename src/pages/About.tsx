import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/ui/page-hero';
import aboutHeroImage from '@/assets/banner/banner_aboutus.jpg';
// import aboutHeroImage from '@/assets/banner/about_us.jpg';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/sections/SectionWrapper';


const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero 
        // title={"About Us"}
        // subtitle="Advancing Climate Action Through Decarbonisation & Climate Resilience"
        backgroundImage={aboutHeroImage}
        altText="About NCEL Research Lab"
        // titleClass="text-3xl md:text-4xl"
      />

      {/* Main Content */}
      <section className="py-16 bg-background">
        <SectionWrapper>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 supports-[backdrop-filter]:bg-card/30 backdrop-blur p-6 md:p-10">
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-1 gap-16 items-start">
            {/* Main Text */}
            <div className="space-y-8">
              {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Advancing Climate Action Through 
                <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent"> Decarbonisation & Climate Resilience</span>
              </h2> */}
              
              <div className="space-y-6 text-xl lg:text-2xl text-foreground leading-relaxed border-l-4 border-primary/40 pl-6">
                <p>
                  The Net-Zero Carbon Emission Lab (NCEL) at KNUST is committed to driving climate action through rigorous, science-based and data-driven solutions.
                </p>
                
                <p>
                  The Net-Zero Carbon Emission Lab (NCEL) at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, is a specialized research hub committed to advancing climate action through rigorous, science-based and data-driven solutions. Our work is anchored on two main pillars: Decarbonisation and Climate Resilience.
                </p>
                
                <p>
                  In decarbonisation, we provide comprehensive carbon intensity assessments, develop and support the implementation of net-zero strategies. Our research further covers advanced mitigation solutions, including carbon capture and storage (CCS), enhanced rock weathering (ERW), and underground hydrogen storage (UHS).
                </p>
                
                <p>
                  In climate resilience, we conduct climate risk assessments, develop integrated adaptation strategies, and deliver training, monitoring, and environmental impact assessment services to enhance organizational and community preparedness.
                </p>
              </div>
            </div>
            
            {/* Additional Content */}
            <div className="space-y-8">
              <div className="bg-card border rounded-2xl p-8 shadow-card border-l-4 border-primary/40 ">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Commitment</h3>
                </div>
                <div className="space-y-4 text-xl lg:text-2xl text-foreground">
                  <p>
                    NCEL collaborates with leading international and industry partners, delivering high-impact projects, capacity-building programs, entrepreneurship and thought leadership at major conferences and events.
                  </p>
                  <p>
                    We are committed to delivering practical, locally relevant solutions and fostering long-term sustainability for Ghana, Africa, and beyond.
                  </p>
                  <p>
                    We invite partners from academia, industry, and government to collaborate with us in driving climate leadership and sustainable development.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Vision</h3>
              </div>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                NCEL aims to be a globally recognized centre of excellence, driving data-driven decarbonisation through cutting-edge research, impactful training, entrepreneurship and strategic advisory support toward a sustainable low carbon future.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
              </div>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                To advance Ghana's transition to a low carbon future by generating high-quality emissions data, building local capacity, and delivering research-driven solutions that support industry, policy, and society in making informed, sustainable decisions.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default About;