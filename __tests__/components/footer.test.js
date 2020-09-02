import {render} from '@testing-library/react';
import Footer from 'components/footer';
import {getCurrentYear} from 'utils/site-config';
import {SITE_TITLE} from 'constants/config';

describe('<Footer /> ', () => {
  test('Matches snapshot', () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
})
