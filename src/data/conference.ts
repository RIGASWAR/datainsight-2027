import chiefPatronPhoto from '../assets/committee/g_sir.png';
import patronPhoto from '../assets/committee/p_mam.png';
import convenerPhoto from '../assets/committee/v_sir.png';
import secSarathambekaiPhoto from '../assets/committee/s_mam.png';
import secVairamPhoto from '../assets/committee/v_mam.png';
import secHemapriyaPhoto from '../assets/committee/t_mam.png';

export interface NavItem {
  name: string;
  href: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  emojiUrl: string;
  fallbackIcon: string;
}

export interface ThemeCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  status: 'tbd' | 'confirmed';
  isHighlighted?: boolean;
}

export interface TrackItem {
  id: string;
  trackNumber: string;
  title: string;
  iconName: string;
  overview: string;
  topics: string;
}

export interface SpeakerItem {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  biography: string;
  isPlaceholder: boolean;
}

export interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  institution?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  title?: string;
  affiliation?: string;
  department?: string;
}

export interface CommitteeSecretary {
  name: string;
  role: string;
  designation: string;
  institution?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface CommitteeData {
  chiefPatron: CommitteeMember;
  patron: CommitteeMember;
  convener: CommitteeMember;
  organizingSecretaries: CommitteeSecretary[];
  additionalRoles: {
    category: string;
    status: string;
  }[];
}

export const CONFERENCE_DATA = {
  acronym: 'DATAINSIGHT 2027',
  fullTitle: 'International Conference on Multimodal Data Analytics, Intelligence and Security',
  tagline: 'Transforming Data into Intelligence, Securing the Future',
  targetLiveDate: '2027-12-16T09:00:00+05:30', // December 16, 2027, 9:00 AM IST
  datesDisplay: 'December 16–18, 2027',
  institution: {
    name: 'PSG College of Technology',
    accreditation: 'An ISO 9001 : 2015 Certified Institution',
    department: 'Department of Information Technology',
    location: 'PSG College of Technology, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu, 641004, India.',
    city: 'Coimbatore, Tamil Nadu, India',
  },
  navigation: [
    { name: 'Home', href: '#home', targetId: 'home' },
    { name: 'About PSGCT', href: '#about-psgct', targetId: 'about-psgct' },
    { name: 'About DATAINSIGHT', href: '#about', targetId: 'about' },
    { name: 'Scope', href: '#scope', targetId: 'scope' },
    { name: 'Speakers', href: '#speakers', targetId: 'speakers' },
    { name: 'Tracks', href: '#tracks', targetId: 'tracks' },
    { name: 'Publication', href: '#publication', targetId: 'publication' },
    { name: 'Important Dates', href: '#dates', targetId: 'dates' },
    { name: 'Paper Submission', href: '#submission', targetId: 'submission' },
    { name: 'Registration', href: '#registration', targetId: 'registration' },
    { name: 'Committee', href: '#committee', targetId: 'committee' },
    { name: 'Venue & Contact', href: '#venue', targetId: 'venue' },
    { name: 'Sponsors', href: '#sponsors', targetId: 'sponsors' },
  ],
  aboutPSGCT: {
    title: 'PSG College of Technology',
    subtitle: 'An ISO 9001 : 2015 Certified Autonomous Institution',
    established: '1951',
    founder: "PSG & Sons' Charities Trust",
    affiliation: 'Affiliated to Anna University, Chennai',
    accreditation: "Accredited with 'A+' Grade by NAAC",
    box1Heading: 'Pioneering Engineering & Research Stature',
    description:
      'PSG College of Technology, established in 1951 by the visionary philanthropists of PSG & Sons’ Charities Trust, is an autonomous engineering institution in Coimbatore, Tamil Nadu, India, recognized for its strong tradition of academic excellence, research, innovation, and industry institution collaboration. Over the decades, PSG Tech has fostered a rigorous academic and research environment, empowering students and researchers through transformative education and technological innovation across engineering, technology, applied sciences, and management. Its enduring commitment to research, industry engagement, and technological advancement continues to contribute to the development of skilled professionals and impactful solutions for society and industry.',
    box2Heading: 'Organizing Department',
    box2Subheading: 'Department of Information Technology',
    departmentIT:
      'Established in 1999, the Department of Information Technology is committed to developing competent engineers, researchers, and innovators with strong foundations in artificial intelligence, multimodal data systems, cyber security, network architectures, and software engineering. The department fosters an environment of academic excellence, research, innovation, and industry engagement, preparing students and researchers to address emerging technological challenges and develops intelligent, secure, and data-driven solutions for real-world applications.',
  },
  scope: {
    heading: 'Scope of the Conference',
    paragraph1:
      'DATAINSIGHT 2027 covers emerging research and innovations in multimodal data analytics, artificial intelligence, data science, knowledge discovery, cybersecurity, privacy, trustworthy intelligence, and data-driven computing architectures. The conference focuses on transforming diverse data—including text, images, video, audio, sensor, IoT, and structured and unstructured data—into meaningful information, knowledge, intelligence, and actionable insights while ensuring security, privacy, trust, and scalability.',
    paragraph2:
      'The conference scope is organized around four interconnected themes: DATA, covering multimodal data processing and analytics; INTELLIGENCE, covering AI, data science and knowledge discovery; SECURE, covering cybersecurity, privacy and trustworthy intelligence; and COMPUTE, covering computing architectures for data-driven systems. Research addressing these themes across healthcare, industry, finance, agriculture, education, smart cities, transportation, and other application domains is also encouraged.',
  },
  about: {
    paragraph1:
      'DATAINSIGHT 2027 – International Conference on Multimodal Data Analytics, Intelligence and Security is a premier international forum organized by the Department of Information Technology, PSG College of Technology, Coimbatore, India, bringing together researchers, academicians, industry professionals, technology experts, and practitioners to explore emerging developments in data-driven intelligent systems.',
    paragraph2:
      'The rapid growth of multimodal data from text, images, video, audio, sensors, IoT devices, and structured and unstructured sources, together with advances in Artificial Intelligence and large-scale computing, is transforming the way information is processed, interpreted, and used for decision-making. At the same time, ensuring the security, privacy, integrity, reliability, and trustworthiness of data and the intelligence derived from it has become increasingly important.',
    paragraph3:
      'DATAINSIGHT 2027 focuses on the complete journey from multimodal data to meaningful analytics, intelligence, actionable insights, and secure digital outcomes. The conference provides a platform for presenting innovative research, exchanging ideas, discussing emerging technologies, and fostering collaboration between academia and industry.',
    themeIntro:
      'The technical scope of the conference is organized around four interconnected themes:',
    themesList: [
      'DATA – Multimodal Data Processing and Analytics',
      'INTELLIGENCE – Artificial Intelligence, Data Science and Knowledge Discovery',
      'SECURE – Cybersecurity, Privacy and Trustworthy Intelligence',
      'COMPUTE – Computing Architectures for Data-Driven Systems',
    ],
    paragraph5:
      'The conference will feature keynote addresses, technical paper presentations, invited talks, panel discussions, tutorials, project exhibitions, and an ideathon, providing opportunities for meaningful interaction among researchers, students, and industry experts.',
    paragraph6:
      'Through its multidisciplinary focus, DATAINSIGHT 2027 aims to advance research and collaboration at the intersection of data, analytics, artificial intelligence, security, and computing, contributing to the development of intelligent, trustworthy, and scalable digital systems for real-world applications.',
  },
  importantDates: [
    {
      id: 'date-1',
      title: 'Paper Submission',
      date: '31 July 2027',
      status: 'confirmed',
    },
    {
      id: 'date-2',
      title: 'Acceptance Notification',
      date: '15 September 2027',
      status: 'confirmed',
    },
    {
      id: 'date-3',
      title: 'Camera-Ready Submission',
      date: '30 September 2027',
      status: 'confirmed',
    },
    {
      id: 'date-4',
      title: 'Early Registration',
      date: '15 October 2027',
      status: 'confirmed',
    },
    {
      id: 'date-5',
      title: 'Conference',
      date: '16–18 December 2027',
      status: 'confirmed',
      isHighlighted: true,
    },
  ],
  tracks: [
    {
      id: 'track-01',
      trackNumber: 'Track 1 — DATA',
      shortName: 'DATA',
      title: 'Multimodal Data Processing and Analytics',
      iconName: 'Network',
      overview: 'Multimodal Data Processing and Analytics',
      description: 'Multimodal Data Processing and Analytics',
      topics: 'Detailed topics and sub-themes: TO BE INCLUDED',
    },
    {
      id: 'track-02',
      trackNumber: 'Track 2 — INTELLIGENCE',
      shortName: 'INTELLIGENCE',
      title: 'Artificial Intelligence, Data Science and Knowledge Discovery',
      iconName: 'Sparkles',
      overview: 'Artificial Intelligence, Data Science and Knowledge Discovery',
      description: 'Artificial Intelligence, Data Science and Knowledge Discovery',
      topics: 'Detailed topics and sub-themes: TO BE INCLUDED',
    },
    {
      id: 'track-03',
      trackNumber: 'Track 3 — SECURE',
      shortName: 'SECURE',
      title: 'Cybersecurity, Privacy and Trustworthy Intelligence',
      iconName: 'ShieldCheck',
      overview: 'Cybersecurity, Privacy and Trustworthy Intelligence',
      description: 'Cybersecurity, Privacy and Trustworthy Intelligence',
      topics: 'Detailed topics and sub-themes: TO BE INCLUDED',
    },
    {
      id: 'track-04',
      trackNumber: 'Track 4 — COMPUTE',
      shortName: 'COMPUTE',
      title: 'Computing Architectures for Data-Driven Systems',
      iconName: 'Server',
      overview: 'Computing Architectures for Data-Driven Systems',
      description: 'Computing Architectures for Data-Driven Systems',
      topics: 'Detailed topics and sub-themes: TO BE INCLUDED',
    },
  ],
  themes: [
    {
      id: 'theme-1',
      number: '01',
      title: 'DATA',
      description: 'Multimodal Data Processing and Analytics',
      iconName: 'Layers',
      topics: ['Multimodal Analytics', 'Heterogeneous Data', 'Sensor Fusion'],
    },
    {
      id: 'theme-2',
      number: '02',
      title: 'INTELLIGENCE',
      description: 'Artificial Intelligence, Data Science and Knowledge Discovery',
      iconName: 'Cpu',
      topics: ['AI & Machine Learning', 'Data Science', 'Knowledge Discovery'],
    },
    {
      id: 'theme-3',
      number: '03',
      title: 'SECURE',
      description: 'Cybersecurity, Privacy and Trustworthy Intelligence',
      iconName: 'ShieldAlert',
      topics: ['Cybersecurity', 'Privacy Protection', 'Trustworthy AI'],
    },
    {
      id: 'theme-4',
      number: '04',
      title: 'COMPUTE',
      description: 'Computing Architectures for Data-Driven Systems',
      iconName: 'Eye',
      topics: ['Computing Systems', 'Edge-Cloud Architectures', 'HPC'],
    },
  ],
  highlights: [
    {
      id: 'hl-1',
      title: 'DATA',
      description: 'Multimodal Data Processing and Analytics',
      emojiUrl: '',
      fallbackIcon: 'Globe',
    },
    {
      id: 'hl-2',
      title: 'INTELLIGENCE',
      description: 'Artificial Intelligence, Data Science and Knowledge Discovery',
      emojiUrl: '',
      fallbackIcon: 'Bot',
    },
    {
      id: 'hl-3',
      title: 'SECURE',
      description: 'Cybersecurity, Privacy and Trustworthy Intelligence',
      emojiUrl: '',
      fallbackIcon: 'Lock',
    },
    {
      id: 'hl-4',
      title: 'COMPUTE',
      description: 'Computing Architectures for Data-Driven Systems',
      emojiUrl: '',
      fallbackIcon: 'BarChart3',
    },
  ],
  speakers: [
    {
      id: 'spk-1',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      biography: 'TO BE INCLUDED',
      isPlaceholder: true,
    },
    {
      id: 'spk-2',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      biography: 'TO BE INCLUDED',
      isPlaceholder: true,
    },
    {
      id: 'spk-3',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      biography: 'TO BE INCLUDED',
      isPlaceholder: true,
    },
    {
      id: 'spk-4',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      biography: 'TO BE INCLUDED',
      isPlaceholder: true,
    },
  ],
  callForPapers: {
    heading: 'Share Your Research. Shape the Future of Intelligent and Secure Data.',
    description:
      'Researchers, academicians, industry professionals and students are invited to contribute original research in the areas covered by DATAINSIGHT 2027.',
    cfpDocumentLink: 'TO BE INCLUDED',
    paperSubmissionLink: 'TO BE INCLUDED',
  },
  publication: {
    note: 'Publication and indexing details will be announced after official confirmation.',
    details: [
      { label: 'Publication Details', value: 'TO BE INCLUDED' },
      { label: 'Publisher', value: 'TO BE INCLUDED' },
      { label: 'Indexing', value: 'TO BE INCLUDED' },
      { label: 'Proceedings Information', value: 'TO BE INCLUDED' },
      { label: 'Publication Policy', value: 'TO BE INCLUDED' },
    ],
  },
  paperSubmission: {
    heading: 'Paper Submission',
    subtitle: 'Submission Guidelines, Format & Review Process',
    guidelines: 'Authors are invited to submit original, high-quality, and previously unpublished research papers that are not under review elsewhere. Detailed guidelines: TO BE INCLUDED',
    format: 'All submissions must strictly adhere to the official conference paper template. Formatting templates (Word and LaTeX): TO BE INCLUDED',
    reviewProcess: 'DATAINSIGHT 2027 follows a rigorous double-blind peer review process conducted by the International Technical Program Committee.',
    submissionPlatform: 'Submission Platform: TO BE INCLUDED',
    submissionLink: 'TO BE INCLUDED',
    instructions: [
      { title: 'Originality', desc: 'Papers must present novel theoretical or experimental contributions.' },
      { title: 'Plagiarism Policy', desc: 'Submissions must adhere strictly to academic anti-plagiarism standards.' },
      { title: 'Double-Blind Review', desc: 'Manuscripts must be fully anonymized prior to submission.' },
      { title: 'Camera-Ready Compliance', desc: 'Accepted papers must satisfy all publication formatting guidelines.' },
    ],
  },
  registration: {
    heading: 'Registration Details',
    subtitle: 'Conference Registration & Delegate Categories',
    categories: [
      { category: 'Indian Delegates — Student / Research Scholar', fee: 'TO BE INCLUDED', details: 'Full conference access, technical sessions & kit' },
      { category: 'Indian Delegates — Faculty / Academician', fee: 'TO BE INCLUDED', details: 'Full conference access, presentation slot & kit' },
      { category: 'Indian Delegates — Industry Professional', fee: 'TO BE INCLUDED', details: 'Full conference access & corporate networking' },
      { category: 'International Delegates — Student / Scholar', fee: 'TO BE INCLUDED', details: 'Full access, international presentation & kit' },
      { category: 'International Delegates — Faculty / Industry', fee: 'TO BE INCLUDED', details: 'Full access, international presentation & kit' },
    ],
    payment: {
      paymentType: 'Internet Banking',
      accountNumber: 'TO BE INCLUDED',
      beneficiaryName: 'TO BE INCLUDED',
      bankName: 'TO BE INCLUDED',
      accountType: 'TO BE INCLUDED',
      ifscCode: 'TO BE INCLUDED',
      swiftCode: 'TO BE INCLUDED',
      paymentAddress: 'TO BE INCLUDED',
    },
    notes: 'Registration includes entry to all technical tracks, keynote sessions, conference kit, proceedings, and delegate certification. Official registration link and payment gateway: TO BE INCLUDED',
  },
  expertOpinions: [
    {
      id: 'opinion-1',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      quote: 'TO BE INCLUDED',
      image: 'TO BE INCLUDED',
    },
    {
      id: 'opinion-2',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      quote: 'TO BE INCLUDED',
      image: 'TO BE INCLUDED',
    },
    {
      id: 'opinion-3',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      quote: 'TO BE INCLUDED',
      image: 'TO BE INCLUDED',
    },
    {
      id: 'opinion-4',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      quote: 'TO BE INCLUDED',
      image: 'TO BE INCLUDED',
    },
    {
      id: 'opinion-5',
      name: 'TO BE INCLUDED',
      designation: 'TO BE INCLUDED',
      institution: 'TO BE INCLUDED',
      country: 'TO BE INCLUDED',
      quote: 'TO BE INCLUDED',
      image: 'TO BE INCLUDED',
    },
  ],
  events: [
    {
      id: 'event-1',
      number: '01',
      title: 'Pre-Conference Workshops',
      category: 'Technical Workshop',
      schedule: 'TO BE ANNOUNCED',
      description: 'Hands-on technical masterclasses covering multimodal deep learning frameworks, privacy computing, and real-time sensor streams.',
      status: 'TO BE ANNOUNCED',
    },
    {
      id: 'event-2',
      number: '02',
      title: 'Keynote Addresses',
      category: 'Plenary Sessions',
      schedule: 'TO BE ANNOUNCED',
      description: 'Visionary lectures by internationally renowned academicians and pioneers at the forefront of multimodal data and intelligent security.',
      status: 'TO BE ANNOUNCED',
    },
    {
      id: 'event-3',
      number: '03',
      title: 'Panel Discussions',
      category: 'Expert Dialogue',
      schedule: 'TO BE ANNOUNCED',
      description: 'Interactive debates bridging academic researchers and industry leaders on ethical AI, data governance, and trustworthy architectures.',
      status: 'TO BE ANNOUNCED',
    },
    {
      id: 'event-4',
      number: '04',
      title: 'Project & Innovation Expo',
      category: 'Research Prototyping',
      schedule: 'TO BE ANNOUNCED',
      description: 'Exhibition of cutting-edge research prototypes, industrial solutions, and experimental multimodal systems.',
      status: 'TO BE ANNOUNCED',
    },
    {
      id: 'event-5',
      number: '05',
      title: 'Paper Presentations',
      category: 'Technical Tracks',
      schedule: 'TO BE ANNOUNCED',
      description: 'Oral and poster sessions featuring peer-reviewed research papers across the 5 official DATAINSIGHT 2027 tracks.',
      status: 'TO BE ANNOUNCED',
    },
  ],
  sponsors: [
    { id: 'sponsor-1', label: 'SPONSOR 1', status: 'TO BE ANNOUNCED' },
    { id: 'sponsor-2', label: 'SPONSOR 2', status: 'TO BE ANNOUNCED' },
    { id: 'sponsor-3', label: 'SPONSOR 3', status: 'TO BE ANNOUNCED' },
    { id: 'sponsor-4', label: 'SPONSOR 4', status: 'TO BE ANNOUNCED' },
  ],
  committee: {
    chiefPatron: {
      name: 'Shri. L. Gopalakrishnan',
      role: 'Chief Patron',
      title: 'Chief Patron',
      designation: "Managing Trustee, PSG & Sons' Charities",
      affiliation: "Managing Trustee, PSG & Sons' Charities",
      institution: 'PSG College of Technology, Coimbatore',
      image: chiefPatronPhoto,
      imageAlt: 'Photograph of Shri. L. Gopalakrishnan, Chief Patron',
      objectPosition: '53% 20%',
    },
    patron: {
      name: 'Dr. G. Thilagavathi',
      role: 'Patron',
      title: 'Patron',
      designation: 'Principal',
      affiliation: 'Principal, PSG College of Technology',
      institution: 'PSG College of Technology',
      image: patronPhoto,
      imageAlt: 'Photograph of Dr. G. Thilagavathi, Patron',
      objectPosition: '48% 22%',
    },
    convener: {
      name: 'Dr. B. Vinoth Kumar',
      role: 'Convener',
      title: 'Convener',
      designation: 'Professor and Head',
      department: 'Department of Information Technology',
      institution: 'Department of Information Technology, PSG College of Technology',
      image: convenerPhoto,
      imageAlt: 'Photograph of Dr. B. Vinoth Kumar, Convener',
      objectPosition: 'center',
    },
    organizingSecretaries: [
      {
        name: 'Dr. S. Sarathambekai',
        role: 'Organizing Secretary',
        designation: 'Organizing Secretary',
        institution: 'Dept. of Information Technology, PSG College of Technology',
        image: secSarathambekaiPhoto,
        imageAlt: 'Photograph of Dr. S. Sarathambekai, Organizing Secretary',
        objectPosition: 'center',
      },
      {
        name: 'Dr. T. Vairam',
        role: 'Organizing Secretary',
        designation: 'Organizing Secretary',
        institution: 'Dept. of Information Technology, PSG College of Technology',
        image: secVairamPhoto,
        imageAlt: 'Photograph of Dr. T. Vairam, Organizing Secretary',
        objectPosition: 'center',
      },
      {
        name: 'Dr. N. Hemapriya',
        role: 'Organizing Secretary',
        designation: 'Organizing Secretary',
        institution: 'Dept. of Information Technology, PSG College of Technology',
        image: secHemapriyaPhoto,
        imageAlt: 'Photograph of Dr. N. Hemapriya, Organizing Secretary',
        objectPosition: 'center',
      },
    ],
  },
  venue: {
    institution: 'PSG College of Technology',
    department: 'Department of Information Technology',
    area: 'Peelamedu',
    city: 'Coimbatore',
    pincode: '641004',
    state: 'Tamil Nadu',
    country: 'India',
    address: 'PSG College of Technology, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu, 641004, India.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=PSG+College+of+Technology,+Avinashi+Road,+Peelamedu,+Coimbatore,+Tamil+Nadu+641004,+India',
    airport: {
      name: 'Coimbatore International Airport (CJB)',
      distance: 'Approximately 5 km',
      travelTime: 'Approximately 15–20 minutes by road',
      description: 'Coimbatore International Airport is the closest airport to PSG College of Technology. The campus is approximately 5 km from the airport, making it convenient for delegates arriving by air.',
      transitOptions: ['App-based cabs', 'Airport taxis', 'Auto-rickshaws'],
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Coimbatore+International+Airport&destination=PSG+College+of+Technology,+Avinashi+Road,+Peelamedu,+Coimbatore',
    },
    railway: {
      name: 'Coimbatore Junction',
      distance: 'Approximately 8 km',
      travelTime: 'Approximately 20–30 minutes by road',
      description: 'Coimbatore Junction is the nearest major railway station and provides convenient rail connectivity for delegates arriving from other cities.',
      transitOptions: ['App-based cabs', 'Taxis', 'Auto-rickshaws', 'City buses'],
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Coimbatore+Junction&destination=PSG+College+of+Technology,+Avinashi+Road,+Peelamedu,+Coimbatore',
    },
    howToReach: {
      overview: 'PSG College of Technology is located on Avinashi Road in Peelamedu, Coimbatore, and is well connected by air, rail and road.',
      air: {
        title: 'BY AIR',
        distance: 'Approx. 5 km',
        travelTime: 'Approx. 15–20 min by road',
        description: 'Coimbatore International Airport (CJB) is approximately 5 km from PSG College of Technology. Typical road travel time is approximately 15–20 minutes, depending on traffic.',
        options: ['App-based cabs', 'Taxis', 'Auto-rickshaws'],
      },
      train: {
        title: 'BY TRAIN',
        distance: 'Approx. 8 km',
        travelTime: 'Approx. 20–30 min by road',
        description: 'Coimbatore Junction is the nearest major railway station. Distance from PSG College of Technology is approximately 8 km, with a typical road travel time of approximately 20–30 minutes, depending on traffic.',
        options: ['App-based cabs', 'Taxis', 'Auto-rickshaws', 'Local buses'],
      },
      road: {
        title: 'BY ROAD',
        description: 'PSG College of Technology is located on Avinashi Road in Peelamedu. Delegates can conveniently reach the campus via Avinashi Road arterial corridor.',
        options: ['App-based cab services', 'Taxis', 'Auto-rickshaws', 'City buses', 'Private vehicles'],
      },
    },
    localTransport: [
      {
        title: 'AUTO-RICKSHAWS',
        description: 'Convenient for short-distance travel within Coimbatore.',
      },
      {
        title: 'APP-BASED CABS',
        description: 'Ola/Uber and other app-based cab services can be used for airport, railway station, hotel and campus transfers.',
      },
      {
        title: 'TAXIS',
        description: 'Pre-arranged or local taxi services can be used for airport and railway station transfers.',
      },
      {
        title: 'CITY BUSES',
        description: 'Coimbatore\'s local bus network connects major city areas with Peelamedu and surrounding areas.',
      },
      {
        title: 'PRIVATE VEHICLES',
        description: 'Delegates travelling by private vehicle can use navigation services to reach PSG College of Technology on Avinashi Road.',
      },
    ],
    accommodation: {
      status: 'TO BE INCLUDED',
      title: 'Conference Accommodation',
      details: 'Accommodation details for DATAINSIGHT 2027 delegates: TO BE INCLUDED',
      note: 'Nearby accommodation options and conference-specific arrangements will be announced once officially confirmed.',
    },
    subsections: [
      { title: 'How to Reach', info: 'Air, Rail & Road Access' },
      { title: 'Nearest Airport', info: '~5 km • 15–20 min' },
      { title: 'Nearest Railway Station', info: '~8 km • 20–30 min' },
      { title: 'Local Transportation', info: 'Cabs, Autos & Transit' },
      { title: 'Accommodation', info: 'TO BE INCLUDED' },
    ],
  },
  contact: {
    department: 'Department of Information Technology',
    institution: 'PSG College of Technology',
    location: 'PSG College of Technology, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu, 641004, India.',
    email: 'TO BE INCLUDED',
    phone: 'TO BE INCLUDED',
    website: 'TO BE INCLUDED',
    socialMedia: 'TO BE INCLUDED',
  },
  footer: {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About PSGCT', href: '#about-psgct' },
      { name: 'About DATAINSIGHT', href: '#about' },
      { name: 'Scope', href: '#scope' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Tracks', href: '#tracks' },
      { name: 'Publication', href: '#publication' },
      { name: 'Important Dates', href: '#dates' },
      { name: 'Paper Submission', href: '#submission' },
      { name: 'Registration', href: '#registration' },
      { name: 'Committee', href: '#committee' },
      { name: 'Venue & Contact', href: '#venue' },
      { name: 'Sponsors', href: '#sponsors' },
    ],
    conferenceLinks: [
      { name: 'Submit Paper', href: '#cfp', actionType: 'submit' },
      { name: 'Register', href: '#dates', actionType: 'register' },
      { name: 'Download CFP', href: '#cfp', actionType: 'cfp' },
    ],
    copyright: '© 2027 DATAINSIGHT 2027 | PSG College of Technology. All Rights Reserved.',
    legal: [
      { name: 'Privacy Policy', status: 'TO BE INCLUDED' },
      { name: 'Terms of Service', status: 'TO BE INCLUDED' },
    ],
  },
};
