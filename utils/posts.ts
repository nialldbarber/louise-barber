/**
 * Format a string into a slug friendly string
 */
function formatTitleForSlug(url: string | number): string {
  if (typeof url === 'number') {
    url = url.toString();
  }
  if (url.length === 0) return '';
  return url.toLowerCase().split(' ').join('-');
}

/**
 * Contentful specific function to whack https in front of url
 */
function getProgressiveImage(url: string): string {
  return `https:${url}?fm=jpg&fl=progressive`;
}

/**
 * Breakpoints for <Masonry />
 */
const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

export {formatTitleForSlug, getProgressiveImage, breakpointColumnsObj};
