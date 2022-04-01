import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { GrassButton } from './GrassButton';

const Template: Story<ComponentProps<typeof GrassButton>> = (args) => (
  <GrassButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: GrassButton,
  title: 'Atoms/GrassButton',
};
