import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { LegendaryList } from './LegendaryList';

describe('LegendaryList', () => {
  it('should render', () => {
    render(<LegendaryList />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<LegendaryList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});