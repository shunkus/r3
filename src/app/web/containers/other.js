import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Other extends Component {
    render() {
        return (
            <div>
                <p style={styles.title}>
                    <FormattedMessage id="this.is.other.component"/>
                </p>
                <Link to="/" style={styles.link}>
                    <FormattedMessage id="back.to.index"/>
                </Link>
            </div>
        );
    }
}

const styles = {
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    link: {
        display: 'block',
        textAlign: 'center',
    }
};

export default connect((state) => {
    return state;
}, actions)(Other);
