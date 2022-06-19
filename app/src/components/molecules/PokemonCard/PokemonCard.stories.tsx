import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { PokemonCard } from './PokemonCard';

const Template: Story<ComponentProps<typeof PokemonCard>> = (args) => (
  <PokemonCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: PokemonCard,
  title: 'Molecules/PokemonCard',
};
