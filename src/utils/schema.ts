export const SITE_URL = 'https://arii.github.io';
export const AUTHOR_NAME = 'Ariel Anders, PhD';
export const AUTHOR_JOB_TITLE = 'Robotics & AI Consulting Engineer';
export const AUTHOR_ALUMNI = 'Massachusetts Institute of Technology (MIT)';
export const AUTHOR_EMAIL = 'anders.ariel@gmail.com';
export const AUTHOR_IMAGE = `${SITE_URL}/assets/roboticist.jpg`;

export const AUTHOR_SAME_AS = [
  'https://www.linkedin.com/in/ariel-anders/',
  'https://github.com/arii',
  'https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en',
  'https://boomtick.blog',
];

export const AUTHOR_KNOWS_ABOUT = [
  'Artificial Intelligence',
  'Robotics Software Engineering',
  'Autonomous Systems',
  'Agentic Workflows',
  'Motion Planning',
  'Computer Vision',
];

export interface SoftwareSchemaOptions {
  name: string;
  description: string;
  url?: string;
  codeRepository?: string;
  programmingLanguage?: string | string[];
  applicationCategory?: string;
}

export interface TechArticleSchemaOptions {
  headline: string;
  description: string;
  canonicalPath: string;
  datePublished?: string;
  image?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
}

export interface ScholarlyArticleSchemaOptions {
  headline: string;
  canonicalPath: string;
  datePublished?: string;
  abstract?: string;
  image?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VideoObjectSchemaOptions {
  name: string;
  description: string;
  thumbnailUrl?: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
}

export function getOrganizationSchema() {
  return {
    '@type': ['ProfessionalService', 'Organization'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Ariel Anders AI & Robotics Consulting',
    alternateName: 'Ariel Anders Consulting',
    url: `${SITE_URL}/about`,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/vite.svg#logo`,
      url: `${SITE_URL}/vite.svg`,
      width: 512,
      height: 512,
      caption: 'Ariel Anders Engineering Logo',
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${AUTHOR_IMAGE}#image`,
      url: AUTHOR_IMAGE,
      caption: 'Ariel Anders, PhD - AI & Robotics Consulting Engineer',
      width: 1200,
      height: 1200,
    },
    description:
      'Professional AI software engineering, autonomous robotics architecture, and agentic multi-agent systems consulting.',
    founder: {
      '@id': `${SITE_URL}/about#person`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'San Francisco Bay Area',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    sameAs: AUTHOR_SAME_AS,
  };
}

export function getSiteNavigationSchema() {
  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'DevAI', path: '/devai' },
    { name: 'Research', path: '/research' },
    { name: 'Resume', path: '/resume' },
    { name: 'About Ariel', path: '/about' },
  ];

  return navItems.map((item, index) => ({
    '@type': 'SiteNavigationElement',
    '@id': `${SITE_URL}${item.path}#sitenav-${index + 1}`,
    position: index + 1,
    name: item.name,
    url: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  }));
}

export function getPersonAndProfileSchema(canonicalUrl: string = '/') {
  const normalized = canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl;
  const fullUrl = SITE_URL + (normalized === '/' ? '' : normalized);

  const personEntity = {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#person`,
    url: `${SITE_URL}/about`,
    name: AUTHOR_NAME,
    jobTitle: AUTHOR_JOB_TITLE,
    email: AUTHOR_EMAIL,
    image: {
      '@type': 'ImageObject',
      '@id': `${AUTHOR_IMAGE}#image`,
      url: AUTHOR_IMAGE,
      caption: `${AUTHOR_NAME} - ${AUTHOR_JOB_TITLE}`,
      width: 1200,
      height: 1200,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: AUTHOR_ALUMNI,
      url: 'https://www.mit.edu',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Doctor of Philosophy (Ph.D.) in Electrical Engineering and Computer Science',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: AUTHOR_ALUMNI,
          url: 'https://www.mit.edu',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Master of Science (S.M.) in Electrical Engineering and Computer Science',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: AUTHOR_ALUMNI,
          url: 'https://www.mit.edu',
        },
      },
    ],
    knowsAbout: AUTHOR_KNOWS_ABOUT,
    sameAs: AUTHOR_SAME_AS,
  };

  const serviceEntity = {
    '@type': 'Service',
    '@id': `${SITE_URL}/about#consulting-service`,
    url: `${SITE_URL}/about`,
    name: 'Robotics & Multi-Agent AI Consulting',
    serviceType: 'Technical & Engineering Consulting',
    description:
      'Advisory and architecture services bridging robotics, autonomous navigation, and agentic AI systems for software engineering teams.',
    provider: {
      '@id': `${SITE_URL}/about#person`,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'San Francisco Bay Area',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Tech Startups, Engineering Leaders, Robotics Ventures',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Autonomous Navigation & Motion Planning Architecture',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Multi-Agent AI Workflows & Developer Infrastructure',
          },
        },
      ],
    },
  };

  const profilePageEntity = {
    '@type': 'ProfilePage',
    '@id': fullUrl + '#profilepage',
    url: fullUrl,
    name: 'Profile of ' + AUTHOR_NAME,
    mainEntity: {
      '@id': `${SITE_URL}/about#person`,
    },
  };

  const organizationEntity = getOrganizationSchema();
  const siteNavElements = getSiteNavigationSchema();

  return {
    '@context': 'https://schema.org',
    '@graph': [personEntity, serviceEntity, profilePageEntity, organizationEntity, ...siteNavElements],
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/about#consulting-service`,
    url: `${SITE_URL}/about`,
    name: 'Robotics & Multi-Agent AI Consulting',
    serviceType: 'Technical & Engineering Consulting',
    description:
      'Advisory and architecture services bridging robotics, autonomous navigation, and agentic AI systems for software engineering teams.',
    provider: {
      '@id': `${SITE_URL}/about#person`,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'San Francisco Bay Area',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Tech Startups, Engineering Leaders, Robotics Ventures',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Autonomous Navigation & Motion Planning Architecture',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Multi-Agent AI Workflows & Developer Infrastructure',
          },
        },
      ],
    },
  };
}

export function getSoftwareSchema(options: SoftwareSchemaOptions) {
  const codeRepo = options.codeRepository || 'https://github.com/arii/portfolio';
  const cleanId = options.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': (options.url || SITE_URL) + '#software-' + cleanId,
    name: options.name,
    description: options.description,
    codeRepository: codeRepo,
    programmingLanguage: options.programmingLanguage || 'TypeScript',
    runtimePlatform: 'Linux / Cross-platform',
    applicationCategory: options.applicationCategory || 'Developer Application',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#person`,
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
  };
}

export function getTechArticleSchema(options: TechArticleSchemaOptions) {
  const normalized = options.canonicalPath.startsWith('/') ? options.canonicalPath : '/' + options.canonicalPath;
  const fullUrl = SITE_URL + normalized;
  const rawImageUrl = options.image
    ? options.image.startsWith('http')
      ? options.image
      : SITE_URL + (options.image.startsWith('/') ? '' : '/') + options.image
    : AUTHOR_IMAGE;

  const imageObject = {
    '@type': 'ImageObject',
    '@id': `${rawImageUrl}#image`,
    url: rawImageUrl,
    caption: options.imageCaption || options.headline,
    width: options.imageWidth || 1200,
    height: options.imageHeight || 630,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': fullUrl + '#article',
    headline: options.headline,
    description: options.description,
    url: fullUrl,
    image: imageObject,
    mainEntityOfPage: fullUrl,
    proficiencyLevel: 'Expert',
    articleSection: 'Robotics & AI',
    datePublished: options.datePublished || '2026-01-01',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#person`,
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#person`,
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    keywords: options.keywords
      ? options.keywords.join(', ')
      : 'Artificial Intelligence, Robotics Software Engineering, Autonomous Systems, Agentic Workflows',
  };
}

export function getScholarlyArticleSchema(options: ScholarlyArticleSchemaOptions) {
  const normalized = options.canonicalPath.startsWith('/') ? options.canonicalPath : '/' + options.canonicalPath;
  const fullUrl = SITE_URL + normalized;
  const rawImageUrl = options.image
    ? options.image.startsWith('http')
      ? options.image
      : SITE_URL + (options.image.startsWith('/') ? '' : '/') + options.image
    : AUTHOR_IMAGE;

  const imageObject = {
    '@type': 'ImageObject',
    '@id': `${rawImageUrl}#image`,
    url: rawImageUrl,
    caption: options.imageCaption || options.headline,
    width: options.imageWidth || 1200,
    height: options.imageHeight || 630,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': `${fullUrl}#article`,
    name: options.headline,
    headline: options.headline,
    url: fullUrl,
    image: imageObject,
    abstract: options.abstract || options.headline,
    datePublished: options.datePublished || '2021-05-01',
    author: [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#person`,
        name: AUTHOR_NAME,
      },
    ],
    sameAs: 'https://scholar.google.com/citations?user=NM6SfiEAAAAJ&hl=en',
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : (item.path.startsWith('/') ? item.path : `/${item.path}`)}`,
    })),
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/about#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getVideoObjectSchema(options: VideoObjectSchemaOptions) {
  const url = options.embedUrl || options.contentUrl || SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${url}#video`,
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl || AUTHOR_IMAGE,
    uploadDate: options.uploadDate || '2024-01-01',
    contentUrl: options.contentUrl,
    embedUrl: options.embedUrl,
  };
}
