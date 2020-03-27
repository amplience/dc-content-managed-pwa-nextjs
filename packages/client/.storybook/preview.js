import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import createTheme from '../components/createTheme';
import GlobalStyle from '../components/GlobalStyle';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(storyFn => <>
  <ThemeProvider theme={createTheme()}>
    <CssBaseline />
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
</>);