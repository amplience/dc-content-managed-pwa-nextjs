import React from 'react';
import { withStyles, WithStyles, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';

const styles = theme => ({
    root: {
        width: '100%'
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
}

const SearchBox: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        ...other
    } = props;

    return (
        <TextField className={clsx(classes.root, className)} {...other} 
            placeholder="Search"
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    );
};

export default withStyles(styles)(SearchBox);