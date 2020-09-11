import Nav from 'components/navigation';
import {testMatchesSnapshot} from 'utils/test-helpers';
import {navItems} from 'constants/config';

describe('<Nav /> ', () => {
  const component = <Nav />;
  testMatchesSnapshot(component);
});
