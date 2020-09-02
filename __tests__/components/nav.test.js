import {render} from '@testing-library/react';
import Nav from 'components/nav';
import {navItems} from 'utils/site-config';

describe('<Nav /> ', () => {
  test('Matches snapshot', () => {
    const container = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
