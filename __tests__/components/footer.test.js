import {render} from 'react-dom';
import {root, testMatchesSnapshot, testTextIsNotNull} from 'utils/test-helpers';
import Footer from 'components/footer';
import {getCurrentYear} from 'utils/site-config';
import {TITLE} from 'constants/config';

describe('<Footer /> ', () => {
  const component = <Footer />;
  testMatchesSnapshot(component);

  test('should render site title and current year', () => {
    render(component, root);

    const currentYear = getCurrentYear();
    const footerText = `@ ${TITLE.FOOTER} ${currentYear}`;

    testTextIsNotNull(root, footerText);
  });
});
