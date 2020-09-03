import {render, getQueriesForElement} from '@testing-library/react';

// change any types!

const root = document.createElement('div');

function testMatchesSnapshot(component: any) {
  test('matches snapshot', () => {
    const container = render(component);
    expect(container).toMatchSnapshot();
  });
}

function testTextIsNotNull(rootElement: any, text: string): void {
  const {getByText} = getQueriesForElement(rootElement);
  expect(getByText(text)).not.toBeNull();
}

export {root, testMatchesSnapshot, testTextIsNotNull};
