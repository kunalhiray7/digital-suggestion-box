import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actionsAndReducers/actions';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    return {
        users: state.suggestionBox.users,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
