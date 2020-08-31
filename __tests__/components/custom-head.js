//  match snapshot 
import {render, screen} from '@testing-library/react';
import CustomHead from 'components/custom-head';
import {SITE_TITLE, SITE_DEFAULT_DESCRIPTION} from 'constants/config';

describe('', () => {
  it('', () => {
    const {container, getByText} = render(<CustomHead />);
    expect(getByText(SITE_TITLE)).toBeInTheDocument();
  });
});
