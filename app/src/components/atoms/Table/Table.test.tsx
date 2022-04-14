import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Table } from './Table';

describe('Table', () => {
  it('should render', () => {
    render(<Table />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Table />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
