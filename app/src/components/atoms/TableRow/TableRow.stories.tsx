import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TableRow } from './TableRow';

const Template: Story<ComponentProps<typeof TableRow>> = (args) => (
  <TableRow {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: TableRow,
  title: 'Atoms/TableRow',
};
