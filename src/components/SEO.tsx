import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  type?: string;
  image?: string;
  structuredData?: object;
  articleAuthor?: string;
  articlePublisher?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  locale?: string;
  alternateLanguages?: Array<{hreflang: string, href: string}>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url = 'https://ikengineering.co.nz',
  type = 'website',
  image = 'https://bbrvkmdwjnotdugbcevs.supabase.co/storage/v1/object/public/londimg/Fav-Icon-high-resolution%20white-JPG.jpg',
  structuredData,
  articleAuthor,
  articlePublisher,
  articlePublishedTime,
  articleModifiedTime,
  locale = 'en_NZ',
  alternateLanguages
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Basic Meta Tags */}
      <meta name="author" content="IK Engineering" />
      <meta name="copyright" content="IK Engineering" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="NZ-AUK" />
      <meta name="geo.placename" content="Auckland, New Zealand" />
      <meta name="geo.position" content="-36.8485;174.7633" />
      <meta name="ICBM" content="-36.8485, 174.7633" />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="IK Engineering - Skilled Labour & Engineering Services" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="IK Engineering" />
      <meta property="og:locale" content={locale} />
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublisher && <meta property="article:publisher" content={articlePublisher} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      
      {/* Twitter Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="IK Engineering - Skilled Labour & Engineering Services" />
      <meta name="twitter:site" content="@ikengineering" />
      <meta name="twitter:creator" content="@ikengineering" />
      
      {/* Mobile & App Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="IK Engineering" />
      
      {/* Language and Regional */}
      <meta httpEquiv="Content-Language" content="en-nz" />
      {alternateLanguages && alternateLanguages.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
      ))}
      
      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      <meta name="format-detection" content="email=yes" />
      
      {/* Business Specific */}
      <meta name="business:contact_data:street_address" content="Auckland" />
      <meta name="business:contact_data:locality" content="Auckland" />
      <meta name="business:contact_data:region" content="Auckland" />
      <meta name="business:contact_data:postal_code" content="" />
      <meta name="business:contact_data:country_name" content="New Zealand" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://borxtnmxkmisnyjzrqlm.supabase.co" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//google-analytics.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};