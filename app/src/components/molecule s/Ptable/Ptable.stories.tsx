import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Ptable } from './Ptable';

const Template: Story<ComponentProps<typeof Ptable>> = (args) => (
  <Ptable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Ptable,
  title: 'Molecules/Ptable',
};
