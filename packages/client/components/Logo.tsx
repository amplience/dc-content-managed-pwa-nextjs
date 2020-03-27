import React from 'react';
import Link from 'next/link';
import { withStyles, WithStyles } from '@material-ui/core';

const styles = theme => ({
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
}

const Logo: React.SFC<Props> = (props) => {
    const {
        classes,
        ...other
    } = props;

    return (
        <Link href="/">
            <a>
                <img {...other} alt="" src="/img/logo.png" />
            </a>
        </Link>
    );
};

export default withStyles(styles)(Logo);