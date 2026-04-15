export interface Frontmatter {
  title?: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  order?: string;
  [key: string]: string | undefined;
}

export function parseFrontmatter(mdText: string): { data: Frontmatter; content: string } {
  const match = mdText.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: mdText };

  const yaml = match[1];
  const content = match[2];
  const data: Frontmatter = {};

  yaml.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      data[key] = val;
    }
  });

  return { data, content: content.trim() };
}
