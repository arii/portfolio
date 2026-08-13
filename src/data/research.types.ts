export interface ResearchPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTime: string;
  tags: string[];
  summary: string;
  content: string;
  category: string;
  status?: string;
  sourceUrl?: string;
  externalUrl?: string;
  externalLinkDisplayLabel?: string;
  inDevMessage?: {
    highlight: string;
    rest: string;
  };
  customPreview?: {
    logo: {
      prefix: string;
      accent: string;
      suffix: string;
    };
    headline: {
      text: string;
      accent?: boolean;
    }[];
    tagline: string;
  };
}
