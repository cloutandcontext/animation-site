export interface Testimonial {
  /** The testimonial text, without surrounding quote marks. */
  quote: string;
  /** Artist / client name shown under the quote. */
  name: string;
  /** Optional context, e.g. "Artist", "Manager, Label X". */
  role?: string;
  /** Optional 1–5 star rating. */
  rating?: number;
}

/**
 * Approved testimonials shown on the site.
 *
 * This is the single list both submission routes feed into:
 *  1. Someone submits the on-site form (/animations/testimonial/) → it emails
 *     Clout & Context → once approved, the quote is added here.
 *  2. A comment that came in via DM/email/WhatsApp is added here directly.
 *
 * Nothing is published automatically — only entries in this array appear on
 * the site. Add an approved one by copying the shape below.
 */
export const TESTIMONIALS: Testimonial[] = [
  // {
  //   quote: 'They just get the sound — the video landed exactly how I heard it in my head.',
  //   name: 'Artist Name',
  //   role: 'Artist',
  //   rating: 5,
  // },
];
