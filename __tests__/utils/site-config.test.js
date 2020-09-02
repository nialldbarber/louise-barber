import {getCurrentYear} from 'utils/site-config';

describe('getCurrentYear ', () => {
  test('should return current year ', () => {
    let date = new Date();
    let year = date.getFullYear();
    expect(getCurrentYear()).toBe(year);
  });
});
