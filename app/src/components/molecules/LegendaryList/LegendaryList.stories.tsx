import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LegendaryList } from './LegendaryList';

const Template: Story<ComponentProps<typeof LegendaryList>> = (args) => (
  <LegendaryList {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: LegendaryList,
  title: 'Molecules/LegendaryList',
};
