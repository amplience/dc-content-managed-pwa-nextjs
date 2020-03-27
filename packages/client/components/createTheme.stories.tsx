import React from 'react';
import { storiesOf } from "@storybook/react";

import { Button, TextField } from '@material-ui/core';

storiesOf('Theme', module)
    .add('Button', () => <Button>Click Me!</Button>)
    .add('Contained Button', () => <Button variant="contained">Click Me!</Button>)
    .add('Outlined Button', () => <Button variant="outlined">Click Me!</Button>)
    .add('Outlined TextField', () => <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        variant="outlined"
    />)


    