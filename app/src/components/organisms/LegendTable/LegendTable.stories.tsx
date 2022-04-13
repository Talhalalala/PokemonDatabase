import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LegendTable } from './LegendTable';

const Template: Story<ComponentProps<typeof LegendTable>> = (args) => (
  <LegendTable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: LegendTable,
  title: 'Organisms/LegendTable',
};
