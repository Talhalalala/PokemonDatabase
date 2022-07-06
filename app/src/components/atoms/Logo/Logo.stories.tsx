import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Logo } from './Logo';

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Logo,
  title: 'Atoms/Logo',
};
