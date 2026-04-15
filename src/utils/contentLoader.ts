/**
 * Centralized content loaders using Vite's import.meta.glob.
 * Avoids duplicating glob imports across pages.
 */

export const projectFiles = import.meta.glob(
  '../content/projects/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

export const blogFiles = import.meta.glob(
  '../content/blogs/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;
