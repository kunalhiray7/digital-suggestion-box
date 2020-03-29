import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

class SuggestionForm extends React.Component {

    state = {
        reporter: undefined,
        assignee: undefined,
        request: undefined,
        description: undefined
    };

    onRequestChange = (e) => {
        this.setState({
            request: e.target.value
        })
    };

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Adding suggestion..", this.state);
        this.props.addSuggestion(this.state)
    };

    render() {
        return <React.Fragment>

            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Your Suggestion/Concern</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your suggestion/concern by filling following form.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="request"
                        label="Request"
                        fullWidth
                        onChange={this.onRequestChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                        onChange={this.onDescriptionChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    }
}


export default SuggestionForm;
