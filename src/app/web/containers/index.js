import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as actions from '../../actions';

import Instructions from '../components/instructions';

class App extends Component {
    render() {
        return (
            <div>
                <p style={styles.welcome}>
                    <FormattedMessage id="welcome.to.r3"/>
                </p>
                <Instructions/>
            </div>
        );
    }
}

const styles = {
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
};

export default connect((state) => {
    return state;
}, actions)(App);
