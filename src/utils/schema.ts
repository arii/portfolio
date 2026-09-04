export const SITE_URL = 'https://arii.github.io';
export const AUTHOR_NAME = 'Ariel Anders, PhD';
export const AUTHOR_JOB_TITLE = 'Roboticist & AI Engineer';
export const AUTHOR_ALUMNI = 'Massachusetts Institute of Technology (MIT)';

export const AUTHOR_SAME_AS = [
  'https://github.com/arii',
  'https://www.linkedin.com/in/ariel-anders/',
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

export function getPersonAndProfileSchema(canonicalUrl: string = '/') {
  const normalized = canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl;
  const fullUrl = SITE_URL + normalized;

  const personSchema = {
    '@type': 'Person',
    '@id': SITE_URL + '/#person',
    name: AUTHOR_NAME,
    jobTitle: AUTHOR_JOB_TITLE,
    url: SITE_URL,
    image: SITE_URL + '/assets/roboticist.jpg',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: AUTHOR_ALUMNI,
      url: 'https://www.mit.edu',
    },
    knowsAbout: AUTHOR_KNOWS_ABOUT,
    sameAs: AUTHOR_SAME_AS,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': fullUrl + '#profilepage',
    url: fullUrl,
    name: 'Profile of ' + AUTHOR_NAME,
    mainEntity: personSchema,
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': SITE_URL + '/#services',
    serviceType: 'AI & Robotics Consulting & Software Engineering Services',
    provider: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technical Consulting & Software Engineering Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'AI Architecture',
            description:
              'Design and implementation of stateful multi-agent workflows, LLM orchestration, and high-reliability AI software architecture.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Robotics Software Systems',
            description:
              'Autonomous systems development, motion planning under uncertainty, conformant belief-state manipulation, and ROS 2 ecosystem integration.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            name: 'Developer Automation',
            description:
              'Agentic CI/CD pipelines, automated code auditing guardrails, Model Context Protocol (MCP) integrations, and static analysis tooling.',
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
    applicationCategory: options.applicationCategory || 'Developer Application',
    author: {
      '@type': 'Person',
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
    : SITE_URL + '/assets/roboticist.jpg';

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': fullUrl + '#article',
    headline: options.headline,
    description: options.description,
    url: fullUrl,
    image,
    proficiencyLevel: 'Expert',
    articleSection: 'Robotics & AI',
    datePublished: options.datePublished || '2026-01-01',
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    keywords: options.keywords
      ? options.keywords.join(', ')
      : 'Artificial Intelligence, Robotics Software Engineering, Autonomous Systems, Agentic Workflows',
  };
}
