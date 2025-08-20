import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/ui/page-hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Linkedin } from 'lucide-react';
import aboutHeroImage from '@/assets/banner/banner_team.jpg';
import SectionWrapper from '@/components/sections/SectionWrapper';
// import { FaLinkedin } from "react-icons/fa";
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Images
import drSokamaImage from '@/assets/team/dr-yen.jpg';
import drWilliamImage from '@/assets/team/dr-william.jpg';
import drPrinceImage from '@/assets/team/dr-prince.jpeg';
import drPatrickImage from '@/assets/team/dr-patrick.jpg';
import drProsperImage from '@/assets/team/dr-prosper.jpg';
import drFranciscaImage from '@/assets/team/dr-francisca.jpeg';
import drDavidImage from '@/assets/team/dr-david.jpeg';
import drSarkodieImage from '@/assets/team/dr-sarkodie.jpeg';
import drEmmanuelaImage from '@/assets/team/dr-emmanuella.jpg';
import drErzuahImage from '@/assets/team/dr-erzuah.jpeg';
import drMartinaImage from '@/assets/team/dr-martina.jpeg';
import drCasparImage from '@/assets/team/dr-caspar.jpeg';
import drNancyImage from '@/assets/team/dr-nancy.jpeg';
import drStephenImage from '@/assets/team/dr-stephen.jpg';
import drJonathanImage from '@/assets/team/dr-jonathan.jpg';
import KwameImage from '@/assets/team/kwame.jpeg';
import DicksonImage from '@/assets/team/dickson.jpeg';
import DonkorImage from '@/assets/team/donkor.jpeg';
import JoshuaImage from '@/assets/team/joshua.jpeg';
import VictorImage from '@/assets/team/victor.jpeg';
import ProsperImage from '@/assets/team/prosper.jpeg';
import EmperorImage from '@/assets/team/emperor.jpeg';
import AndyImage from '@/assets/team/andy.jpeg';
import EdmondImage from '@/assets/team/edmond.jpeg';
import ChristabelImage from '@/assets/team/christabel.jpeg';
import IsaacImage from '@/assets/team/isaac.jpg';
// import AdwoaImage from '@/assets/team/adwoa.jpg';

import fallbackImage from '@/assets/team/user.jpg';


interface TeamMember {
  name: string;
  role?: string;
  image?: string;
  linkedin?: string;
  profile?: string;
}

const Teams = () => {
  // Sample team data - you can replace with real data
  const teamData = {
    coResearchers: [
      {
        name: "Dr. Prince Asilevi Junior",
        role: "GHG Emissions Inventorying",
        image: drPrinceImage,
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/9b35c71682a9.html"
      },
      {
        name: "Dr. Patrick Boakye",
        role: "Life Cycle Assessment (LCA)",
        image: drPatrickImage,
        linkedin: "https://www.linkedin.com/in/patrick-boakye-67bb9876",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/9ef15a96c443.html"
      },
      {
        name: "Dr. Prosper Akaba",
        role: "Stakeholder Engagement",
        image: drProsperImage,
        linkedin: "https://www.linkedin.com/in/dr-francisca-adoma-acheampong-98831171",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/2cfeef779b6f.html"
      },
      {
        name: "Dr. Francisca Adoma Acheampong",
        role: "Artificial Intelligence",
        image: drFranciscaImage,
        linkedin: "https://www.linkedin.com/in/francisca-adoma-acheampong-98831171",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/fb34c7d09958.html"
      },
      {
        name: "Dr. David Nartey  Obemah",
        role: "Greenhouse Gas Measurements",
        image: drDavidImage,
        linkedin: "https://www.linkedin.com/in/david-nartey-obemah-ph-d-32457119",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/7771ee4547bd.html"
      },
    ],
    coSupervisors: [
      {
        name: "Dr. Kwame Sarkodie ",
        image: drSarkodieImage,
        linkedin: "https://www.linkedin.com/in/kwame-sarkodie-ph-d-9b264585",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/dab01ca95f7f.html"
      },
      {
        name: "Dr. (Mrs.) Emmanuela Kwao-Boateng",
        image: drEmmanuelaImage,
        linkedin: "https://www.linkedin.com/in/emmanuela-kwao-boateng-phd-59640276",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/b3bc4a59cfa1.html"
      },
      {
        name: "Dr. Samuel Erzuah",
        image: drErzuahImage,
        linkedin: "https://www.linkedin.com/in/erzuah-samuel-ph-d-68a2837a",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/ddbb5e9281dd.html"
      },
      {
        name: "Dr. Martina Francisca Baidoo",
        image: drMartinaImage,
        linkedin: "https://www.linkedin.com/in/martina-f-baidoo-phd-27a20723",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/9e5ca1a97ff6.html"
      },
      {
        name: "Dr. Caspar Daniel Adenutsi",
        image: drCasparImage,
        linkedin: "https://www.linkedin.com/in/caspar-daniel-adenutsi-095896373",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/c175b657fffb.html"
      },
      {
        name: "Mrs. Nancy Anataba Kyorku Dzikunu-Bansah",
        image: drNancyImage,
        linkedin: "https://www.linkedin.com/in/nakyorku",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/ad3ede41c4d6.html"
      },
      {
        name: "Dr. Stephen Adjei",
        image: drStephenImage,
        linkedin: "https://www.linkedin.com/in/stephen-adjei-ph-d-457554135",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/51671bab9dae.html"
      },
      {
        name: "Dr. Jonathan Atuquaye Quaye",
        image: drJonathanImage,
        linkedin: "https://www.linkedin.com/in/jonathan-atuquaye-quaye-ph-d-854b5049",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/004ef285cd50.html"
      },
    ],
    postgraduateStudents: [
      {
        name: "Adwoa Sampongmaa Otchere",
        role: "MPhil Petroleum Engineering",
        // image: AdwoaImage,
        linkedin: "https://www.linkedin.com/in/sampongmaa-otchere-0746b6254"
      },
      {
        name: "Kwame Kwarteng Sarpong",
        role: "PhD Petroleum Engineering",
        image: KwameImage,
        linkedin: "https://www.linkedin.com/in/kwame-kwarteng-sarpong-5428301a",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/994e79bf5069.html"
      },
      {
        name: "Dickson Agyei",
        role: "MPhil Petroleum Engineering",
        image: DicksonImage,
        linkedin: "https://www.linkedin.com/in/dickson-agyei-jnr"
      },
      {
        name: "Williams  Donkor",
        role: "MPhil Petroleum Engineering",
        image: DonkorImage,
        linkedin: "https://www.linkedin.com/in/williams-donkor-77a504193/?originalSubdomain=gh"
      },
    ],
    researchAssistants: [
      {
        name: "Emperor Amedeka",
        image: EmperorImage,
        linkedin: "https://www.linkedin.com/in/amedeka-emperor-7978b9196"
      },
      {
        name: "Andy Ashie",
        image: AndyImage,
        linkedin: "https://www.linkedin.com/in/andy-ashie-profile"
      },
      {
        name: "Ankamah Edmond",
        image: EdmondImage,
        linkedin: "https://www.linkedin.com/in/ankamah-edmond-a17239213"
      },
      {
        name: "Christabel Boatemaa Kusi",
        image: ChristabelImage,
        linkedin: "https://www.linkedin.com/in/christabel-kusi-boatemaa"
      }
    ],
    researchFellows: [
      {
        name: "Joshua Nsiah Turkson",
        role: "UTP Malaysia",
        image: JoshuaImage,
        linkedin: "https://www.linkedin.com/in/joshua-nsiah-turkson-ab156a172"
      },
      {
        name: "Victor Darkwah Owusu",
        role: "UTP Malaysia",
        image: VictorImage,
        linkedin: "https://www.linkedin.com/in/victor-darkwah-owusu-294734177"
      },
      {
        name: "Franklin Baafi",
        role: "UTP Malaysia",
        // image: VictorImage,
        linkedin: "https://www.linkedin.com/in/franklin-baafi-75328b1b3"
      },
      {
        name: "Prosper Dadzie",
        role: "UTP Malaysia",
        image: ProsperImage,
        linkedin: "https://www.linkedin.com/in/prosperdadzie"
      }
    ],
    communications: [
      {
        name: "Mr. Isaac Marfo",
        image: IsaacImage,
        linkedin: "https://www.linkedin.com/in/isaac-marfo-ba41896b/",
        profile: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/456783375f83.html/"
      },
    ]
  };

  const TeamMember = ({ member }: { member: TeamMember }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-5">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>
              <img 
                src={fallbackImage} 
                alt="Fallback Image" 
                className="w-full h-full object-cover rounded-full" 
              />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
              <h3 className="text-base sm:text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-md text-muted-foreground mb-3">{member.role}</p>
            <div className="flex gap-2">
              {member.profile && (
                <a 
                  href={member.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialTab = queryParams.get('tab') ?? 'coResearchers';
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
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
      
      <PageHero 
        title="The Team"
        backgroundImage={aboutHeroImage}
        altText="NCEL Team"
      />

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-background">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Principal Investigator */}
            <Card className="p-10 bg-card border border-border shadow-card">
              <div className="flex items-start gap-8">
                <Avatar className="w-28 h-28 flex-shrink-0">
                  <AvatarImage src={drSokamaImage} alt="Dr. Yen Adams Sokama-Neuyam" />
                  <AvatarFallback>
                    <img 
                      src={fallbackImage} 
                      alt="Fallback Image" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-3">Dr. Yen Adams Sokama-Neuyam</h3>
                  <p className="text-foreground text-xl mb-4 font-semibold">Principal Investigator (PI)</p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                  Senior Lecturer and Head of the Department of Petroleum Engineering at Kwame Nkrumah University of Science and Technology (KNUST).
                  </p>
                  <div className="flex gap-4">
                  <a 
                    href="https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/1fcbe1f07bb4.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/yen-adams-sokama-neuyam-ph-d-79a7a1159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Co-Principal Investigator */}
            <Card className="p-10 bg-card border border-border shadow-card">
              <div className="flex items-start gap-8">
                <Avatar className="w-28 h-28 flex-shrink-0">
                  <AvatarImage src={drWilliamImage} alt="Prof. William Ampomah" />
                  <AvatarFallback>
                    <img 
                      src={fallbackImage} 
                      alt="Fallback Image" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-3">Prof. William Ampomah</h3>
                  <p className="text-foreground text-xl mb-4 font-semibold">Co-Principal Investigator</p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                  Directs research as head of the Reservoir Evaluation and Advanced Computational Technologies (REACT) Group.
                  </p>
                  <div className="flex gap-4"> 

                  <a 
                    href="https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/9bb7dc3ed2d3.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/williamampomah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </SectionWrapper>
      </section>

      {/* Team Tabs Section */}
      <section id="team-tabs" className="py-16 bg-muted">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Team Members</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="coResearchers" className="text-md md:text-lg">Co-Researchers</TabsTrigger>
              <TabsTrigger value="coSupervisors" className="text-md md:text-lg">Co-Supervisors</TabsTrigger>
              <TabsTrigger value="postgraduateStudents" className="text-md md:text-lg">Postgraduate Students</TabsTrigger>
              <TabsTrigger value="researchAssistants" className="text-md md:text-lg">Research Assistants</TabsTrigger>
              <TabsTrigger value="researchFellows" className="text-md md:text-lg">Research Fellows</TabsTrigger>
              <TabsTrigger value="communications" className="text-md md:text-lg">Communications</TabsTrigger>
            </TabsList>

            <TabsContent value="coResearchers" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.coResearchers.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coSupervisors" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.coSupervisors.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="postgraduateStudents" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.postgraduateStudents.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="researchAssistants" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.researchAssistants.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="researchFellows" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.researchFellows.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="communications" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData.communications.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </SectionWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;