import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TableData } from './TableData';

const Template: Story<ComponentProps<typeof TableData>> = (args) => (
  <TableData {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: TableData,
  title: 'Atoms/TableData',
};
