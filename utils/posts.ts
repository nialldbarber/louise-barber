function formatTitleForSlug(url: string): string {
  return url.toLowerCase().split(' ').join('-');
}

function getProgressiveImage(url: string): string {
  return `https:${url}?fm=jpg&fl=progressive`;
}

export {formatTitleForSlug, getProgressiveImage};
