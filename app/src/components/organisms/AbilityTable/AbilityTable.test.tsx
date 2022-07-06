import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AbilityTable } from './AbilityTable';

describe('AbilityTable', () => {
  it('should render', () => {
    render(<AbilityTable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<AbilityTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});