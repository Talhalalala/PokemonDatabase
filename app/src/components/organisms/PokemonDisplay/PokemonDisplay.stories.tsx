import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { PokemonDisplay } from './PokemonDisplay';

const Template: Story<ComponentProps<typeof PokemonDisplay>> = (args) => (
  <PokemonDisplay {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: PokemonDisplay,
  title: 'Organisms/PokemonDisplay',
};
