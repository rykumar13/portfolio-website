module.exports = {
    siteTitle: 'Rajiv Kumar | Software Engineer',
    siteDescription:
      'Rajiv Kumar is a software engineer based in London who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteKeywords:
      'Rajiv Kumar, Rajiv , Kumar, r_for_rajiv, software engineer, front-end engineer, web developer, javascript, northeastern',
    siteUrl: 'https://github.com/rajivkumar13',
    siteLanguage: 'en_US',
    googleAnalyticsID: '',
    googleVerification: '',
    name: 'Rajiv Kumar',
    location: 'London, UK',
    email: 'Rajiv .Kumar@gmail.com',
    github: 'https://github.com/rajivkumar13',
    twitterHandle: '@r_for_rajiv',
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/rajivkumar13',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/rajivk7',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/r_for_rajiv',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/r_for_rajiv',
      },
    ],
  
    navLinks: [
      {
        name: 'About',
        url: '/#about',
      },
      {
        name: 'Experience',
        url: '/#jobs',
      },
      {
        name: 'Work',
        url: '/#projects',
      },
      {
        name: 'Contact',
        url: '/#contact',
      },
    ],
  
    navHeight: 100,
  
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      darkNavy: '#020c1b',
    },
  
    srConfig: (delay = 200) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
  };