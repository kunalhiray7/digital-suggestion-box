import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GeneralRequest from "./generalRequest";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class DashboardTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="General Requests" />
                        <Tab label="My Requests" />
                        <Tab label="Statistics" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><GeneralRequest/></TabContainer>}
                {value === 1 && <TabContainer>My Requests</TabContainer>}
                {value === 2 && <TabContainer>Statistics</TabContainer>}
            </div>
        );
    }
}

DashboardTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardTabs);