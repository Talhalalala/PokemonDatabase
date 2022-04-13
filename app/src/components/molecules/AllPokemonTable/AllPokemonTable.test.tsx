import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AllPokemonTable } from './AllPokemonTable';

describe('AllPokemonTable', () => {
  it('should render', () => {
    render(<AllPokemonTable />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<AllPokemonTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});