import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PokemonTable } from './PokemonTable';

describe('PokemonTable', () => {
  it('should render', () => {
    render(<PokemonTable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<PokemonTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});