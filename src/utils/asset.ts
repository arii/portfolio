export const resolveAssetUrl = (url?: string): string | undefined => {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  // If the url already starts with the base url, don't prepend it again
  if (baseUrl !== '/' && url.startsWith(baseUrl)) {
    return url;
  }
  const cleanUrl = url.replace(/^\//, '');
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanUrl}` : `${baseUrl}/${cleanUrl}`;
};
