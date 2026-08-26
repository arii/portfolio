import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const DEFAULT_TITLE = 'Ariel Anders | Roboticist & Senior Software Engineer';
const DEFAULT_DESCRIPTION =
  "Ariel Anders' Technical Portfolio: Robotics research (MIT CSAIL PhD), agentic DevAI tools, autonomous systems, and software engineering.";
const SITE_URL = 'https://arii.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/assets/roboticist.jpg`;

const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  twitterCard = 'summary_large_image',
}) => {
  const fullTitle = title ? `${title} | Ariel Anders` : DEFAULT_TITLE;

  const normalizedPath = canonicalUrl ? (canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`) : '';
  const fullUrl = `${SITE_URL}${normalizedPath}`;

  const image = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:site_name" content="Ariel Anders Portfolio" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
