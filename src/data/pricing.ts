export interface MusicVideoTier {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  featured?: boolean;
}

export const MUSIC_VIDEO_TIERS: MusicVideoTier[] = [
  {
    name: 'Performance Visualiser',
    price: 'From £300',
    tagline: 'Full-track visualiser, one environment, synced to the lyrics or beat.',
    includes: [
      'Full track length',
      'One character / one environment',
      'Lyric or beat-synced visuals',
      'One revision',
      'Standard turnaround',
    ],
  },
  {
    name: 'Hook Video',
    price: 'From £600',
    tagline: 'The hook plus one verse — built for how tracks actually get posted.',
    includes: [
      'Up to 90 seconds (hook + one verse)',
      'One character, two environments max',
      'Lip sync and camera movement',
      'One revision',
      'Standard turnaround only — no rush option',
      'Extra scenes/characters/backgrounds billed as add-ons',
    ],
    featured: true,
  },
  {
    name: 'Story-Based',
    price: 'From £1,000',
    tagline: 'A narrative built around the track, with a proper cast and settings.',
    includes: [
      'Full track length',
      'Multiple characters and environments',
      'Lip sync, camera movement, narrative structure',
      'Two revisions',
      'Rush delivery available (+25–50%)',
    ],
  },
  {
    name: 'Premium Cinematic',
    price: 'From £3,000',
    tagline: 'A distinctive visual identity — the full cinematic treatment.',
    includes: [
      'Full track length, cinematic direction',
      'Multiple characters, environments, VFX',
      'Custom sound design',
      'Two revisions',
      'Priority scheduling',
    ],
  },
];

export interface ClipTier {
  name: string;
  clipsPerMonth: number;
  aLaCarte: string;
  price: string;
  saving: string;
  paymentLink: string;
}

export const CLIP_MONTHLY_TIERS: ClipTier[] = [
  {
    name: 'Starter',
    clipsPerMonth: 4,
    aLaCarte: '£320',
    price: '£280/mo',
    saving: '12% saving',
    paymentLink: 'https://buy.stripe.com/8x2cN67IJ5Zz4YzddaafS01',
  },
  {
    name: 'Growth',
    clipsPerMonth: 8,
    aLaCarte: '£640',
    price: '£540/mo',
    saving: '15% saving',
    paymentLink: 'https://buy.stripe.com/dRmbJ28MNbjTdv55KIafS02',
  },
  {
    name: 'Full Rollout',
    clipsPerMonth: 12,
    aLaCarte: '£960',
    price: '£780/mo',
    saving: '19% saving',
    paymentLink: 'https://buy.stripe.com/4gM3cw6EF3Rr3Uv4GEafS03',
  },
];

export const SINGLE_CLIP_PRICE = '£80';
export const SINGLE_CLIP_PAYMENT_LINK = 'https://buy.stripe.com/cNi28s4wxew51MnddaafS00';
