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
  keywords?: string[];
}

export interface ScholarlyArticleSchemaOptions {
  headline: string;
  canonicalPath: string;
  datePublished?: string;
  abstract?: string;
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getPersonAndProfileSchema(canonicalUrl: string = '/') {
  const normalized = canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl;
  const fullUrl = SITE_URL + normalized;

  const personEntity = {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#person`,
    url: `${SITE_URL}/about`,
    name: AUTHOR_NAME,
    jobTitle: AUTHOR_JOB_TITLE,
    email: AUTHOR_EMAIL,
    image: AUTHOR_IMAGE,
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

  return {
    '@context': 'https://schema.org',
    '@graph': [personEntity, serviceEntity, profilePageEntity],
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
  const image = options.image
    ? options.image.startsWith('http')
      ? options.image
      : SITE_URL + (options.image.startsWith('/') ? '' : '/') + options.image
    : AUTHOR_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': fullUrl + '#article',
    headline: options.headline,
    description: options.description,
    url: fullUrl,
    image,
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
  const image = options.image
    ? options.image.startsWith('http')
      ? options.image
      : SITE_URL + (options.image.startsWith('/') ? '' : '/') + options.image
    : AUTHOR_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': `${fullUrl}#article`,
    name: options.headline,
    headline: options.headline,
    url: fullUrl,
    image,
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
      item: `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}
