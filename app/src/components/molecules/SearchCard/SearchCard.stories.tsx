import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SearchCard } from './SearchCard';

const Template: Story<ComponentProps<typeof SearchCard>> = (args) => (
  <SearchCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: SearchCard,
  title: 'Molecules/SearchCard',
};
