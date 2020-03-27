import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/core';
import createTheme from '../components/createTheme';
import GlobalStyle from '../components/GlobalStyle';

export default class App extends NextApp {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        const theme = createTheme();

        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}