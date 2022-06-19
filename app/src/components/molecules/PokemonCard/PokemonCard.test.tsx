import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PokemonCard } from './PokemonCard';

describe('PokemonCard', () => {
  it('should render', () => {
    render(<PokemonCard />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<PokemonCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});