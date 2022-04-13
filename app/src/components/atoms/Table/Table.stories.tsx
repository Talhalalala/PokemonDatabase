import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Table } from './Table';

const Template: Story<ComponentProps<typeof Table>> = (args) => (
  <Table {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Table,
  title: 'Atoms/Table',
};
