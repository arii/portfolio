export interface ParsedVideoInfo {
  videoId: string | null;
  embedUrl: string | null;
  thumbnailUrl: string | null;
}

export function parseVideoUrl(url: string): ParsedVideoInfo {
  if (!url) return { videoId: null, embedUrl: null, thumbnailUrl: null };

  const cleanUrl = url.replace(/[?#]no-embed/, '');
  const ytMatch = cleanUrl.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const listMatch = cleanUrl.match(/youtube\.com\/.*[?&]list=([a-zA-Z0-9_-]+)/);

  if (ytMatch) {
    const videoId = ytMatch[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}${listMatch ? `?list=${listMatch[1]}` : ''}`;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return { videoId, embedUrl, thumbnailUrl };
  } else if (listMatch) {
    const listId = listMatch[1];
    return {
      videoId: null,
      embedUrl: `https://www.youtube.com/embed/videoseries?list=${listId}`,
      thumbnailUrl: null,
    };
  }

  return { videoId: null, embedUrl: null, thumbnailUrl: null };
}

export function extractVideoUrlsFromMarkdown(content: string): string[] {
  const matches = content.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}/g);
  if (!matches) return [];
  return Array.from(new Set(matches));
}
