import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GlobalFilter } from './GlobalFilter';

describe('GlobalFilter', () => {
  it('should render', () => {
    render(<GlobalFilter />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<GlobalFilter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});