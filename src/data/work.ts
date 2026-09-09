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
 * Portfolio entries. Add a real music video or clip by appending to the
 * relevant array — `id` is the YouTube video ID (the part after youtu.be/ or
 * watch?v=) or the Vimeo numeric ID. Clips should set orientation: 'vertical'.
 */
export const MUSIC_VIDEO_WORK: WorkItem[] = [
  { title: 'Miss Onyx — Jumpy', artist: 'Miss Onyx — Jumpy', package: 'Hook Video', platform: 'youtube', id: '-n81ylHc1Ok' },
  { title: 'Pinky Notes X Stana — Day Ones', artist: 'Pinky Notes X Stana — Day Ones', package: 'Music Video', platform: 'youtube', id: '1MB6_KSlFKY' },
  { title: 'Miss Onyx — Anti Social Neighbour', artist: 'Miss Onyx — Anti Social Neighbour', package: 'Music Video', platform: 'youtube', id: 'tV0hYONwG2g', orientation: 'vertical' },
];

export const CLIP_WORK: WorkItem[] = [
  { title: 'Loyce — BkChat Hunger Games', artist: 'Loyce — BkChat Hunger Games', package: 'Clips Package', platform: 'youtube', id: 'vgxdu3JOLaU', orientation: 'horizontal' },
  { title: 'Shotta — Intro Video', artist: 'Shotta — Intro Video', package: 'Clips Package', platform: 'youtube', id: '-zfa6maWVqc', orientation: 'horizontal' },
];
