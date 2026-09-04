import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_TITLE = 'AI & Robotics Engineering Portfolio | Ariel Anders, PhD';
const DEFAULT_DESCRIPTION =
  'Explore AI consulting, robotics software engineering, and autonomous systems research by Ariel Anders, PhD (MIT). View open-source tools and deep dives.';
const SITE_URL = 'https://arii.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/assets/roboticist.jpg`;

const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  twitterCard = 'summary_large_image',
  jsonLd,
}) => {
  let fullTitle = DEFAULT_TITLE;
  if (title) {
    if (title.includes('Ariel Anders')) {
      fullTitle = title;
    } else {
      fullTitle = `${title} | Ariel Anders, PhD`;
    }
  }

  const normalizedPath = canonicalUrl ? (canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`) : '';
  const fullUrl = `${SITE_URL}${normalizedPath}`;

  const image = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  const jsonLdContent = jsonLd
    ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)
    : null;

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

      {/* Structured JSON-LD Schema */}
      {jsonLdContent && (
        <script type="application/ld+json">{jsonLdContent}</script>
      )}
    </Helmet>
  );
};

export default SEO;
