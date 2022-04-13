import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { TableData } from './TableData';

describe('TableData', () => {
  it('should render', () => {
    render(<TableData />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<TableData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});