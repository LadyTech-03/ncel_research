import { useMemo, useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { PageHero } from '@/components/ui/page-hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import aboutHeroImage from '@/assets/banner/banner_publications.jpg';

type Publication = {
  year: number | string;
  text: string;
  link?: string;
};

const journalPublications: Publication[] = [
  {
    year: 2025,
    text:
      "Turkson, J. N., Yusof, M. A. M., Darkwah-Owusu, V., Sokama-Neuyam, Y. A., Fjelde, I., Alakbari, F. S., & Tackie-Otoo, B. N. (2025). An interpretable machine-learning-driven tool (HyWEC) for hydrogen wettability estimation: Implications for underground hydrogen storage. International Journal of Hydrogen Energy, 155, 150256.",
    link: 'https://doi.org/10.1016/j.ijhydene.2025.150256.',
  },
  {
    year: 2025,
    text:
      'Sokama-Neuyam, Y. A., Amedeka, E., Quansah, D. A., Akowuah, J. O., Adjei, S., Boakye, P., ... & Kemausuor, F. (2025). Probabilistic Assessment of Carbon Intensity in Selected Oil and Gas Fields in Ghana. Greenhouse Gases: Science and Technology, e2361.',
    link: 'https://doi.org/10.1002/ghg.2361.',
  },
  {
    year: 2025,
    text:
      'Adjei, S., Takyi-Amponsem, D. Y., Quaye, J. A., Sokama-Neuyam, Y. A., Oleka, J. O., Asigbi, G. K., & Duodu, T. K. (2025). Automated hydraulic flow unit determination using FZI-Z-score probability, K-means clustering with autoencoders, and machine learning classification: A case study of the Subei Basin, China. Journal of Applied Geophysics, 105778.',
    link: 'https://doi.org/10.1016/j.jappgeo.2025.105778.',
  },
  {
    year: 2025,
    text:
      'Darkwah-Owusu, V., Yusof, M. A. M., Sokama-Neuyam, Y. A., Fjelde, I., Nguku, A., Turkson, J. N., ... & Alakbari, F. S. (2025). Integrated Geochemical Modeling and Experimental Study of Acid Treatments for Enhancing CO2 Injectivity: Implications for Geological CO2 Storage. Geoenergy Science and Engineering, 213793.',
    link: 'https://doi.org/10.1016/j.geoen.2025.213793.',
  },
  {
    year: 2025,
    text:
      'Turkson, J. N., Yusof, M. A. M., Fjelde, I., Sokama-Neuyam, Y. A., & Darkwah-Owusu, V. (2025). Estimating Oil Recovery Efficiency of Carbonated Water Injection with Supervised Machine Learning Paradigms and Implications for Uncertainty Analysis. Chemometrics and Intelligent Laboratory Systems, 105303',
    link: 'https://doi.org/10.1016/j.chemolab.2024.105303.',
  },
  {
    year: 2024,
    text:
      'Andersen, P. Ø., Wojnarowski, P., Sokama-Neuyam, Y. A., Le-Hussain, F., & Cai, J. (2024). Editorial of special issue “Advances in CCUS for the Natural Gas Industry”. Gas Science and Engineering, 205463',
    link: 'https://doi.org/10.1016/j.jgsce.2024.205463.',
  },
  {
    year: 2024,
    text:
      'Darkwah-Owusu, V., Yusof, M. A. M., Sokama-Neuyam, Y. A., Turkson, J. N., & Fjelde, I. (2024). A comprehensive review of remediation strategies for mitigating salt precipitation and enhancing CO2 injectivity during CO2 injection into saline aquifers. Science of The Total Environment, 175232',
    link: 'https://doi.org/10.1016/j.scitotenv.2024.175232.',
  },
  {
    year: 2024,
    text:
      'Darkwah-Owusu, V., Md Yusof, M. A., Sokama-Neuyam, Y. A., Turkson, J. N., & Fjelde, I. (2024). Assessment of Advanced Remediation Techniques for Enhanced CO2 Injectivity: Laboratory Investigations and Implications for Improved CO2 Flow in Saline Aquifers. Energy & Fuels.',
    link: 'https://doi.org/10.1021/acs.energyfuels.4c00949',
  },
  {
    year: 2023,
    text:
      'Turkson, J. N., Md Yusof, M. A., Fjelde, I., Sokama-Neuyam, Y. A., Darkwah-Owusu, V., Tackie-Otoo, B. N., ... & Kwon, S. (2024). Carbonated Water Injection for Enhanced Oil Recovery and CO2 Geosequestration in Different CO2 Repositories: A Review of Physicochemical Processes and Recent Advances. Energy & Fuels.',
    link: 'https://doi.org/10.1021/acs.energyfuels.3c04423',
  },
  {
    year: 2023,
    text:
      'Sokama-Neuyam, Y. A., Amezah, S. M., Adjei, S., Adenutsi, C. D., Erzuah, S., Quaye, J. A., ... & Sarkodie, K. (2023). Predictive modeling of energy?related greenhouse gas emissions in Ghana towards a net?zero future. Greenhouse Gases: Science and Technology.',
    link: 'https://doi.org/10.1002/ghg.2251',
  },
  {
    year: 2023,
    text:
      'Boakye, P., Nuagah, M. B., Oduro-Kwarteng, S., Appiah-Effah, E., Kanjua, J., Antwi, A. B., ... & Sokama-Neuyam, Y. A. (2023). Pyrolysis of municipal food waste: A sustainable potential approach for solid food waste management and organic crop fertilizer production. Sustainable Environment, 9(1), 2260057.',
    link: 'https://doi.org/10.1080/27658511.2023.2260057',
  },
  {
    year: 2023,
    text:
      'Sokama-Neuyam, Y.A., Yusof, M.A.M., Owusu, S.K. et al (2023). Experimental and theoretical investigation of the mechanisms of drying during CO2 injection into saline reservoirs. Sci Rep 13, 9155.',
    link: 'https://doi.org/10.1038/s41598-023-36419-3',
  },
];

const bookChapters: Publication[] = [
  {
    year: 2022,
    text:
      'Sokama-Neuyam, Y. A., Yusof, M. A., & Owusu, S. K. (2022). CO2 Injectivity in Deep Saline Formations: The Impact of Salt Precipitation and Fines Mobilization. In S. Sarvajayakesavalu, & K. Karthikeyan (Eds.), Carbon Sequestration. IntechOpen.',
    link: 'https://doi.org/10.5772/intechopen.104854',
  },
];

const conferencePublications: Publication[] = [
  {
    year: 2025,
    text:
      "Sokama-Neuyam, Y. A., Ankamah, E., Kusi, C. B., Dadzie, P., Baafi, F., Akowuah, J. O., & Kemausuor, F. (2025). Campus as a Living Lab (CALL): empowering university campuses to lead Africa's decarbonisation efforts. Journal of the Ghana Institution of Engineering, 25(1), 27-33.",
  },
  {
    year: 2025,
    text:
      'Turkson, Joshua Nsiah, Yusof, Muhammad Aslam Md, Tackie-Otoo, Bennet Nii, Darkwah-Owusu, Victor, Sokama-Neuyam, Yen Adams, and Ingebret Fjelde. "Application of Ensemble Learning Paradigms in Predicting Interfacial Tension of H2/Cushion Gas Systems and the Implications on Subsurface H2 Storage." Paper presented at the International Petroleum Technology Conference, Kuala Lumpur, Malaysia, February 2025.',
    link: 'https://doi.org/10.2523/IPTC-24934-MS',
  },
];

const invitedTalks: Publication[] = [
  {
    year: 'March 2025',
    text:
      "Campus as a Living Lab (CALL): Empowering Universities to Lead Africa's Decarbonisation Efforts. 56th Ghana Institution of Engineering (GhIE) Annual General Meeting and Conference, Accra Ghana.",
  },
  {
    year: 'February 2025',
    text:
      'The KNUST Net-Zero Emissions Project (KNEP). Third U.S.-Africa Frontiers of Science, Engineering, and Medicine Symposium, Kigali Rwanda.',
  },
  {
    year: 'January 2025',
    text:
      'Transitioning KNUST from Green Campus to a Green University: Progress and Prospects. TU Delft Global Lunch, Delft Netherlands.',
  },
  {
    year: 'December 2024',
    text:
      'Exploring Ghana’s Carbon Capture, Utilization, and Storage (CCUS) Potential: Empowering the Next Generation for Future Opportunities. CCG Inclusive Net-Zero SIG Workshop.',
  },
  {
    year: 'October 2024',
    text:
      'Modelling and Comparative Analysis of the Carbon Intensity of Selected Oil and Gas Fields in Ghana Towards a Net-Zero Future. Local Content Conference and Exhibitions, Takoradi.',
  },
];

type FilterKey = 'all' | 'journal' | 'conference' | 'book' | 'talks';

export const Publications = () => {
  const [filter, setFilter] = useState<FilterKey>('all');

  const sections = useMemo(() => {
    return {
      journal: { title: 'Journal Publications', items: journalPublications },
      book: { title: 'Book Chapters', items: bookChapters },
      conference: { title: 'Conference Publications', items: conferencePublications },
      talks: { title: 'Invited Talks', items: invitedTalks },
    };
  }, []);

  const filterDefs: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'journal', label: 'Journal Articles' },
    { key: 'conference', label: 'Conference Papers' },
    { key: 'book', label: 'Book Chapters' },
    { key: 'talks', label: 'Invited Talks' },
  ];

  const visibleSections = ((): Array<keyof typeof sections> => {
    if (filter === 'all') return ['journal', 'book', 'conference', 'talks'];
    if (filter in sections) return [filter as keyof typeof sections];
    return ['journal', 'book', 'conference', 'talks'];
  })();

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHero
        title={<>
          Publications
        </>}
        backgroundImage={aboutHeroImage}
        altText="Publications Hero"
      />

      <section className="py-16 bg-background">
        <SectionWrapper>
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filterDefs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === key
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-foreground border-border hover:bg-card/80'
                }`}
                aria-pressed={filter === key}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-14">
            {visibleSections.map((secKey) => {
              const section = sections[secKey];
              if (!section) return null;
              if (section.items.length === 0 && secKey === 'talks') {
                // Skip empty talks when not available
                return null;
              }
              return (
                <div key={secKey}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="h-1 w-16 bg-primary rounded mb-6" />
                  <div className="space-y-6">
                    {section.items.map((pub, idx) => (
                      <article key={idx} className="bg-card border border-border rounded-2xl shadow-sm p-6">
                        {secKey === 'talks' ? (
                          <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
                            <div className="text-primary font-bold md:text-lg">{pub.year}</div>
                            <p className="text-foreground leading-relaxed">{pub.text}</p>
                          </div>
                        ) : (
                          <>
                            <div className="text-primary text-lg font-bold mb-2">{pub.year}</div>
                            <p className="text-foreground text-lg leading-relaxed">
                              {pub.text}{' '}
                              {pub.link && (
                                <a
                                  href={pub.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline break-words"
                                >
                                  {pub.link}
                                </a>
                              )}
                            </p>
                          </>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;


