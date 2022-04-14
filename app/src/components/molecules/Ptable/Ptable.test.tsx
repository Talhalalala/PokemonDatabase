import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Ptable } from './Ptable';

describe('Ptable', () => {
  it('should render', () => {
    render(<Ptable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Ptable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
