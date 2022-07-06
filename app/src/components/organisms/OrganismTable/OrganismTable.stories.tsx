import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { OrganismTable } from './OrganismTable';

const Template: Story<ComponentProps<typeof OrganismTable>> = (args) => (
  <OrganismTable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: OrganismTable,
  title: 'Organisms/OrganismTable',
};
