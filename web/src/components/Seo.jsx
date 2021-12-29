import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useSanity } from '../hooks';

const SEO = ({ lang, title, description, canonical, image, children }) => {
  const { settings, info } = useSanity();
  const metaDescription = description || settings.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${settings.name}`}
    >
      <link
        rel="canonical"
        href={`${
          canonical === 'https://www.aristocracysalon.com/home/'
            ? 'https://www.aristocracysalon.com/'
            : canonical
        }`}
      />

      <meta
        name="robots"
        content={
          settings.isIndexed === true ? 'index, follow' : 'noindex, nofollow'
        }
      />

      <meta name="description" content={metaDescription} />
      {/* Open Graph tags */}
      <meta property="og:title" content={settings.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={settings.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={info.websiteUrl} />
      <meta property="og:site_name" content={settings.title} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={settings.author} />
      <meta name="twitter:title" content={settings.title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  canonical: ``,
  image: ``,
  children: ``,
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
