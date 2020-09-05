import {render} from '@testing-library/react';
import Nav from 'components/nav';
import {navItems} from 'constants/config';

describe('<Nav /> ', () => {
  test('matches snapshot', () => {
    const container = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
