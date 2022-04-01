import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { ElementButton } from './ElementButton';

const Template: Story<ComponentProps<typeof ElementButton>> = (args) => (
  <ElementButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: ElementButton,
  title: 'Atoms/ElementButton',
};
