import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GrassButton } from './GrassButton';

describe('GrassButton', () => {
  it('should render', () => {
    render(<GrassButton />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<GrassButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});