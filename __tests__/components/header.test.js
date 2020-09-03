import {render, screen} from '@testing-library/react';
import Link from 'next/link';
import Header from 'components/header';
import Nav from 'components/nav';
import {HeaderContainer, MainHeader} from 'styles/typography/header';
import {SITE_TITLE} from 'constants/config';

describe('<Header /> ', () => {
  test('matches snapshot', () => {
    const container = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
