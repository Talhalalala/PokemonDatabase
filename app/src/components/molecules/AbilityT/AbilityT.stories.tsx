import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { AbilityT } from './AbilityT';

const Template: Story<ComponentProps<typeof AbilityT>> = (args) => (
  <AbilityT {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: AbilityT,
  title: 'Molecules/AbilityT',
};
