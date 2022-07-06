import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('should render', () => {
    render(<SearchBar />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});