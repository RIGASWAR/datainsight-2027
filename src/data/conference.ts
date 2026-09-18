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

export interface CommitteeSecretary {
  name: string;
  role: string;
}

export interface CommitteeData {
  chiefPatron: {
    name: string;
    title: string;
    affiliation: string;
  };
  patron: {
    name: string;
    title: string;
    affiliation: string;
  };
  convener: {
    name: string;
    title: string;
    department: string;
  };
  organizingSecretaries: CommitteeSecretary[];
  additionalRoles: {
    category: string;
    status: string;
  }[];
}

export const CONFERENCE_DATA = {
  acronym: 'DATAINSIGHT 2027',
  fullTitle: 'International Conference on Multimodal Data Analytics, Intelligence and Security',
  tagline: '"From Multimodal Data to Intelligent and Secure Insights"',
  targetLiveDate: '2027-12-16T09:00:00+05:30', // December 16, 2027, 9:00 AM IST
  datesDisplay: 'December 16–18, 2027',
  institution: {
    name: 'PSG College of Technology',
    accreditation: 'An ISO 9001 : 2015 Certified Institution',
    department: 'Department of Information Technology',
    location: 'Peelamedu, Coimbatore – 641004, Tamil Nadu, India',
    city: 'Coimbatore, Tamil Nadu, India',
  },
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Themes', href: '#themes' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Call for Papers', href: '#cfp' },
    { name: 'Publication', href: '#publication' },
    { name: 'Committee', href: '#committee' },
    { name: 'Venue', href: '#venue' },
    { name: 'Contact', href: '#contact' },
  ],
  about: {
    primaryText:
      'DATAINSIGHT 2027 is an international forum dedicated to advancing research and innovation at the intersection of multimodal data analytics, artificial intelligence, intelligent systems and cybersecurity. The conference brings together researchers, academicians, industry professionals and technology practitioners to explore how diverse data modalities—including text, images, video, speech, sensor streams and structured data—can be transformed into meaningful and actionable intelligence. The conference focuses on emerging analytical methods, AI and machine learning techniques, trustworthy computing, privacy-preserving technologies and secure data processing. By connecting multimodal intelligence with robust security frameworks, DATAINSIGHT 2027 aims to foster interdisciplinary collaboration and knowledge exchange, encouraging research that enables intelligent, reliable and secure decision-making across real-world domains.',
    posterSummary:
      'DATAINSIGHT 2027 is a premier international forum dedicated to advancing the frontier of multimodal data analytics. It explores the powerful convergence of innovative intelligence technologies and robust security frameworks to create integrated solutions for diverse data modalities. The conference fosters global collaboration and knowledge exchange, driving future research towards secure, intelligent data processing and decision-making across all domains.',
    modalities: [
      { name: 'Text', desc: 'NLP, Large Language Models & Mining', icon: 'FileText' },
      { name: 'Image', desc: 'Computer Vision & Representation', icon: 'Image' },
      { name: 'Audio', desc: 'Speech Processing & Acoustics', icon: 'Mic' },
      { name: 'Video', desc: 'Temporal & Dynamic Scene Analytics', icon: 'Video' },
      { name: 'Sensor', desc: 'IoT, Wearables & Cyber-Physical Streams', icon: 'Cpu' },
      { name: 'Data', desc: 'Multimodal Fusion & Graph Structures', icon: 'Database' },
      { name: 'Intelligence', desc: 'Deep Learning & Explainable AI', icon: 'Brain' },
      { name: 'Security', desc: 'Cryptography, Trust & Privacy', icon: 'ShieldCheck' },
    ],
  },
  highlights: [
    {
      id: 'highlight-1',
      title: 'International Research Forum',
      description: 'A global platform for researchers, academicians, industry professionals and students.',
      emojiUrl: 'https://fonts.gstatic.com/s/e/notoemoji/17.0/1f310/72.png',
      fallbackIcon: 'Globe',
    },
    {
      id: 'highlight-2',
      title: 'Multimodal Intelligence',
      description: 'Exploring intelligent systems that understand and integrate multiple forms of data.',
      emojiUrl: 'https://fonts.gstatic.com/s/e/notoemoji/17.0/1f916/72.png',
      fallbackIcon: 'Bot',
    },
    {
      id: 'highlight-3',
      title: 'Advanced Data Analytics',
      description: 'Innovative approaches for extracting meaningful insights from complex and large-scale data.',
      emojiUrl: 'https://fonts.gstatic.com/s/e/notoemoji/17.0/1f4ca/72.png',
      fallbackIcon: 'BarChart3',
    },
    {
      id: 'highlight-4',
      title: 'Secure & Trustworthy AI',
      description: 'Advancing privacy, security, transparency and responsible intelligent computing.',
      emojiUrl: 'https://fonts.gstatic.com/s/e/notoemoji/17.0/1f510/72.png',
      fallbackIcon: 'Lock',
    },
  ],
  themes: [
    {
      id: 'theme-1',
      number: '01',
      title: 'Multimodal Data Processing & Analytics',
      description: 'Techniques and algorithms for synthesizing, retrieving, and extracting actionable signals from disparate modalities.',
      iconName: 'Layers',
      topics: [
        'Audio-Visual Fusion',
        'Cross-Modal Retrieval',
        'Sensor Data Analytics',
        'Text & Image Mining',
      ],
    },
    {
      id: 'theme-2',
      number: '02',
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Foundational and applied methodologies powering modern cognitive and reasoning engines.',
      iconName: 'Cpu',
      topics: [
        'Deep Learning',
        'Explainable AI (XAI)',
        'Soft Computing',
        'Cognitive Systems',
      ],
    },
    {
      id: 'theme-3',
      number: '03',
      title: 'Security, Privacy & Trust',
      description: 'Cryptographic guarantees, zero-trust architectures, and biometric verification for cyber-physical infrastructure.',
      iconName: 'ShieldAlert',
      topics: [
        'Multimodal Biometrics',
        'Cyber-Physical System Security',
        'Cryptography',
        'Forensics',
      ],
    },
    {
      id: 'theme-4',
      number: '04',
      title: 'Computer Vision & Speech',
      description: 'Perceptual systems enabling real-time visual recognition, linguistic understanding, and interactive gestures.',
      iconName: 'Eye',
      topics: [
        'Object Recognition',
        'Video Analytics',
        'Natural Language Processing',
        'Gesture Recognition',
      ],
    },
  ],
  importantDates: [
    {
      id: 'date-1',
      title: 'Paper Submission',
      date: 'TO BE INCLUDED',
      status: 'tbd',
    },
    {
      id: 'date-2',
      title: 'Acceptance Notification',
      date: 'TO BE INCLUDED',
      status: 'tbd',
    },
    {
      id: 'date-3',
      title: 'Camera-Ready Submission',
      date: 'TO BE INCLUDED',
      status: 'tbd',
    },
    {
      id: 'date-4',
      title: 'Early Registration',
      date: 'TO BE INCLUDED',
      status: 'tbd',
    },
    {
      id: 'date-5',
      title: 'Conference Dates',
      date: 'December 16–18, 2027',
      status: 'confirmed',
      isHighlighted: true,
    },
  ],
  tracks: [
    {
      id: 'track-01',
      trackNumber: 'TRACK 01',
      title: 'Multimodal AI and Learning',
      iconName: 'Network',
      overview: 'Investigating models, representations, and architectures that learn across audio, vision, text, and sensory inputs.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-02',
      trackNumber: 'TRACK 02',
      title: 'Data Analytics and Data Science',
      iconName: 'TrendingUp',
      overview: 'Scalable data infrastructures, streaming analytics, predictive modeling, and statistical methodologies.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-03',
      trackNumber: 'TRACK 03',
      title: 'Artificial Intelligence and Machine Learning',
      iconName: 'Sparkles',
      overview: 'Novel ML algorithms, reinforcement learning, generative models, and foundations of artificial intelligence.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-04',
      trackNumber: 'TRACK 04',
      title: 'Intelligent Systems and Applications',
      iconName: 'Boxes',
      overview: 'Translational intelligence in healthcare, smart cities, autonomous vehicles, manufacturing, and education.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-05',
      trackNumber: 'TRACK 05',
      title: 'Cybersecurity and Information Security',
      iconName: 'Shield',
      overview: 'Threat detection, network resilience, cryptographic defenses, intrusion mitigation, and incident forensics.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-06',
      trackNumber: 'TRACK 06',
      title: 'Privacy, Trustworthy AI and Responsible Computing',
      iconName: 'ShieldCheck',
      overview: 'Differential privacy, algorithmic fairness, model interpretability, ethics, governance, and auditability.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-07',
      trackNumber: 'TRACK 07',
      title: 'IoT, Edge and Cloud Intelligence',
      iconName: 'Server',
      overview: 'Decentralized processing, tinyML on embedded devices, edge-cloud orchestration, and low-latency networking.',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-08',
      trackNumber: 'TRACK 08',
      title: 'Emerging Technologies and Applications',
      iconName: 'Zap',
      overview: 'Quantum-inspired computing, neuromorphic hardware, digital twins, and next-generation cyber innovations.',
      topics: 'TO BE INCLUDED',
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
  committee: {
    chiefPatron: {
      name: 'Shri. L. Gopalakrishnan',
      title: 'Chief Patron',
      affiliation: "Managing Trustee, PSG & Sons' Charities",
    },
    patron: {
      name: 'Dr. G. Thilagavathi',
      title: 'Patron',
      affiliation: 'Principal, PSG College of Technology',
    },
    convener: {
      name: 'Dr. B. Vinoth Kumar',
      title: 'Convener',
      department: 'Professor and Head, Department of Information Technology',
    },
    organizingSecretaries: [
      { name: 'Dr. S. Sarathambekai', role: 'Organizing Secretary' },
      { name: 'Dr. T. Vairam', role: 'Organizing Secretary' },
      { name: 'Dr. N. Hemapriya', role: 'Organizing Secretary' },
    ],
    additionalRoles: [
      { category: 'General Chairs', status: 'TO BE INCLUDED' },
      { category: 'Conference Chairs', status: 'TO BE INCLUDED' },
      { category: 'Technical Program Chairs', status: 'TO BE INCLUDED' },
      { category: 'Publication Chairs', status: 'TO BE INCLUDED' },
      { category: 'Finance Chair', status: 'TO BE INCLUDED' },
      { category: 'Organizing Committee', status: 'TO BE INCLUDED' },
      { category: 'Advisory Committee', status: 'TO BE INCLUDED' },
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
    mapLink: 'TO BE INCLUDED',
    subsections: [
      { title: 'How to Reach', info: 'TO BE INCLUDED' },
      { title: 'Nearest Airport', info: 'TO BE INCLUDED' },
      { title: 'Nearest Railway Station', info: 'TO BE INCLUDED' },
      { title: 'Accommodation', info: 'TO BE INCLUDED' },
      { title: 'Local Transportation', info: 'TO BE INCLUDED' },
    ],
  },
  contact: {
    department: 'Department of Information Technology',
    institution: 'PSG College of Technology',
    location: 'Peelamedu, Coimbatore – 641004, Tamil Nadu, India',
    email: 'TO BE INCLUDED',
    phone: 'TO BE INCLUDED',
    website: 'TO BE INCLUDED',
    socialMedia: 'TO BE INCLUDED',
  },
  footer: {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Important Dates', href: '#dates' },
      { name: 'Tracks', href: '#tracks' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Call for Papers', href: '#cfp' },
      { name: 'Publication', href: '#publication' },
      { name: 'Committee', href: '#committee' },
      { name: 'Venue', href: '#venue' },
      { name: 'Contact', href: '#contact' },
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
