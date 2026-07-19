export type Platform = 'vimeo' | 'youtube';

export interface WorkItem {
  title: string;
  artist: string;
  package: string;
  platform: Platform;
  id: string;
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Placeholder portfolio entries. Replace `id` with the real Vimeo/YouTube video ID
 * for each piece, and update artist/package copy once approved.
 */
export const MUSIC_VIDEO_WORK: WorkItem[] = [
  { title: 'Showreel 2026', artist: 'Clout & Context', package: 'Showreel', platform: 'youtube', id: 'M7lc1UVf-VE' },
  { title: 'Midnight Runner', artist: 'Artist Name', package: 'Hook Video', platform: 'vimeo', id: '76979871' },
  { title: 'City Lights', artist: 'Artist Name', package: 'Story-Based', platform: 'vimeo', id: '76979871' },
  { title: 'No Ceiling', artist: 'Artist Name', package: 'Premium Cinematic', platform: 'vimeo', id: '76979871' },
];

export const CLIP_WORK: WorkItem[] = [
  { title: 'TikTok Hook Clip', artist: 'Artist Name', package: 'Clips Package', platform: 'vimeo', id: '76979871', orientation: 'vertical' },
  { title: 'Reel Cutdown', artist: 'Artist Name', package: 'Clips Package', platform: 'vimeo', id: '76979871', orientation: 'vertical' },
  { title: 'Shorts Teaser', artist: 'Artist Name', package: 'Clips Package', platform: 'vimeo', id: '76979871', orientation: 'vertical' },
];
