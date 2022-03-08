import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Test } from './Test';

describe('Test', () => {
  it('should render', () => {
    render(<Test />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Test />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});