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
  {
    year: 2023,
    text:
      'Quaye, J.A., Jiang, Z., Liu, C., Adenutsi C.D., Adjei S., Sarkodie K., Sokama-Neuyam Y.A., et al (2023). Understanding the role of bioturbation in modifying petrophysical properties: a case from well L5 of the third-member Paleocene Funing Formation (E1f3), Gaoyou Sag, Subei Basin, China. Arab J Geosci 16, 407.',
    link: 'https://doi.org/10.1007/s12517-023-11506-x',
  },
  {
    year: 2023,
    text:
      'Erzuah, S., Aggrey, W. N., Tetteh, J. T., Bodi, V., Adenutsi, C. D., Sokama-Neuyam, Y. A., ... & Biritwum, K. N. (2023). Zeta Potential Prediction of Dominant Sandstone Minerals Via Surface Complexation Modelling. Scientific African, e01721.',
    link: 'https://doi.org/10.1016/j.sciaf.2023.e01721',
  },
  {
    year: 2023,
    text:
      'Adenutsi C.D, Turkson J.N, Wang L, Zhao G, Zhang T, Quaye J.A., Erzuah S., and Sokama-Neuyam Y. A. (2023).Review on Potential Application of Saponin-Based Natural Surfactants for Green Chemical Enhanced Oil Recovery: Perspectives and Progresses. Energy & Fuels.',
    link: 'https://doi.org/10.1021/acs.energyfuels.3c00627',
  },
  {
    year: 2023,
    text:
      'Nsiah-Gyambibi, R., Sokama-Neuyam, Y.A., Boakye, P. et al (2023).Valorization of coal fly ash (CFA): a multi-industry review. Int. J. Environ. Sci. Technol.',
    link: 'https://doi.org/10.1007/s13762-023-04895-9',
  },
  {
    year: 2023,
    text:
      'Adjei, S., Elkaktatny, S., Sokama-Neuyam, Y. A., Sarkodie, K., & Quaye, J. A. (2023). Evaluation and remediation techniques for barite sagging: A review. Geoenergy Science and Engineering, 211731.',
    link: 'https://doi.org/10.1016/j.geoen.2023.211731',
  },
  {
    year: 2022,
    text:
      'Yusof M.A.M., Sokama-Neuyam, Y.A., Ibrahim M.A., Saaid I.M., Idris A.K., Mohamed M.A. (2022). Experimental study of CO2 injectivity impairment in sandstone due to salt precipitation and fines migration. Journal of Petroleum Exploration and Production Technology, SpringerLink (2022).',
    link: 'https://doi.org/10.1007/s13202-022-01453-w',
  },
  {
    year: 2022,
    text:
      'Boakye, P., Ohemeng-Boahen, G., Darkwah, L., Sokama-Neuyam, Y. A., Appiah-Effah, E., Oduro-Kwarteng, S., … Woo, S. H. (2022). Waste Biomass and Biomaterials Adsorbents for Wastewater Treatment. Green Energy and Environmental Technology, 2022, 1–25.',
    link: 'https://doi.org/10.5772/GEET.05',
  },
  {
    year: 2021,
    text:
      'Sokama-Neuyam, Y.A., Aggrey N. W., Boakye P., Sarkodie K, Oduro-Kwarteng S., Ursin J.(2021). The Effect of Temperature on CO2 Injectivity in Sandstone Reservoirs. Scientific African 2021 (15)',
    link: 'https://doi.org/10.1016/j.sciaf.2021.e01066',
  },
  {
    year: 2021,
    text:
      'Asilevi P.J., Boakye P., Oduro-Kwarteng S., Fei-Baffoe B., Sokama-Neuyam Y.A. (2021). Indoor Air Quality Improvement and Purification by Atmospheric Non-Thermal Plasma (NTP). Preprint.',
    link: 'https://doi.org/10.21203/rs.3.rs-763141/v1',
  },
  {
    year: 2020,
    text:
      'Sokama-Neuyam, Y.A., Boakye P., Aggrey N. W., Obeng N., Adu-Boahene F., Woo S. H., Ursin J.(2020). Theoretical Modeling of the Impact of Salt Precipitation on CO2 Storage Potential in Fractured Saline Reservoirs. ACS Omega 2020 5 (24), 14776-14785.',
    link: 'https://dx.doi.org/10.1021/acsomega.0c01687',
  },
  {
    year: 2020,
    text:
      'Sokama-Neuyam, Y.A., Adu-Boahene F., Boakye P., Aggrey N. W., Ursin J. Theoretical modeling of the effect of temperature on CO2 injectivity in deep saline formations. Greenhouse Gases: Science and Technology, 10: 4 - 14 (2020).',
    link: 'https://doi.org/10.1002/ghg.1951',
  },
  {
    year: 2019,
    text:
      'Sokama-Neuyam, Y.A., Ursin J., Boakye P (2019). Experimental Investigation of the Mechanisms of Salt Precipitation during CO2 Injection in Sandstone. C: Journal of Carbon Research, MDPI, C 2019, 5(1),4.',
    link: 'https://doi.org/10.3390/c5010004',
  },
  {
    year: 2018,
    text:
      'Sokama-Neuyam, Y.A., Ursin J (2018). The Coupled Eect of Salt Precipitation and Fines Mobilization on CO2 Injectivity in Sandstone. Greenhouse Gases: Science and Technology, 00: 1 - 13 (2018).',
    link: 'https://doi.org/10.1002/ghg.1817',
  },
  {
    year: 2017,
    text:
      'Sokama-Neuyam, Y.A., Ursin J., Ginting P., Timilsina B (2017). The Impact of Fines Mobilization on CO2 injectivity: An Experimental Study. International Journal of Greenhouse Gas Control, (65) 195-202.',
    link: 'https://doi.org/10.1016/j.ijggc.2017.08.019',
  },
  {
    year: 2017,
    text:
      'Sokama-Neuyam, Y.A., Forsetlkken, S.L, Lien, J, Ursin, J (2017). The Coupled Effect of Fines Mobilization and Salt Precipitation on CO2 Injectivity. Energies 2017, (10), 1125.',
    link: 'https://doi.org/10.3390/en10081125',
  },
  {
    year: 2017,
    text:
      'Sokama-Neuyam, Y.A., Ursin J (2016). Experimental and Theoretical Investigations of CO2 Injectivity. AGH Drilling, Oil and Gas Journal, (33) 245-258.',
    link: 'http://dx.doi.org/10.7494/drill.2016.33.2.245',
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
  {
    year: 2025,
    text:
      'Darkwah-Owusu, Victor, Turkson, Joshua Nsiah, Yusof, Muhammad Aslam Md, Tackie-Otoo, Bennet Nii, Sokama-Neuyam, Yen Adams, Fjelde, Ingebret, Gbillah, Louis Kwesi, and Daniel Asante Otchere. "Comparative Analysis of Parametric and Non-Parametric Machine Learning Models for CO2 Solubility Estimation." Paper presented at the International Petroleum Technology Conference, Kuala Lumpur, Malaysia, February 2025. doi:',
    link: 'https://doi.org/10.2523/IPTC-25029-MS',
  },
  {
    year: 2024,
    text:
      'Turkson, J. N., Yusof, M. A. M., Fjelde, I., Sokama-Neuyam, Y. A., Darkwah-Owusu, V., & Tackie-Otoo, B. N. (2024). Harnessing Ensemble Learning Techniques for Accurate Interfacial Tension Estimation in Aqueous CO2 Systems. In Society of Petroleum Engineers-GOTECH Conference 2024.',
    link: 'https://doi.org/10.2118/219176-MS',
  },
  {
    year: 2024,
    text:
      'Darkwah-Owusu, V., Yusof, M. A. M., Sokama-Neuyam, Y. A., Tackie-Otoo, B. N., Turkson, J. N., Radzali, I. B., ... & Fjelde, I. (2024, February). Experimental Investigation of the Impact of Low Salinity Water and Hydrochloric Acid Solutions as Halite Precipitation Reduction Agents for Enhancing CO2 Injectivity in Deep Saline Aquifers. In Offshore Technology Conference Asia (p. D031S022R003). OTC.',
    link: '',
  },
  {
    year: 2024,
    text:
      'Darkwah-Owusu, V., Md Yusof, M. A., Sokama-Neuyam, Y. A., Tackie-Otoo, B. N., Turkson, J. N., Kwon, S., ... & Fjelde, I. (2024, February). Investigating the Extent of the Impact of Acetic Acid as Halite Precipitation Reduction Agent for Enhancing CO2 Injectivity in Deep Saline Aquifers. In SPE International Conference and Exhibition on Formation Damage Control (p. D021S012R005). SPE.',
    link: '',
  },
  {
    year: 2022,
    text:
      `Mardhatillah, Mutia Kharunisa, Md Yusof, Muhammad Aslam, Sa'id, Alva Andhika, Mohammad Fuad, Iqmal Irsyad, Sokama Neuyam, Y. A., and Nur Asyraf Md Akhir. "Predictive Modelling of Carbon Dioxide Injectivity Using SVR-Hybrid." Paper presented at the Offshore Technology Conference Asia, Virtual and Kuala Lumpur, Malaysia, March 2022. doi:`,
    link: 'https://doi.org/10.4043/31472-MS',
  },
  {
    year: 2018,
    text:
      `Shaibu R, Sokama-Neuyam, Y.A., Ursin J (2018). A Theoretical Study of the Effect of Salt Precipitation on CO2 Injectivity. SPE International Conference and Exhibition on Formation Damage Control, 7-9 February, Lafayette, Louisiana, USA.`,
    link: '',
  },
  {
    year: 2017,
    text:
      `Sokama-Neuyam, Y.A., Ursin J (2017). Experimental Investigation of the Impact of Salt Precipitation on CO2 Injectivity. International Symposium of the Society of Core Analysts, 27-30 August, Vienna, Austria.`,
    link: '',
  },
  {
    year: 2015,
    text:
      `Sokama-Neuyam, Y.A., Ursin J (2015). CO2 Well Injectivity: Effect of Viscous Forces on Precipitated Minerals. International Petroleum Technology Conference, 6-9 December, Doha, Qatar.`,
    link: '',
  },
  {
    year: 2015,
    text:
      `Sokama-Neuyam, Y.A., Ursin J (2015). The Eect of Mineral Deposition on CO2 Well Injectivity. SPE EUROPEC Conference, 1-4 June, Madrid, Spain.`,
    link: '',
  },
  {
    year: 2015,
    text:
      `Fjelde I., Omekeh A. V., Sokama-Neuyam Y. A (2014). Low Salinity Water Flooding: Eect of Crude Oil Composition. SPE Improved Oil Recovery Symposium, 12-16 April, Tulsa, Oklahoma, USA.`,
    link: '',
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
  {
    year: 'March 2024',
    text:
      'Predictive Modelling of Ghana’s Energy Consumption and Corresponding Greenhouse Gas Emissions Towards a Net-zero Future. GhIE Annual General Meeting and Conference, Accra.',
  },
  {
    year: 'December 2023',
    text:
      'Leveraging Oil and Gas for a Just Transition Towards a Net-Zero Future, SPE Technical Lecture, Webinar.',
  },
  {
    year: 'November 2023',
    text:
      'Building a Robust Research Ecosystem to Drive Africa’s Transition to Net-Zero, A Pre COP 28 Technical Workshop, Accra.',
  },
  {
    year: 'August 2023',
    text:
      'Ghana’s Greenhouse Gas Emission: A Data-Driven Path to Net-Zero, KNUST Young Researchers’ Forum Research Café, Webinar.',
  },
  {
    year: 'May 2023',
    text:
      'Predictive Modelling of Greenhouse Gas Emissions in Ghana Towards a Net-Zero Future, KNUST Research Conference 2023, Kumasi.',
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
        title={"Publications"}
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
                className={`px-4 py-2 rounded-full text-md font-medium transition-colors border ${
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


