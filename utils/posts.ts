/**
 * Format a string into a slug friendly string
 * 
 * @param url string | number
 */
function formatTitleForSlug(url: string | number): string {
  if (typeof url === 'number') {
    url = url.toString();
  }
  if (url.length === 0) return '';
  return url.toLowerCase().split(' ').join('-');
}

function getProgressiveImage(url: string): string {
  return `https:${url}?fm=jpg&fl=progressive`;
}

export {formatTitleForSlug, getProgressiveImage};
