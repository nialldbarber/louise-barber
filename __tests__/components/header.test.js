import {render, screen} from '@testing-library/react';
import {root, testMatchesSnapshot} from 'utils/test-helpers';
import Header from 'components/header';
import {HeaderContainer, MainHeader} from 'styles/typography/header';
import {HeaderContainer} from 'styles/components/header';
import {TITLE} from 'constants/config';

describe('<Header /> ', () => {
  const component = <Header />;
  testMatchesSnapshot(component);
});
