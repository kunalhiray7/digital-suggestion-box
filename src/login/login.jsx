import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Login extends React.Component {
    handleClick = () => {
        console.log("Logging in");
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Digital Suggestion Box
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField
                            id="standard-with-placeholder"
                            label="Username"
                            placeholder="Username"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <Button variant="contained" color="secondary" onClick={this.handleClick}>
                            Login
                        </Button>
                    </Grid>
                </form>
            </div>
        );
    }
}


export default withRoot(withStyles(styles)(Login));