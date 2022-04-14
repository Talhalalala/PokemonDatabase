import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PokemonDisplay } from './PokemonDisplay';

describe('PokemonDisplay', () => {
  it('should render', () => {
    render(<PokemonDisplay />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<PokemonDisplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
