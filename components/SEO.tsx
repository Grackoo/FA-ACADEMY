import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, name = "FA Academy", type = "website", url = "https://fa-academy.vercel.app" }) => {
  return (
    <Helmet>
      {/* Etiqueta Título estándar */}
      <title>{title}</title>
      {/* Etiquetas Meta Básicas */}
      <meta name='description' content={description} />
      <link rel="canonical" href={url} />
      {/* Twitter Tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* Etiquetas de Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
    </Helmet>
  );
};

export default SEO;
