import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as actions from '../../actions';

class Instructions extends Component {
    renderChangeLocale() {
        if(this.props.intl.locale == 'en') {
            return (
                <a style={styles.button} onClick={() => { this.props.changeLocale('ja'); }}>
                    <FormattedMessage id="change.locale.to.ja" />
                </a>
            );
        }else{
            return (
                <a style={styles.button} onClick={() => { this.props.changeLocale('en'); }}>
                    <FormattedMessage id="change.locale.to.en" />
                </a>
            );
        }
    }
    render() {
        return (
            <div>
                <p style={styles.instructions}>
                    <FormattedMessage id="to.get.started" values={{ os: "web" }}/>
                </p>
                <p style={styles.instructions}>
                    {this.props.intl.messages["how.to.reload.web"]}
                </p>
                <p style={styles.instructions}>
                    {this.renderChangeLocale()}
                </p>
            </div>
        );
    }
}

let styles = {
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        padding: 5,
        border: '1px solid #CCC',
        borderRadius: 4,
        cursor: 'pointer'
    }
}

export default connect((state) => {
    return state;
}, actions)(Instructions);