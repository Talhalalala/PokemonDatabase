import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AbilityT } from './AbilityT';

describe('AbilityT', () => {
  it('should render', () => {
    render(<AbilityT />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<AbilityT />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});