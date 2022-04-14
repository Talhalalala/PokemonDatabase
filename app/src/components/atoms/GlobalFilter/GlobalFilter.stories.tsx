import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { GlobalFilter } from './GlobalFilter';

const Template: Story<ComponentProps<typeof GlobalFilter>> = (args) => <GlobalFilter {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: GlobalFilter,
  title: 'Atoms/GlobalFilter',
};
