import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PokemonImage } from './PokemonImage';

describe('PokemonImage', () => {
  it('should render', () => {
    render(<PokemonImage />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<PokemonImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});