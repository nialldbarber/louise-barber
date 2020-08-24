function formatTitleForSlug(url: string): string {
  return url.toLowerCase().split(' ').join('-');
}

export {formatTitleForSlug};
