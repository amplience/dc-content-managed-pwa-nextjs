import React, { PropsWithChildren } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import clsx from 'clsx';

const styles = theme => ({
    root: {
        position: 'relative' as 'relative',
    },
    content: {

    },
    overlay: {
        position: 'absolute' as 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

interface Props extends PropsWithChildren<WithStyles<typeof styles>> {
    className?: string;
    style?: React.CSSProperties;

    overlay?: React.ReactNode;
}

const Overlay: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        children,
        overlay,
        ...other
    } = props;
    

    return (
        <div className={clsx(classes.root, className)}>
            <div className={classes.content}>
                {children}
            </div>
            <div className={classes.overlay}>
                {overlay}
            </div>
        </div>
    );
};

export default withStyles(styles)(Overlay);