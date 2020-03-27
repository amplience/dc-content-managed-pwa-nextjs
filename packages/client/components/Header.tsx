import React, { useState, useRef, useEffect, useLayoutEffect, PropsWithChildren } from 'react';
import { withStyles, WithStyles, Theme, IconButton } from '@material-ui/core';
import Logo from './Logo';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => ({
    root: {
        height: 'auto'
    },
    menuWrap: {
        backgroundColor: theme.palette.background.default,
        zIndex: 9999
    },
    sticky: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0
    },
    menu: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        padding: '10px 58px',
        justifyContent: 'space-between'
    },
    burgerMenuWrap: {
        position: 'absolute' as 'absolute',
        left: '10px'
    },
    logoWrap: {
    },
    desktopSearchWrap: {
        width: '40%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    mobileSearchWrap: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'unset'
        }
    },
    actionsWrap: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center'
    },
    navigationWrap: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
});

interface Props extends PropsWithChildren<WithStyles<typeof styles>> {
    className?: string;
    style?: React.CSSProperties;

    actions?: React.ReactNode;
    search?: React.ReactNode;
    navigation?: React.ReactNode;

    onToggleSidebar?: () => void;
}

const Header: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        style,
        actions,
        search,
        navigation,
        children,
        onToggleSidebar,
        ...other
    } = props;

    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const menuRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState(null);

    useLayoutEffect(() => {
        if (menuRef.current) {
            setMenuHeight(menuRef.current.offsetHeight);
        }
    }, [menuRef.current]);

    return (
        <header className={clsx(classes.root, className)} style={{
            ...style,
            height: isSticky ? menuHeight : 'auto'
        }} ref={ref} {...other}>
            <div className={clsx(classes.menuWrap, {
                [classes.sticky]: isSticky
            })} ref={menuRef} {...other}>
                <div className={classes.menu}>
                    <div className={classes.burgerMenuWrap}>
                        <IconButton onClick={onToggleSidebar}><MenuIcon /></IconButton>
                    </div>
                    <div className={classes.logoWrap}>
                        <Logo height={48} />
                    </div>
                    <div className={classes.desktopSearchWrap}>
                        {search}
                    </div>
                    <div className={classes.actionsWrap}>
                        {actions}
                    </div>
                </div>
                <div className={classes.mobileSearchWrap}>
                    {search}
                </div>
                <div className={classes.navigationWrap}>
                    {navigation}
                </div>
            </div>
        </header>
    );
};

export default withStyles(styles)(Header);