import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { OrganismTable } from './OrganismTable';

describe('OrganismTable', () => {
  it('should render', () => {
    render(<OrganismTable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<OrganismTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});