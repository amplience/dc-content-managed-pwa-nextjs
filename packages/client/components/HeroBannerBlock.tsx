import React from 'react';
import { withStyles, WithStyles, Typography, Theme, Button } from '@material-ui/core';
import clsx from 'clsx';
import Overlay from './Overlay';

import { fade } from '@material-ui/core/styles/colorManipulator';
import { getImageURL, ImageScaleMode } from '../utils/getImageURL';

const styles = (theme: Theme) => ({
    root: {
    },
    image: {
        width: '100%'
    },
    overlay: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlayPanel: {
        background: fade(theme.palette.background.default, 0.9),
        padding: '20px 30px',
        textAlign: 'center' as 'center'
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;

    image: string;

    title: string;
    description?: string;

    callToAction?: string;
    callToActionHref?: string;
}

const HeroBannerBlock: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        image,
        title,
        description,
        callToAction,
        callToActionHref,
        ...other
    } = props;

    const imageUrl = getImageURL(image, {
        width: 3000,
        upscale: false,
        scaleMode: ImageScaleMode.ASPECT_RATIO,
        aspectRatio: '16:5'
    });

    return (
        <div className={clsx(classes.root, className)} {...other}>
            <Overlay overlay={(
                <div className={classes.overlay}>
                    <div className={classes.overlayPanel}>
                        <Typography variant="h2">{title}</Typography>
                        {
                            description ? <p>{description}</p> : null
                        }
                        {
                            callToAction ? (
                                <a href={callToActionHref}>
                                    <Button variant="outlined">{callToAction}</Button>
                                </a>
                            ) : null
                        }
                    </div>
                </div>
            )}>
                <img className={classes.image} src={imageUrl} />
            </Overlay>
        </div>
    );
};

export default withStyles(styles)(HeroBannerBlock);