import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { LegendTable } from './LegendTable';

describe('LegendTable', () => {
  it('should render', () => {
    render(<LegendTable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<LegendTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});