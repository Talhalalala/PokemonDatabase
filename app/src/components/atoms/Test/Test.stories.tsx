import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Test } from './Test';

const Template: Story<ComponentProps<typeof Test>> = (args) => (
  <Test {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Test,
  title: 'Atoms/Test',
};
