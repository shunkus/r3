import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import * as actions from '../../actions';

export class Instructions extends Component {
    renderChangeLocale() {
        if(this.props.intl.locale == 'en') {
            return (
                <Button title={this.props.intl.messages["change.locale.to.ja"]} onPress={() => { this.props.changeLocale('ja'); }}/>
            );
        }else{
            return (
                <Button title={this.props.intl.messages["change.locale.to.en"]} onPress={() => { this.props.changeLocale('en'); }}/>
            );
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.instructions}>
                    <FormattedMessage id="to.get.started" values={{ os: Platform.OS }}/>
                </Text>
                <Text style={styles.instructions}>
                    {this.props.intl.messages["how.to.reload." + Platform.OS]}{'\n'}
                    {this.props.intl.messages["how.to.open.dev.settings." + Platform.OS]}
                </Text>
                {this.renderChangeLocale()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect((state) => {
    return state;
}, actions)(Instructions);
