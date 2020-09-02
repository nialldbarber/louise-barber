import {formatTitleForSlug, getProgressiveImage} from 'utils/posts';

describe('formatTitleForSlug ', () => {
  test('should return a string formatted ', () => {
    let slug = 'slug i fy me please';
    expect(formatTitleForSlug(slug)).toBe('slug-i-fy-me-please');
  });

  test('should return a formatted number slug', () => {
    let numberSlug = 6936581;
    expect(formatTitleForSlug(numberSlug)).toBe(numberSlug.toString());
  })

  test('should return an empty string if nothing is provided', () => {
    expect(formatTitleForSlug('')).toBe('');
  })
});

// TODO: add getProgressiveImage test 
