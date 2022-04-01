import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SearchBar } from './SearchBar';

const Template: Story<ComponentProps<typeof SearchBar>> = (args) => (
  <SearchBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: SearchBar,
  title: 'Atoms/SearchBar',
};
