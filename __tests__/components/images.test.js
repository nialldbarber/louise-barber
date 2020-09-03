import {render, queryByText} from '@testing-library/react';
import Images from 'components/images';
import {ART_PAGE} from 'constants/config';

describe('<Images /> ', () => {
  const validId = `${ART_PAGE}12345abcdefg`;
  const validUrl = 'https://some-website.com';
  const validComponent = (
    <Images id={validId} url={validUrl} title="image title" />
  );

  test('matches snapshot', () => {
    const container = render(<Images />);
    expect(container).toMatchSnapshot();
  });

  // ID
  test('given an ID, should render valid URL', () => {
    const container = render(validComponent);
    expect(container).toMatchSnapshot();
  });

  test('given no ID, link should be disabled', () => {
    const container = render(<Images id={null} url={validUrl} />);
    expect(container.firstChild).toBeUndefined();
  });

  // URL
  test('given no URL, link should be disabled', () => {
    const container = render(<Images id={validId} url={null} />);
    expect(container.firstChild).toBeUndefined();
  });
});
