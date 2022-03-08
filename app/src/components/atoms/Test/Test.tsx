import React, { FC } from 'react';

type Props = {}

export const Test: FC<Props> = (props) => 
    <div {...props} >
        <h1>Test 2</h1>
    </div>;