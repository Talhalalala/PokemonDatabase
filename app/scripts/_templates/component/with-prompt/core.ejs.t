---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.tsx
---
import React, { FC } from 'react';

type Props = {}

export const <%= name %>: FC<Props> = (props) => <div {...props} />;