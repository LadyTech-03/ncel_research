import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/ui/page-hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin, ExternalLink, Quote } from 'lucide-react';
import heroImage from '@/assets/banner/banner_team.jpg';
import fallbackImage from '@/assets/team/user.jpg';

import naaImage from '@/assets/team/advisory-board/opoku-agyeman.jpeg';
import aslamImage from '@/assets/team/advisory-board/aslam.jpeg';
import ingebretImage from '@/assets/team/advisory-board/ingebret.jpeg';
import robertImage from '@/assets/team/advisory-board/robert.jpeg';
import priscillaImage from '@/assets/team/advisory-board/priscilla.jpeg';
import robertSogbadjiImage from '@/assets/team/advisory-board/robertSogbadji.jpeg';
import danielImage from '@/assets/team/advisory-board/daniel.jpeg';
import ruthImage from '@/assets/team/advisory-board/ruth.jpeg';
import kwabenaImage from '@/assets/team/advisory-board/kwabena.jpeg';
import charlesImage from '@/assets/team/advisory-board/charles.jpeg';

interface Advisor {
  name: string;
  title?: string;
  organization?: string;
  image?: string;
  linkedin?: string;
  profile?: string;
  quote?: string;
  highlight?: boolean;
}

const advisors: Advisor[] = [
  {
    name: 'Naa Opoku-Agyeman',
    title: 'MD Yinson Production West Africa, Ghana',
    // organization: 'Global Energy Council',
    image: naaImage,
    // quote: 'Strategic vision turns research into real-world impact.',
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/naaopokuagyeman',
    // highlight: true,
  },
  {
    name: 'Dr. Muhammad Aslam Md Yusof',
    title: 'Professor at UTP Malaysia',
    image: aslamImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/muhammad-aslam-md-yusof-10860024',
  },
  {
    name: 'Prof. Ingebret Fjelde',
    title: 'Research Professor, NORCE Research, Norway',
    image: ingebretImage,
    profile: 'https://www.norceresearch.no/en/persons/ingebret-fjelde/547',
    linkedin: 'https://www.linkedin.com/in/ingebret-fjelde-193023ab',
  },
  {
    name: 'Prof. Robert Balch',
    title: 'Director, PRRC, NMT, USA.',
    image: robertImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/robert-balch-a9b4a819',
  },
  {
    name: 'Priscilla Antwi-Boasiako',
    title: 'Head Technology Transfer and Strategy at Petroleum Commission, Ghana',
    image: priscillaImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/priscilla-antwi-boasiako-11437220',
  },
  {
    name: 'Dr. Robert B . M . Sogbadji',
    title: 'Deputy Director, Nuclear and Alternative Energy at the Ministry of Energy and Green Transition',
    image: robertSogbadjiImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/robert-bright-mawuko-sogbadji-1752a534',
  },
  {
    name: 'Dr. Daniel Tutu Benefoh',
    title: 'Director at the Climate Change Unit of the Environmental Protection Authority, Ghana',
    image: danielImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/daniel-tutu-benefoh-b2492b50',
  },
  {
    name: 'Ruth Dzokoto-Kumashie',
    title: 'Administrative Officer in charge of General Administration at Office of Minister of state for Climate Change and Sustainability',
    image: ruthImage,
    // profile: 'https://example.com',
    linkedin: 'https://www.linkedin.com/in/ruth-dzokoto-kumashie-91a9b41a8',
  },
  {
    name: 'Prof. Kwabena Biritwum Nyarko',
    title: 'Provost College of Engineering, KNUST',
    image: kwabenaImage,
    profile: 'https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/5f4caca09f1c.html',
    linkedin: 'https://www.linkedin.com/in/kwabena-biritwum-nyarko-ba23b548',
  },
  {
    name: 'Dr. Charles Ofori Gyamfi',
    title: 'Policy Lead for Climate Change and Energy Transition at the Africa Centre for Energy Policy (ACEP)',
    image: charlesImage,
    profile: 'https://afripoli.org/projects/climate-finance/lead-researcher-ofori#:~:text=Charles%20is%20the%20Policy%20Lead,financing%20for%20a%20just%20transition.',
    // linkedin: 'https://www.linkedin.com',
  },
];

const AdvisorCard = ({ advisor }: { advisor: Advisor }) => (
  <Card className="group relative overflow-hidden border-border/60 hover:border-primary/40 transition-colors">
    <CardContent className="p-6">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="flex items-start gap-4">
        <Avatar className="w-20 h-20 flex-shrink-0 ring-2 ring-primary/10">
          <AvatarImage src={advisor.image} alt={advisor.name} />
          <AvatarFallback>
            <img src={fallbackImage} alt="Advisor" className="w-full h-full object-cover rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-foreground">{advisor.name}</h3>
            {advisor.highlight && (
              <Badge variant="secondary" className="text-xs">Featured</Badge>
            )}
          </div>
          <p className="text-muted-foreground">{advisor.title}{advisor.organization ? ` • ${advisor.organization}` : ''}</p>
          {(advisor.linkedin || advisor.profile) && (
            <div className="flex gap-3 mt-3">
              {advisor.profile && (
                <a href={advisor.profile} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {advisor.linkedin && (
                <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {advisor.quote && (
        <div className="mt-5 pl-4 border-l-2 border-primary/20">
          <p className="text-sm italic text-muted-foreground flex items-start gap-2">
            <Quote className="w-4 h-4 mt-0.5 text-primary/70" />
            {advisor.quote}
          </p>
        </div>
      )}
    </CardContent>
  </Card>
);

const AdvisoryBoard = () => {
  const featured = advisors.find((a) => a.highlight);
  const rest = advisors.filter((a) => !a.highlight);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      <Navigation />

      <PageHero title="Advisory Board" backgroundImage={heroImage} altText="Advisory Board" />

      <section className="py-10">
        <SectionWrapper>
          <div className="grid lg:grid-cols-1 gap-8 items-stretch">
            <div className="lg:col-span-1">
              <Card className="p-8 bg-card/70 backdrop-blur border-border shadow-card">
                <h2 className="text-3xl font-bold text-foreground mb-4">Guiding Excellence</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our Advisory Board comprises distinguished leaders from academia, industry, and policy. They provide strategic direction, ensure research rigor, and connect our outcomes to real-world impact.
                </p>
              </Card>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {featured && (
        <section className="py-6">
          <SectionWrapper>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Board Chair</h2>
            </div>
            <AdvisorCard advisor={featured} />
          </SectionWrapper>
        </section>
      )}

      <section className="py-12">
        <SectionWrapper>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Board Members</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((advisor, idx) => (
              <AdvisorCard key={idx} advisor={advisor} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default AdvisoryBoard;


