import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { StatsBox } from './StatsBox';

const Template: Story<ComponentProps<typeof StatsBox>> = (args) => (
  <StatsBox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: StatsBox,
  title: 'Atoms/StatsBox',
};
