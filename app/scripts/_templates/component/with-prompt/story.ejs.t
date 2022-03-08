---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { <%=name%> } from './<%=name%>';

const Template: Story<ComponentProps<typeof <%=name%>>> = (args) => (
  <<%=name%> {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: <%=name%>,
  title: '<%=h.changeCase.sentence(atomic)%>s/<%=name%>',
};
