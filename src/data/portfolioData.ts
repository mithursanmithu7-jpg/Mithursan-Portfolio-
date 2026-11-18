export const SCHOLAR_PROFILE = 'https://scholar.google.com/citations?user=UL5QXjQAAAAJ&hl=en';
export const ORCID_URL = 'https://orcid.org/0009-0009-2423-4729';
export const LINKEDIN_URL = 'https://www.linkedin.com/feed/foryou/';
export const SSRN_URL = 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6895294';

export type RegionKey = 'uk' | 'de' | 'jp' | 'sl';

export interface RegionInfo {
  key: RegionKey;
  code: string;
  country: string;
  institution: string;
  period: string;
  shortDesc: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

export const REGIONS: RegionInfo[] = [
  {
    key: 'uk',
    code: 'UK',
    country: 'United Kingdom',
    institution: 'University of Sussex',
    period: '2026–2027',
    shortDesc: 'Commonwealth Master Scholar (MSc Entrepreneurship & Innovation)',
    title: 'United Kingdom — University of Sussex',
    subtitle: 'Commonwealth Master Scholar (2026/2027)',
    desc: 'Pursuing an MSc in Entrepreneurship and Innovation at the University of Sussex Business School on a fully funded UK Government Commonwealth Scholarship. Focusing on venture innovation, AI commercialization, and social impact.',
    tags: ['University of Sussex', 'Commonwealth Scholar', 'Young Researcher 2025 (LSDB UK)'],
  },
  {
    key: 'de',
    code: 'DE / EU',
    country: 'Germany & EU',
    institution: 'TUM / CIRCULATE / Erasmus+',
    period: '2025–Present',
    shortDesc: 'TUM Heilbronn & EU/BMZ/FAO/GIZ Junior Expert',
    title: 'Germany & European Union',
    subtitle: 'TUM Heilbronn · CIRCULATE · Erasmus+',
    desc: 'Reading MSc in Management and Digital Technology at Technical University of Munich (TUM Heilbronn). Serving as Junior Expert for the EU-funded CIRCULATE circular economy project (BMZ/Expertise France/FAO/GIZ) and Erasmus+ Higher Education Capacity Building (ERASMUS-EDU-2025-CBHE).',
    tags: ['TUM Heilbronn', 'EU CIRCULATE', 'Erasmus+ CBHE', 'EU INNOTAL Finalist'],
  },
  {
    key: 'jp',
    code: 'JP',
    country: 'Japan',
    institution: 'Saitama University & JICA',
    period: '2021–2024',
    shortDesc: "International Summer Program (Top 'S' Grades) & Youth Summit",
    title: 'Japan — Saitama University & JICA',
    subtitle: 'International Summer Program & Youth Innovation Summit',
    desc: 'Completed the International Summer Program at Saitama University (2022) earning top "S" grades in Global Agenda & International Development, Economic Strategies in Japan & Asia, and Animation Studies, plus "A" in Japanese. Completed the JICA Japan Modernization Course (2021) and served as Delegate at the Japan International Youth Innovation Summit (2024).',
    tags: ['Saitama University', 'JICA 2021', 'Japan Youth Summit 2024'],
  },
  {
    key: 'sl',
    code: 'LK / NZ',
    country: 'Sri Lanka & NZ',
    institution: 'Peradeniya / IFPRI / Massey',
    period: '2018–2026',
    shortDesc: 'AI Healthcare Grant, Lecturer, Central Bank, Massey Dairy Value Chains',
    title: 'Sri Lanka & Global South Partnerships',
    subtitle: 'University of Peradeniya · IFPRI · Massey University (NZ) · CBSL',
    desc: 'Graduated 2nd in batch (3.80/4.00) and served as Lecturer (Temporary) and Research Assistant on the multi-disciplinary AI Hospital Resource Management grant (Renal Care Unit). Contributed to international projects with IFPRI/WFP/Johns Hopkins, Massey University (New Zealand), UNICEF/Sarvodaya, and rotated across 6 departments at the Central Bank of Sri Lanka.',
    tags: ['Univ. of Peradeniya', 'AI Renal Care Grant', 'IFPRI / Johns Hopkins', 'Massey Univ. NZ', 'Central Bank of Sri Lanka'],
  },
];

export interface EducationItem {
  kicker: string;
  degree: string;
  institution: string;
  accent?: 'emerald' | 'blue' | 'purple' | 'amber' | 'neutral';
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    kicker: 'Fully Funded Commonwealth Scholar · In Progress',
    degree: 'MSc in Entrepreneurship and Innovation',
    institution: 'School of Business, University of Sussex, UK',
    accent: 'emerald',
  },
  {
    kicker: 'Digital & Management · In Progress',
    degree: 'MSc in Management and Digital Technology',
    institution: 'Technical University of Munich (TUM), Heilbronn',
    accent: 'blue',
  },
  {
    kicker: 'Postgraduate Research · In Progress',
    degree: 'MPhil in Economics',
    institution: 'Postgraduate Institute of Humanities & Social Science, Univ. of Peradeniya',
    accent: 'purple',
  },
  {
    kicker: '2nd in Batch of 162 · CGPA 3.80/4.00',
    degree: 'BBA (Hons) in Organizational Management (2019–2023)',
    institution: 'University of Peradeniya · Batch-top in majoring module; Best Paper Award Thesis',
    accent: 'amber',
  },
  {
    kicker: 'Professional Accounting · 2024',
    degree: 'Chartered Accountant of Sri Lanka – Corporate Level',
    institution: 'Institute of Chartered Accountants of Sri Lanka · Candidate',
    accent: 'neutral',
  },
  {
    kicker: '2022 & 2017 Distinctions',
    degree: 'Saitama Univ. Japan (2022) & GCE A/L District 3rd Rank (2017)',
    institution: "Grades 'S' (highest tier) in Global Agenda, Economic Strategies, Animation Studies; 3 A's in Commerce (Z-score 1.6009)",
    accent: 'neutral',
  },
];

export type ExperienceTabKey = 'research' | 'consulting' | 'teaching' | 'banking';

export interface ExperienceItem {
  role: string;
  period: string;
  organization: string;
  summary: string;
  isCurrent?: boolean;
}

export const EXPERIENCE_DATA: Record<ExperienceTabKey, ExperienceItem[]> = {
  research: [
    {
      role: 'Research Assistant — AI Hospital Resource System',
      period: 'Sep 2025 – Sep 2026',
      organization: 'University Research Council, University of Peradeniya',
      summary: 'Multi-disciplinary grant with Medicine, CS & Engineering deploying an AI resource distribution system in the Renal Care Unit and publishing in Q1 journals.',
      isCurrent: true,
    },
    {
      role: 'Research Assistant — Agro-Cooperative Commercialization',
      period: 'Aug 2024 – Mar 2025',
      organization: 'Faculty of Management, University of Peradeniya',
      summary: 'Supervised field research enumerators across Northern, Central, Western, and Southern provinces studying the Double Bottom Line approach of agricultural cooperatives.',
    },
    {
      role: 'Research Assistant — IFPRI (R5n Project)',
      period: 'Dec 2020 – Mar 2024',
      organization: 'International Food Policy Research Institute, WFP & Johns Hopkins',
      summary: 'Studied food environments and diet quality under the R5n climate-resilience and rural livelihood recovery initiative.',
    },
    {
      role: 'Research Assistant — Massey Univ. & Sarvodaya (UNICEF)',
      period: '2022 – Apr 2023',
      organization: 'Massey University (New Zealand) & Sarvodaya Sri Lanka',
      summary: 'Supported PhD research on Sustainable Farmer Development in Dairy Value Chains (Massey) and UNICEF-funded COVID-19 community prevention & response studies.',
    },
  ],
  consulting: [
    {
      role: 'Junior Expert — CIRCULATE Project',
      period: 'Oct 2025 – Present',
      organization: 'EU-funded, Co-funded by BMZ · Implemented by Expertise France, FAO & GIZ',
      summary: 'Project preparation and coordination for Circular Economy & Reduction of Plastics in the Food Sector across Colombo and Galle Districts.',
      isCurrent: true,
    },
    {
      role: 'Junior Expert — Erasmus+ Higher Education Project',
      period: '2025 – Present',
      organization: 'ERASMUS-EDU-2025-CBHE',
      summary: 'Contributing to capacity-building in higher education initiatives bridging European and South Asian academic innovation.',
      isCurrent: true,
    },
    {
      role: 'National Coordinating Secretary',
      period: 'Jun 2021 – Jul 2023',
      organization: 'United Nature International Peace (UNIP), Sri Lanka',
      summary: 'Formed national executive committee and district teams, leading societal and public health development initiatives throughout the COVID-19 pandemic.',
    },
  ],
  teaching: [
    {
      role: 'Lecturer (Temporary)',
      period: 'Sep 2023 – Sep 2025',
      organization: 'Dept. of Management Studies, University of Peradeniya',
      summary: 'Delivered lectures, discussions, and practicals for BBA (Hons) & BCom undergraduates; assisted curriculum development, workshops, and viva-voce evaluation panels.',
    },
    {
      role: 'Tutor Mentor & Guest Lecturer',
      period: 'Apr 2024 – Present',
      organization: 'CDCE (Peradeniya), Future Fusion 2024 & BIIES Centre 2025',
      summary: 'Led online/face-to-face lectures and Moodle mentoring for the BBA Online Degree Programme; served as Guest Lecturer ("Entrepreneurial Mindset") and BIIES workshop resource person.',
      isCurrent: true,
    },
  ],
  banking: [
    {
      role: 'Management Intern',
      period: 'Sep 2022 – Dec 2022',
      organization: 'Central Bank of Sri Lanka',
      summary: 'Rotated across 6 divisions: Internal Audit, Policy Review & Monitoring, EPF, Finance, Economic Research, and Bank Supervision.',
    },
    {
      role: 'Management Assistant / Counselor',
      period: 'May 2023 – Sep 2023',
      organization: 'International Academic Office, NIBM',
      summary: 'Managed international student transfer programmes and built partnerships with overseas universities.',
    },
    {
      role: 'Banking Intern',
      period: 'Jun 2018 – Dec 2018',
      organization: 'Bank of Ceylon',
      summary: 'Supported retail banking operations, customer inquiries, financial record maintenance, and supervised cash handling.',
    },
  ],
};

export type PublicationType = 'journal' | 'book' | 'award' | 'conference' | 'magazine';

export interface Publication {
  type: PublicationType;
  badge: string;
  authors: string;
  title: string;
  venue: string;
  url: string;
}

export const PUBLICATIONS: Publication[] = [
  // Peer-Reviewed Journals (2024–2026)
  {
    type: 'journal',
    badge: 'SAGE Journal · 2026',
    authors: 'Maheswaran, S., & Mithursan, A. (2026)',
    title: 'Cross-sectoral Knowledge Spillover for Social Innovation in an Apparel Value Chain in B2B Industry: A Perception of Incumbent Company in a Global South',
    venue: 'South Asian Journal of Business and Management Cases, 15(1), 18–36',
    url: 'https://doi.org/10.1177/22779779261425073',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2026',
    authors: 'Senevirathne, Y.Y., Mithursan, A., Kuruppu, K.A.D.T.D., & Maheswaran, S. (2026)',
    title: 'The Commercialisation Process of Co-operatives: A Study on the Double Bottom Line Approach of the Agricultural Co-operative Societies in Sri Lanka',
    venue: 'Colombo Journal of Multi-Disciplinary Research, 11(1), 24–54',
    url: 'https://doi.org/10.4038/cjmr.v11i1.93',
  },
  {
    type: 'journal',
    badge: 'International Journal · 2025',
    authors: 'Samaranayake, D.I.J., Jayarathna, H.G.D., & Mithursan, A. (2025)',
    title: 'Unlocking Employee Potential: Exploring the Influence of Identity Fusion and Pro-group Motivation on Productivity',
    venue: 'Journal of Business and Technology, 9(1), 1–16',
    url: 'https://doi.org/10.4038/jbt.v9i1.128',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2025',
    authors: 'Mithursan, A., Samarasuriya, S.R.M.S.D., & Samaranayake, D.I.J. (2025)',
    title: 'Entrepreneurial ecosystem services in cultural and creative industries: Evidence from the Watapath sector in a resource-constrained setting',
    venue: 'Journal of Multidisciplinary & Translational Research, 10(2)',
    url: 'https://doi.org/10.4038/jmtr.v10i2.50',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2025',
    authors: 'Samaranayake, D.I.J., Ariyarathna, U., Munasinghe, R., Fernando, T.S.S., Rathnayake, U., & Mithursan, A. (2025)',
    title: 'The Sooner, the Riskier: Temporal Psychological Distance and the Formation of Price Bubbles in Asset Markets',
    venue: 'Colombo Business Journal, 16(2), 38–60',
    url: 'https://doi.org/10.4038/cbj.v16i2.211',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2025',
    authors: 'Saheer, M.N.M., Mithursan, A., & Samaranayake, D.I.J. (2025)',
    title: 'Public Perception of Government Efforts against the Shadow Economy: Insights from Colombo District, Sri Lanka',
    venue: 'KDU Journal of Multidisciplinary Studies, 7(1)',
    url: 'https://doi.org/10.4038/kjms.v7i1.173',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2024',
    authors: 'Mithursan, A., Fernando, N.T.K.P., Samaranayake, D.I.J., & Maheswaran, S. (2024)',
    title: 'Towards a Paradigm Shift with Neuro-Entrepreneurship Education: A Lesson for the Developing Asian Nations',
    venue: 'KDU Journal of Multidisciplinary Studies, 6(1), 81–94',
    url: 'https://doi.org/10.4038/kjms.v6i1.112',
  },
  {
    type: 'journal',
    badge: 'Peer-Reviewed Journal · 2024',
    authors: 'Samaranayake, D.I.J., Maheswaran, S., & Mithursan, A. (2024)',
    title: 'Social Enterprise Intention of Non-STEM University Students: Experimental Evidence',
    venue: 'Journal of Business Research and Insights, 10(1)',
    url: 'https://doi.org/10.31357/jbri.v10i1.7550',
  },

  // Book Chapters
  {
    type: 'book',
    badge: 'Book Chapter · 2027',
    authors: 'Mithursan, A., & Maheswaran, S. (2027)',
    title: 'Sustainability of the Sri Lankan Tea Industry: A Systematic Review',
    venue: 'Human Intelligence 2.0, 129–136 (ISBN: 9781042025091)',
    url: '',
  },
  {
    type: 'book',
    badge: 'Routledge UK · 2026',
    authors: 'Maheswaran, S., Sukanya, K., & Mithursan, A. (2026)',
    title: 'Bricolage as a Survival Strategy: Embedded Agency of Regional Agro-based Small Businesses amidst Economic Crisis',
    venue: 'MSME Development in South and Southeast Asia, 265–280. Routledge, UK',
    url: '',
  },
  {
    type: 'book',
    badge: 'Routledge UK · 2026',
    authors: 'Mithursan, A., & Maheswaran, S. (2026)',
    title: 'From Recovery to Sustainability: The Perception of Impact Investment among MSMEs and Ecosystem Players in Sri Lanka',
    venue: 'MSME Development in South and Southeast Asia, 93–107. Routledge, UK',
    url: '',
  },

  // Best Paper Awards
  {
    type: 'award',
    badge: 'Best Paper Award · IEEE 2026',
    authors: 'Rajakaruna, P., Jayawardhana, N., Edirisinghe, L., Jayasinghe, U., Usoof, H., Piyarathne, N., Abeysekara, R., Mithursan, A., Patabendige, D.A., Krishnapradeep, S., & Maheswaran, S. (2026)',
    title: 'Ensemble Machine Learning-Based Clinical Decision Support System for Optimizing Hemodialysis Parameters in End-Stage Renal Disease Patients',
    venue: '9th IEEE International Research Conference on Smart Computing and Systems Engineering (SCSE), 1–6',
    url: '',
  },
  {
    type: 'award',
    badge: 'Best Paper Award · iPURSE 2025',
    authors: 'Senavirathne, Y.Y., Maheswaran, S., Mithursan, A., & Kuruppu, K.A.D.T.D. (2025)',
    title: 'The Commercialization Process of Co-Operatives: A Study on the Double Bottom Line Approach of the Agricultural Co-Operative Societies in Sri Lanka',
    venue: 'iPURSE Vol. 26, University of Peradeniya',
    url: 'https://doi.org/10.63967/AULT4918',
  },
  {
    type: 'award',
    badge: 'Gold Medal / Best Paper · CPM 2024',
    authors: 'Mithursan, A., & Nivetha, S. (2024)',
    title: "Sustainability and Future Resilience of Sri Lanka's Tea Industry: A Systematic Review Analysis",
    venue: "Chartered Professional Manager's (CPM) Management Research Forum (Full Paper)",
    url: '',
  },
  {
    type: 'award',
    badge: 'Best Paper Award · ICCM 2024',
    authors: 'Mithursan, A., Samaranayake, D.I.J., & Maheswaran, S. (2024)',
    title: "Social as an Epiphenomenon of Economics! Experimenting Young People's Social Enterprise Intention in a Developing Country",
    venue: '8th International Conference on Contemporary Management, University of Jaffna',
    url: '',
  },
  {
    type: 'award',
    badge: 'Best Presentation · RCBS 2024',
    authors: 'Ransha, R.R.P.H., Mithursan, A., & Samaranayake, D.I.J. (2024)',
    title: 'Exploring the Interplay Between Organizational Mission Drift, Motivation and Commitment of Emerging Social Workers',
    venue: '5th Research Conference on Business Studies (RCBS), University of Vavuniya',
    url: '',
  },
  {
    type: 'award',
    badge: 'Gold Medal · MURS 2023',
    authors: 'Mithursan, A., & Samaranayake, D.I.J. (2023)',
    title: 'Experimenting the role of Pro-sociality on the Effort and Engagement of Nursing professionals in Sri Lanka',
    venue: 'Management Undergraduate Research Symposium 2023',
    url: '',
  },

  // Conferences
  {
    type: 'conference',
    badge: 'ICBI / Taylor & Francis · 2025',
    authors: 'Mithursan, A., & Maheswaran, S. (2025)',
    title: 'Sustainability of the Sri Lankan Tea Industry: A Systematic Review',
    venue: 'International Conference on Business and Information (ICBI) — Full paper in Taylor and Francis',
    url: '',
  },
  {
    type: 'conference',
    badge: 'Univ. of Toronto · 2025',
    authors: 'Mithursan, A., & Maheswaran, S. (2025)',
    title: "Diaspora Entrepreneurship in a Post-War Setting: The Case of Sri Lanka's Northern and Eastern Provinces",
    venue: 'International Research Conference on the Development of the North and East of Sri Lanka, University of Toronto Scarborough',
    url: '',
  },
  {
    type: 'conference',
    badge: 'International Conference · 2025',
    authors: 'Mithursan, A. (2025)',
    title: 'Climate Governance and Environmental Resilience in South Asia: Participatory Adaptation, Climate Justice, and Regional Cooperation',
    venue: 'Transforming Public Administration and Management in South Asia',
    url: '',
  },
  {
    type: 'conference',
    badge: 'iPURSE · 2025',
    authors: 'Mithursan, A., & Maheswaran, S. (2025)',
    title: 'Predictive AI for Platform-Based Entrepreneurial Resilience in Crisis Situations: A Systematic Literature Review',
    venue: 'iPURSE Vol. 26, University of Peradeniya',
    url: 'https://doi.org/10.63967/AULT4918',
  },
  {
    type: 'conference',
    badge: 'TASME / Univ. of Toronto · 2025',
    authors: 'Mithursan, A., & Fernando, N.T.K.P. (2025)',
    title: 'Industry 4.0 as a Catalyst for Social Innovation in the Apparel Industry of Sri Lanka: A Systematic Literature Review',
    venue: '29th Annual TASME Conference, University of Toronto Scarborough',
    url: '',
  },
  {
    type: 'conference',
    badge: 'Univ. of Hyderabad · 2025',
    authors: 'Mithursan, A., & Maheswaran, S. (2025)',
    title: 'Knowledge Transfer for Social Innovation in Global Apparel Value Chain',
    venue: 'Global Management Development Programme on Sustainable Supply Chain, University of Hyderabad',
    url: '',
  },
  {
    type: 'conference',
    badge: 'Global Conf. Vietnam · 2025',
    authors: 'Maheswaran, S., Rathnayaka, R.M.U., Ananda Jayawickrama, J.M., & Mithursan, A. (2025)',
    title: 'Factory Scale, Spatial Distribution, and Product Specialization in Relation to Labor Productivity in the Global Apparel Industry: Evidence from Sri Lanka',
    venue: '2nd Global Conference on Sustainability in Economics, Business and Law, Vietnam (Full Paper)',
    url: '',
  },
  {
    type: 'conference',
    badge: 'IRCMF Colombo · 2024',
    authors: 'Ariyarathna, U., Samaranayake, D.I.J., Fernando, T.S.S., Munasinghe, R., Rathnayake, U., & Mithursan, A. (2024)',
    title: 'Psychological distance influences the impact of overconfidence on price bubbles: experimental evidence',
    venue: '19th International Research Conference on Management and Finance, University of Colombo (Full Paper)',
    url: '',
  },
  {
    type: 'conference',
    badge: 'SLFE · 2024',
    authors: 'Mithursan, A., Fernando, N.T.K.P., Samaranayake, D.I.J., & Maheswaran, S. (2024)',
    title: 'A Systematic Review on the Paradigm Shift in Neuroentrepreneurship Education across Developing Asian Countries: Visualization and Analysis',
    venue: 'Sri Lanka Forum of Entrepreneurship 2024 (Full Paper)',
    url: '',
  },
  {
    type: 'conference',
    badge: 'MPRA Working Paper · 2024',
    authors: 'Rila, R., Mithursan, A., & Samaranayake, D.I.J. (2024)',
    title: 'The Effectiveness of Green-Nudges in Promoting Water Conservation',
    venue: 'Munich Personal RePEc Archive (Full Paper)',
    url: '',
  },
  {
    type: 'conference',
    badge: 'Local Conference · 2024',
    authors: 'Mithursan, A., & Fernando, N.T.K.P. (2024)',
    title: 'A PRISMA Review on the Paradigm Shift in Neuroentrepreneurship Education across Asian Developing Countries: Visualization and Analysis',
    venue: 'Faculty Working Paper Series, University of Peradeniya (Extended Abstract)',
    url: '',
  },
  {
    type: 'conference',
    badge: 'PIERS · 2023',
    authors: 'Mithursan, A., & Samaranayake, D.I.J. (2023)',
    title: 'Experimenting the role of Pro-sociality on the Effort and Engagement of Nursing professionals in Sri Lanka',
    venue: '9th Peradeniya International Economic Research (PIERS) Conference',
    url: 'http://dx.doi.org/10.13140/RG.2.2.12176.58880',
  },
  {
    type: 'conference',
    badge: 'SLJSC · 2023',
    authors: 'Anushiya, K., Mithursan, A., & Zhang, H. (2023)',
    title: 'Impact of covid-19 on the marketing strategies of small and medium enterprises in Jaffna district',
    venue: 'Sri Lankan Japan Collaborative Research, Issue 8',
    url: 'https://site.pdn.ac.lk/centers/sljsc/con23.html',
  },
  {
    type: 'conference',
    badge: 'Eco Health Nexus · 2023',
    authors: 'Hathy, A., Mithursan, A., & Samaranayake, D.I.J. (2023)',
    title: 'Efficacy of Green Nudges on Resource and Energy Conservation — A Systematic Review',
    venue: 'International Conference on Eco Health Nexus',
    url: '',
  },
  {
    type: 'conference',
    badge: 'ICBM · 2023',
    authors: 'Mithursan, A., Ransha, R.R.P.H., & Samaranayake, D.I.J. (2023)',
    title: 'Experimenting the Impact of Organizational Mission Drift on Motivation and Effort of Nascent Social Workers in Sri Lanka',
    venue: '20th International Conference on Business Management (ICBM)',
    url: '',
  },

  // Magazine Publications
  {
    type: 'magazine',
    badge: 'Management Reader · 2025',
    authors: 'Mithursan, A. (2025)',
    title: 'The Management Mirage: A New Paradigm for Sustainable Leadership in the Age of Climate Urgency',
    venue: 'Management Reader, Vol. 1(1), University of Peradeniya',
    url: '',
  },
  {
    type: 'magazine',
    badge: 'Management Reader · 2024',
    authors: 'Mithursan, A. (2024)',
    title: 'Empowering Futures: Sri Lankan Undergraduates and the Entrepreneurial Frontier',
    venue: 'Management Reader, Vol. 1(1), University of Peradeniya',
    url: '',
  },
  {
    type: 'magazine',
    badge: 'Management Reader · 2023',
    authors: 'Mithursan, A. (2023)',
    title: 'Exploring the role of Entrepreneurship and Resource Utilization in Empowering Sri Lankan Undergraduates within an Innovative Economy',
    venue: 'Management Reader, Vol. 4, University of Peradeniya',
    url: '',
  },
  {
    type: 'magazine',
    badge: 'Management Reader · 2022',
    authors: 'Mithursan, A. (2022)',
    title: '"It takes two to tango" Can the monetary policy of the central bank of Sri Lanka alone control inflation?',
    venue: 'Management Reader, Vol. 3, University of Peradeniya',
    url: '',
  },
  {
    type: 'magazine',
    badge: 'AFELA Outlook · 2022',
    authors: 'Mithursan, A. (2022)',
    title: 'The Success story of women entrepreneur',
    venue: 'Agriculture Faculty of English Literary Association - AFELA Outlook',
    url: '',
  },
  {
    type: 'magazine',
    badge: 'Student Magazine · 2022',
    authors: 'Mithursan, A. (2022)',
    title: 'A Throwback to better time at university',
    venue: 'Peradeniya Management Student Magazine',
    url: '',
  },
];

export function getPublicationOpenUrl(pub: Publication): string {
  if (pub.url) return pub.url;
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(`${pub.title} Mithursan`)}`;
}

export const AWARDS_LIST: string[] = [
  'UK Commonwealth Master Scholarship (2026/2027)',
  'Best Paper Award, 9th IEEE SCSE Conference (2026)',
  'Young Researcher of the Year 2025 (London School of Digital Business)',
  'Best Paper Award, iPURSE 2025 (Univ. of Peradeniya)',
  'Gold Medal / Best Paper, CPM Research Forum 2024',
  'Best Research Paper Award, 8th ICCM 2024',
  'Best Paper Presentation Award, 5th RCBS 2024',
  'International Young Achiever 2024 (Global Leadership Summit)',
  'University Prize for Academic Excellence & Faculty Award 2023',
  'Gold Medal Best Paper, Undergrad Research Symposium 2023',
  'Batch Top in Major Module & 2nd Rank of 162 Students',
  "Dean's List: Highest GPA Scorer in Multiple Semesters",
  'Gold Medal, Innovative Business Idea Competition 2022 (BLII-TTO)',
  'Best Performer, Undergrad Internship Symposium 2023',
  'EU INNOTAL Finalist (4th of 30 teams) across India, Sri Lanka & Nepal',
];

export const RESEARCH_STACK: string[] = [
  'R Studio',
  'STATA',
  'SmartPLS (SEM)',
  'SPSS & Minitab',
  'Sage Business Cloud (94/100)',
  'QuickBooks / MYOB / E-tally',
  'Lean Six Sigma White Belt',
];
