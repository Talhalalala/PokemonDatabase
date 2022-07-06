import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { PokemonTable } from './PokemonTable';

const Template: Story<ComponentProps<typeof PokemonTable>> = (args) => (
  <PokemonTable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: PokemonTable,
  title: 'Molecules/PokemonTable',
};
