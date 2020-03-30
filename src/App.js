import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {paths} from "./common/constants";
import LoginContainer from "./login/loginContainer";
import DashboardContainer from "./dashboard/dashboardContainer";
import configureStore from "./store";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={paths.LOGIN} component={LoginContainer}/>
                        <Route exact path={paths.DASHBOARD} component={DashboardContainer}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
