import React from 'react';
import { withStyles, WithStyles, IconButton } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const styles = theme => ({
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties
}

const SocialMediaLinks: React.SFC<Props> = (props) => {
    const {
        classes,
        ...other
    } = props;

    return (
        <>
            <a href="https://www.facebook.com/anyafinn" target="_blank"><IconButton size="small"><FacebookIcon /></IconButton></a> 
            <a href="https://twitter.com/anyafinn" target="_blank"><IconButton size="small"><TwitterIcon /></IconButton></a>
            <a href="https://www.instagram.com/anyafinn/" target="_blank"><IconButton size="small"><InstagramIcon /></IconButton></a>
            <a href="https://www.pinterest.com/anyafinn/" target="_blank"><IconButton size="small"><PinterestIcon /></IconButton></a> 
        </>
    );
};

export default withStyles(styles)(SocialMediaLinks);