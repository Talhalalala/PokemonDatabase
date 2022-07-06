import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { StatsBox } from './StatsBox';

describe('StatsBox', () => {
  it('should render', () => {
    render(<StatsBox />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<StatsBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});