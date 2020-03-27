import React from 'react';
import { withStyles, WithStyles, Theme, Typography } from '@material-ui/core';
import Section, { SectionVariant } from './Section';
import CallToAction from './CallToAction';
import { getImageURL, ImageScaleMode } from '../utils/getImageURL';

const styles = (theme: Theme) => ({
    root: {
    },
    list: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row' as 'row',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-between'
    },
    listItem: {
        width: '30%',

        [theme.breakpoints.down('md')]: {
            width: '45%'
        },

        [theme.breakpoints.down('sm')]: {
            width: '95%'
        }
    },
    listItemImage: {
        width: '100%',
        transition: '0.5s',
        '&:hover': {
            transform: 'scale(1.025)'
        }
    },
    listItemText: {
        marginTop: '15px'
    }
});

export type GalleryItem = {
    image: string;
    title: string;
    callToAction: string;
    callToActionHref: string;
};

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;

    title?: string;
    items?: GalleryItem[];
}

const GalleryBlock: React.SFC<Props> = (props) => {
    const {
        classes,
        items = [],
        ...other
    } = props;

    return (
        <Section variant={SectionVariant.CONTAINED} {...other}>
            <ul className={classes.list}>
                {
                    items.map(item => {
                        const imageUrl = getImageURL(item.image, {
                            width: 600,
                            height: 450,
                            scaleMode: ImageScaleMode.CROP
                        });

                        return <li className={classes.listItem}>
                            <img className={classes.listItemImage} src={imageUrl} />
                            <div className={classes.listItemText}>
                                <Typography variant="h5">
                                    {item.title}
                                </Typography>
                                <CallToAction href={item.callToActionHref}>
                                    {item.callToAction}
                                </CallToAction>
                            </div>
                        </li>
                    })
                }
            </ul>
        </Section>
    );
};

export default withStyles(styles)(GalleryBlock);