export const SITE = {
  name: 'Clout & Context',
  shortName: 'Clout & Context',
  url: 'https://cloutandcontext.com',
  email: 'info@cloutandcontext.com',
  social: {
    instagram: 'https://instagram.com/cloutandcontext',
    tiktok: 'https://tiktok.com/@cloutandcontext',
    youtube: 'https://youtube.com/@cloutandcontext',
  },
  handle: '@CloutAndContext',
  description:
    'Clout & Context — UK urban culture channel and cinematic 2D animation studio for independent artists.',
  animationsDescription:
    'Animated music videos and social clips for UK independent artists. Cinematic 2D urban animation, quoted jobs and monthly clip packages.',
  formspreeEndpoint: 'https://formspree.io/f/mdaqzoyj',
};

// Brand-level nav, shown on every page (the brand hub and the animations service).
export const MAIN_NAV = [
  { href: '/animations/', label: 'Animations' },
  { href: SITE.social.youtube, label: 'Channel', external: true },
  { href: SITE.social.instagram, label: 'Follow', external: true },
];

// Sub-nav shown only within the /animations section.
export const ANIMATIONS_NAV = [
  { href: '/animations/#work', label: 'The Work' },
  { href: '/animations/music-videos/', label: 'Music Videos' },
  { href: '/animations/clips/', label: 'Clips & Packages' },
  { href: '/animations/#about', label: 'About' },
  { href: '/animations/terms/', label: 'Terms & FAQ' },
];
