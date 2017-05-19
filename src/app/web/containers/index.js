import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';

import Instructions from '../components/instructions';

class Index extends Component {
    render() {
        return (
            <div>
                <p style={styles.welcome}>
                    <FormattedMessage id="welcome.to.r3"/>
                </p>
                <Instructions/>
                <Link to="/other" style={styles.link}>
                    <FormattedMessage id="show.other.component"/>
                </Link>
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
    link: {
        display: 'block',
        textAlign: 'center',
        margin: 10,
    }
};

export default connect((state) => {
    return state;
}, actions)(Index);
