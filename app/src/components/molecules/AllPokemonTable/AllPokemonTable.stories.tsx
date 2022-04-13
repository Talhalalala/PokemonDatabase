import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { AllPokemonTable } from './AllPokemonTable';

const Template: Story<ComponentProps<typeof AllPokemonTable>> = (args) => (
  <AllPokemonTable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: AllPokemonTable,
  title: 'Molecules/AllPokemonTable',
};
