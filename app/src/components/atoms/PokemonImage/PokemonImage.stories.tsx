import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { PokemonImage } from './PokemonImage';

const Template: Story<ComponentProps<typeof PokemonImage>> = (args) => (
  <PokemonImage {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: PokemonImage,
  title: 'Atoms/PokemonImage',
};
