import React, { PropsWithChildren } from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

const styles = (theme: Theme) => ({
    root: {
        padding: '20px',    
    },
    contained: {
        background: theme.palette.grey[200]
    },
    content: {
        margin: '0 auto',
        width: 'calc(100% - 12.5vw * 2)',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    title: {
        textAlign: 'center' as 'center',
        textTransform: 'uppercase' as 'uppercase',

        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            paddingLeft: '10vw',
            paddingRight: '10vw'
        }
    }
});

export enum SectionVariant {
    DEFAULT = 'default',
    CONTAINED = 'contained'
}

interface Props extends PropsWithChildren<WithStyles<typeof styles>> {
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    variant?: SectionVariant;
}

const Section: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        title,
        variant = SectionVariant.DEFAULT,
        children,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className, {
            [classes.contained]: variant === SectionVariant.CONTAINED
        })} {...other}>
            <div className={classes.content}>
                {
                    title ? <h2 className={classes.title}>{title}</h2> : null
                }
                {children}
            </div>
        </div>
    );
};

export default withStyles(styles)(Section);