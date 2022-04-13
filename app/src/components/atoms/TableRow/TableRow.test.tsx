import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  it('should render', () => {
    render(<TableRow />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<TableRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});