import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Logo } from './Logo';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});