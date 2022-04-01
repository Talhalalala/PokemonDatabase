import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ElementButton } from './ElementButton';

describe('ElementButton', () => {
  it('should render', () => {
    render(<ElementButton />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<ElementButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});