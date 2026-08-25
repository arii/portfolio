export interface ResearchPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  summary: string;
  content: string;
  category?: string;
  author?: string;
  readTime?: number;
  status?: string;
}

export interface ResearchTool {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  taxonomyBucket?: 'product' | 'infrastructure';
  status: string;
  tags: string[];
  canonicalPath?: string;
  externalUrl?: string;
  externalLinkDisplayLabel?: string;
  pdfUrl?: string;
  videoUrl?: string;
  playlistUrl?: string;
  sourceUrl?: string;
  isFlagship?: boolean;
  excludeFromEngineeringTools?: boolean;
  image?: string;
  imageAlt?: string;
  metrics?: string;
  inDevMessage?: {
    highlight: string;
    rest: string;
  };
  customPreview?: {
    logo: { prefix: string; accent: string; suffix: string };
    headline: { text: string; accent?: string }[];
    tagline: string;
  };
  parentFlagship?: {
    id: string;
    title: string;
  };
  mediaLinks?: {
    type: 'video' | 'pdf' | 'external';
    label: string;
    url: string;
  }[];
}
