module.exports = {
  siteTitle: 'Akash Suresh | Software Engineer',
  siteDescription:
    'Akash Suresh is a software engineer based in Bangalore who specializes in building distributed systems, applications, and everything in between.',
  siteKeywords: 'Akash Suresh, Akash, Suresh, akash-suresh, software engineer, back-end engineer',
  siteUrl: 'https://akash-suresh.github.io/v4',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Akash Suresh',
  location: 'Bangalore, India',
  email: 'akashsuresh36@gmail.com',
  github: 'https://github.com/akash-suresh',
  twitterHandle: '@akashsuresh96',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/akash-suresh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akash-suresh',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mydadpaysformytravels',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/akashsuresh96',
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
