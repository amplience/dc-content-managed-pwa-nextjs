import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core';

function createTheme() {
    return createMuiTheme({
        palette: {
            primary: {
                main: '#000'
            },
            secondary: {
                main: '#d54d4d'
            },
            background: {
                default: '#fff'
            },
            grey: {
                "A100": "#333333"
            },
            text: {
                primary: '#333333'
            },
            divider: '#d5d5d5'
        },
        shape: {
            borderRadius: 0
        }
    });
};

export type Theme = MuiTheme;

export default createTheme;