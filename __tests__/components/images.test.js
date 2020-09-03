import {render} from '@testing-library/react';
import Images from 'components/images';

// tests
// id: given an id, should give a valid URL
// url: given a url, should render image
// if no url is given, should render nothing
// title: given a title, should render the title
// if no title, should render nothing

describe('<Images /> ', () => {
  test('Matches snapshot', () => {
    const container = render(<Images />);
    expect(container).toMatchSnapshot();
  });
});
