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
  tagline: '"From Multimodal Data to Intelligent and Secure Insights"',
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
    { name: 'Theme', href: '#theme', targetId: 'theme' },
    { name: 'Tracks', href: '#tracks', targetId: 'tracks' },
    { name: 'Publication', href: '#publication', targetId: 'publication' },
    { name: 'Important Dates', href: '#dates', targetId: 'dates' },
    { name: 'Paper Submission', href: '#submission', targetId: 'submission' },
    { name: 'Registration', href: '#registration', targetId: 'registration' },
    { name: 'Expert Opinions', href: '#expert-opinions', targetId: 'expert-opinions' },
    { name: 'Events', href: '#events', targetId: 'events' },
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
    accreditation: "Accredited with 'A++' Grade by NAAC",
    description:
      'PSG College of Technology, established in 1951 by the visionary philanthropists of PSG & Sons’ Charities Trust, is an autonomous, premier engineering institution in Coimbatore, Tamil Nadu, India. Revered globally for pioneering industry-institute collaboration, rigorous research culture, and academic excellence, PSG Tech empowers students with transformative education and technological leadership across engineering, technology, applied sciences, and management.',
    departmentIT:
      'The Department of Information Technology, established in 1999, is committed to producing competent engineers and innovators equipped with strong foundations in artificial intelligence, multimodal data systems, cybersecurity, network architectures, and software engineering.',
    highlights: [
      { label: 'Established', value: '1951' },
      { label: 'Accreditation', value: 'NAAC A++ & ISO 9001:2015' },
      { label: 'Status', value: 'Govt. Aided Autonomous' },
      { label: 'Campus', value: 'Peelamedu, Coimbatore' },
    ],
  },
  scope: {
    heading: 'Scope of the Conference',
    overview:
      'DATAINSIGHT 2027 provides a premier international forum dedicated to advancing research, methodologies, and deployed applications at the confluence of multimodal analytics, intelligent systems, and trustworthy computing.',
    pillars: [
      {
        id: 'scope-1',
        title: 'Multimodal Data Processing and Analytics',
        description: 'Cross-modal representation learning, audio-visual synthesis, heterogeneous signal processing, multimodal embeddings, and unified sensor stream analytics.',
      },
      {
        id: 'scope-2',
        title: 'Artificial Intelligence and Intelligent Computing',
        description: 'Deep neural networks, generative AI, foundation models, explainable AI (XAI), cognitive inference engines, and automated reasoning systems.',
      },
      {
        id: 'scope-3',
        title: 'Data Science, Knowledge Discovery and Decision Intelligence',
        description: 'Scalable data lakes, graph analytics, knowledge graphs, predictive modeling, semantic reasoning, and automated decision-making pipelines.',
      },
      {
        id: 'scope-4',
        title: 'Cybersecurity, Privacy and Data Protection',
        description: 'Zero-trust architectures, multimodal biometrics, privacy-preserving machine learning, differential privacy, homomorphic encryption, and forensic analytics.',
      },
      {
        id: 'scope-5',
        title: 'Computing Architectures for Data-Driven Systems',
        description: 'High-performance computing (HPC), edge-fog orchestration, hardware accelerators for AI, distributed pipelines, and cloud-native multimodal backbones.',
      },
    ],
    statusDocument: 'TO BE INCLUDED',
  },
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
      title: 'Multimodal Data Processing and Analytics',
      iconName: 'Network',
      overview: 'TO BE INCLUDED',
      description: 'TO BE INCLUDED',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-02',
      trackNumber: 'TRACK 02',
      title: 'Artificial Intelligence and Intelligent Computing',
      iconName: 'Sparkles',
      overview: 'TO BE INCLUDED',
      description: 'TO BE INCLUDED',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-03',
      trackNumber: 'TRACK 03',
      title: 'Data Science, Knowledge Discovery and Decision Intelligence',
      iconName: 'TrendingUp',
      overview: 'TO BE INCLUDED',
      description: 'TO BE INCLUDED',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-04',
      trackNumber: 'TRACK 04',
      title: 'Cybersecurity, Privacy and Data Protection',
      iconName: 'ShieldCheck',
      overview: 'TO BE INCLUDED',
      description: 'TO BE INCLUDED',
      topics: 'TO BE INCLUDED',
    },
    {
      id: 'track-05',
      trackNumber: 'TRACK 05',
      title: 'Computing Architectures for Data-Driven Systems',
      iconName: 'Server',
      overview: 'TO BE INCLUDED',
      description: 'TO BE INCLUDED',
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
  additionalCommittees: [
    {
      id: 'comm-1',
      title: 'Technical Program Committee',
      role: 'Peer Review & Scientific Quality Assessment',
      members: 'TO BE INCLUDED',
    },
    {
      id: 'comm-2',
      title: 'International Advisory Committee',
      role: 'Global Strategic Direction & Academic Partnerships',
      members: 'TO BE INCLUDED',
    },
    {
      id: 'comm-3',
      title: 'Publication Committee',
      role: 'Proceedings Editing, Camera-Ready Compliance & Indexing',
      members: 'TO BE INCLUDED',
    },
    {
      id: 'comm-4',
      title: 'Finance & Registration Committee',
      role: 'Delegate Enrollment & Accounts Management',
      members: 'TO BE INCLUDED',
    },
    {
      id: 'comm-5',
      title: 'Hospitality & Logistics Committee',
      role: 'Campus Accommodations, Travel & Guest Relations',
      members: 'TO BE INCLUDED',
    },
    {
      id: 'comm-6',
      title: 'Media, Publicity & Web Committee',
      role: 'Global Outreach, Digital Dissemination & Portal Management',
      members: 'TO BE INCLUDED',
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
      { name: 'Theme', href: '#theme' },
      { name: 'Tracks', href: '#tracks' },
      { name: 'Publication', href: '#publication' },
      { name: 'Important Dates', href: '#dates' },
      { name: 'Paper Submission', href: '#submission' },
      { name: 'Registration', href: '#registration' },
      { name: 'Expert Opinions', href: '#expert-opinions' },
      { name: 'Events', href: '#events' },
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
