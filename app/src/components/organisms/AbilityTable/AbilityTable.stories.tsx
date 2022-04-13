import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { AbilityTable } from './AbilityTable';

const Template: Story<ComponentProps<typeof AbilityTable>> = (args) => (
  <AbilityTable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: AbilityTable,
  title: 'Organisms/AbilityTable',
};
