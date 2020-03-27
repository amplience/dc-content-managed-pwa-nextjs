import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Section from './Section';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
    description: {
        textAlign: 'center' as 'center'
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;

    title?: string;
    description?: string;
}

const EditorialBlock: React.SFC<Props> = (props) => {
    const {
        classes,
        title,
        description,
        ...other
    } = props;

    return (
        <Section title={title} {...other}>
            <ReactMarkdown className={classes.description} source={description} />
        </Section>
    );
};

export default withStyles(styles)(EditorialBlock);