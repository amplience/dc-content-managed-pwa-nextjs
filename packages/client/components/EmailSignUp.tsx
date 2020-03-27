import React from 'react';

import { Button, Modal, TextField, ButtonGroup, withStyles, WithStyles } from '@material-ui/core';

function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
}

const styles = theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderBottom: `6px solid ${theme.palette.primary.main}`,
        outline: 'none'
    },
    buttonGroup: {
        display: 'flex'
    },
    input: {
        flex: 1
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string
    style?: React.CSSProperties
}

const EmailSignUp: React.SFC<Props> = (props) => {
    const {
        classes,
        ...other
    } = props;

    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = React.useCallback((event) => {
        const value = event.target.value;

        setEmail(value);
    }, [setEmail, setError]);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleSubmit = React.useCallback(() => {
        const isValid = isValidEmail(email);
        setError(!isValid);

        if (isValid) {
            //stub: sign up for newsletter and then show modal
            handleOpenModal();
        }
    }, [email, setError, setOpen]);

    return (
        <div {...other}>
            <ButtonGroup className={classes.buttonGroup}>
                <TextField className={classes.input}
                    required
                    id="email"
                    label="Email"
                    placeholder="Enter email for weekly newsletter."
                    variant="outlined"
                    value={email}
                    error={error}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} variant="contained" color="primary">Sign Up</Button>
            </ButtonGroup>
            <Modal open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    className={classes.modal}>
                <div className={classes.paper}>
                    <h2 id="modal-title">Thank you for signing up!</h2>
                    <p id="modal-description">
                        You will receive an email at {email} shortly.
                    </p>
                    <p>
                        Please take a moment to review our <a href="">Privacy Policy</a>.
                    </p>
                </div>
            </Modal>
        </div>
    );
};

export default withStyles(styles)(EmailSignUp);