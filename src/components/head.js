import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png'; 
import androidIcon192x192 from '@images/favicons/android-chrome-192x192.png';
import androidIcon512x512 from '@images/favicons/android-chrome-512x512.png';
import appleIcon180x180 from '@images/favicons/apple-touch-icon-180x180.png';  

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://rajivkumar.netlify.app" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />

    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />

    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="512x512" href={androidIcon512x512} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />

    <meta name="theme-color" content={config.colors.navy} />

  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
