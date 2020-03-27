import React, { PropsWithChildren } from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import Link from 'next/link';
import clsx from 'clsx';

const styles = (theme: Theme) => ({
    root: {
    },

    link: {
        display: 'inline-block',
        position: 'relative' as 'relative',

        fontSize: 14,
        letterSpacing: '0.05em',
        textTransform: 'none' as 'none',
        textDecoration: 'none',
        margin: '10px 0',
        color: theme.palette.text.primary,
        borderBottom: '2px solid rgba(0,0,0,0)',
        transition: 'all 0.3s',

        '&:hover': {
            borderBottom: '2px solid currentColor'
        }
    }
});

interface Props extends PropsWithChildren<WithStyles<typeof styles>> {
    className?: string;
    style?: React.CSSProperties;
    href: string;
}

const CallToAction: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        href,
        children,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className)} {...other}>
            <Link href={href}>
                <a className={classes.link}>
                    {children}
                </a>
            </Link>
        </div>
    );
};

export default withStyles(styles)(CallToAction);