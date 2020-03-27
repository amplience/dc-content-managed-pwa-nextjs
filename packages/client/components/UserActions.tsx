import React from 'react';
import { withStyles, WithStyles, IconButton, Badge, SvgIcon } from '@material-ui/core';

import LocatorIcon from '../public/svg/locator.svg';
import AccountIcon from '../public/svg/account.svg';
import CartIcon from '../public/svg/cart.svg';

const styles = theme => ({
    icon: {
        width: '30px',
        height: '30px'
    }
});

interface Props extends WithStyles<typeof styles> {
}

const UserActions: React.SFC<Props> = (props) => {
    const {
        classes
    } = props;

    return (
        <>
            <IconButton size="small">
                <LocatorIcon className={classes.icon} />
            </IconButton>
            <IconButton size="small">
                <AccountIcon className={classes.icon} />
            </IconButton>
            <IconButton size="small">
                <Badge badgeContent={4} color="secondary">
                    <CartIcon className={classes.icon} />
                </Badge>
            </IconButton>
        </>
    );
};

export default withStyles(styles)(UserActions);