import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Calendar, FileText, Activity } from 'lucide-react';
import labResearchImage from '@/assets/banner/banner_projects.jpg';
import SectionWrapper from '@/components/sections/SectionWrapper';


// Mock project data
const projectsData = [
  {
    id: 1,
    title: "The Net-Zero Carbon Emission Project (NCEP)",
    description: "The NCEP is a five-year project led by KNUST and funded by Yinson Production West Africa Limited, with regulatory support from the Petroleum Commission and international collaboration from New Mexico Institute of Mining and Technology and Universiti Teknologi PETRONAS. NCEP aims to deliver a comprehensive, data-driven assessment of Ghana's greenhouse gas emissions by harmonizing scattered datasets from multiple sectors and institutions into a unified, interactive database and map. The project will conduct both qualitative and quantitative GHG assessments, develop near-real-time predictive tools for emission monitoring and forecasting, and provide a detailed carbon intensity analysis of Ghana's oil and gas industry. By proposing targeted mitigation options through Life Cycle Assessment, NCEP supports Ghana's commitment to national and global climate goals, enabling more effective policy planning, resource allocation, and progress toward net-zero emissions.",
    image: labResearchImage,
    tags: ["Climate Action", "Data Analysis", "GHG Assessment"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  },
  {
    id: 2,
    title: (<>CO<sub>2</sub> Storage Resource Assessment Project (CO<sub>2</sub>SRAP)</>),
    description: (<>The CO<sub>2</sub>SRAP focuses on evaluating the potential for geological CO<sub>2</sub> storage in Ghana’s four major sedimentary basins: Tano-Cape Three Points, Saltpond, Accra-Keta, and Voltaian. Using machine learning-based multi-criteria analysis, the project aims to identify, screen, and rank geological formations suitable for carbon storage. Additionally, it seeks to develop a preliminary CO<sub>2</sub> storage database and a knowledge gap scorecard, providing actionable insights to guide further data mobilization and assessments. This initiative aligns with Ghana's climate goals and supports the sustainable deployment of Carbon Capture, Utilization, and Storage (CCUS) technologies to mitigate industrial emissions and drive the country toward achieving net-zero targets. Currently, the project has five (5) postgraduate students including two PhD students and three MPhil students and one research assistant. The project is supported by GNPC and the AGATE Project.</>),
    image: labResearchImage,
    tags: ["Carbon Capture", "Rock Weathering", "Agriculture"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  },
  {
    id: 3,
    title: "KNUST Net-Zero Emissions Project (KNEP)",
    description: "The KNUST Net-Zero Emissions Project (KNEP) aims to establish the Kwame Nkrumah University of Science and Technology (KNUST) as a living laboratory for climate solutions. This project involves conducting a comprehensive assessment of the university's carbon intensity, including emissions from all colleges, units, and facilities, in line with global GHG protocols. It also seeks to evaluate the carbon sink potential of KNUST’s natural forests and green environments. By leveraging the data collected, KNEP will develop a robust decarbonization plan to guide the university toward achieving net-zero emissions. The initiative emphasizes building local capacity for reliable Measurement, Reporting, and Verification (MRV) systems, which can be scaled to other institutions and industries in Ghana. This transformative project positions KNUST to lead climate action in the African subregion while enhancing sustainability reporting and contributing to the global “Race to Zero” movement. The project has three research assistants and supported by the Climate Compatible Growth.",
    image: labResearchImage,
    tags: ["Hydrogen Storage", "Rock Weathering", "Geological Assessment"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  },
  {
    id: 4,
    title: (<>Geological Hydrogen Storage Resource Assessment Project (GH<sub>2</sub>SRAP)</>),
    description: (<>The GH<sub>2</sub>SRAP is a groundbreaking initiative aimed at assessing the potential for geological hydrogen storage (GHS) in Ghana. This project focuses on analyzing the suitability of Ghana’s four major sedimentary basins—the Voltaian, Saltpond, Accra-Keta, and Tano-Cape Three Points and other geological facilities —for long-term hydrogen storage. GH<sub>2</sub>SRAP also emphasizes capacity building, training undergraduate students, and generating reliable data for future hydrogen storage initiatives. This project represents NCEL's commitment to advancing innovative, sustainable energy solutions that align with global decarbonization efforts and position Ghana as a leader in the emerging hydrogen economy. Currently, the project has one research assistant and supported by the Climate Compatible Growth (CCG).</>),
    image: labResearchImage,
    tags: ["Agriculture", "Clean Energy", "Geological Assessment"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  },
  {
    id: 5,
    title: (<>The Carbon Capture for Land Reclamation through Enhanced Rock Weathering (CCR-ERW)</>),
    description: (<>The CCR-ERW Project is an innovative initiative led by NCEL at KNUST, aiming to restore lands degraded by illegal mining in Ghana while sequestering atmospheric CO₂. The project will identify, characterize, and test silicate-rich mine tailings—especially basalt—for their potential to enhance soil health, increase crop yields, and capture carbon through accelerated rock weathering. Combining laboratory studies and pilot field trials, CCR-ERW will generate scientific evidence on the dual benefits of land reclamation and carbon sequestration, assess economic feasibility, and develop a scalable implementation framework. The project will provide a comprehensive database of viable ERW materials, policy and industry recommendations, and pathways for improved livelihoods and food security, contributing to Ghana’s climate mitigation commitments and sustainable development goals.</>),
    image: labResearchImage,
    tags: ["Rock Weathering", "Clean Energy", "Data Analysis"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  },
  {
    id: 6,
    title: (<>The Climate Risks to Offshore Oil and Gas Structures (CROOGS) </>),
    description: (<>The CROOGS Project at NCEL aims to assess and address the growing risks posed by climate change to Ghana’s offshore infrastructure, particularly Floating Production, Storage, and Offloading (FPSO) units in the Tano Cape Three Points Basin. Using an integrated, systems-based risk assessment framework—combining climate hazard modelling, engineering analysis, and economic impact evaluation—the project identifies and quantifies vulnerabilities of offshore assets to sea-level rise, extreme storms, and other climate hazards. CROOGS also explores criticality and cascading impacts, adaptation options, and policy recommendations to enhance the resilience of Ghana’s offshore energy sector. By leveraging both global and local data, and aligning with international standards, the project provides actionable insights for infrastructure planning, investment, and long-term sustainability in the face of escalating climate risks.</>),
    image: labResearchImage,
    tags: ["Hydrogen Storage", "Clean Energy", "Geological Assessment"],
    activities: [
      "GHG Data Collection and Harmonization",
      "Interactive Database Development",
      "Carbon Intensity Analysis",
      "Life Cycle Assessment Studies"
    ],
    upcomingEvents: [
      { date: "2025-03-15", title: "Project Kick-off Meeting" },
      { date: "2025-04-20", title: "Stakeholder Workshop" },
      { date: "2025-05-10", title: "First Quarterly Review" }
    ],
    publications: [
      { title: "Ghana's GHG Emission Baseline Study", year: "2024", type: "Research Paper" },
      { title: "Carbon Intensity Assessment Framework", year: "2024", type: "Technical Report" }
    ]
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  // Get all unique tags
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

  // Filter projects based on search term and selected tag
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === 'all' || project.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        title="Projects"
        // subtitle="Discover our ongoing research initiatives and climate action projects"
        backgroundImage={labResearchImage}
        altText="NCEL research laboratory showcasing ongoing projects"
      />

      <main className="py-12">
        <SectionWrapper>
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border border-border rounded-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedTag === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-sm"
                onClick={() => setSelectedTag('all')}
              >
                All Projects
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  className="cursor-pointer text-sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.title.toString()}
                        className="h-64 w-full object-cover rounded-xl md:h-full"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-sm text-foreground/90">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-xl md:text-3xl font-bold text-primary">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <Tabs defaultValue="activities" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="activities" className="flex items-center gap-1">
                              <Activity className="h-4 w-4" />
                              Activities
                            </TabsTrigger>
                            <TabsTrigger value="events" className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Events
                            </TabsTrigger>
                            <TabsTrigger value="publications" className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              Publications
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="activities" className="mt-4">
                            <ul className="space-y-2">
                              {project.activities.map((activity, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm font-medium text-foreground">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="events" className="mt-4">
                            <div className="space-y-3">
                              {project.upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                                  <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                                  <div>
                                    <p className="text-sm font-medium">{event.title}</p>
                                    <p className="text-xs text-foreground">{event.date}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="publications" className="mt-4">
                            <div className="space-y-3">
                              {project.publications.map((publication, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <FileText className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">{publication.title}</p>
                                    <div className="flex gap-2 mt-1">
                                      <Badge variant="outline" className="text-xs">
                                        {publication.year}
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        {publication.type}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your search criteria.</p>
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;