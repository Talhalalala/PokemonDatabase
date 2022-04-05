import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { SearchCard } from './SearchCard';

describe('SearchCard', () => {
  it('should render', () => {
    render(<SearchCard />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<SearchCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});