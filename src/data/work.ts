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
  { title: 'Miss Onyx — Jumpy', artist: 'Miss Onyx', package: 'Hook Video', platform: 'youtube', id: '-n81ylHc1Ok' },
];

export const CLIP_WORK: WorkItem[] = [];
