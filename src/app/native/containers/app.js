import React, {Component} from 'react';
import {NativeModules, Platform, Text} from 'react-native';
import {Provider} from 'react-intl-redux';
import {createStore, applyMiddleware} from 'redux';
import {addLocaleData} from 'react-intl';
import {Scene, Router} from 'react-native-router-flux';

// for android
global.Intl = "";
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

import * as locales from '../../locales';
import reducers from '../../reducers';

addLocaleData([...en, ...ja]);

const languages = ['en', 'ja'];
let language;
if (Platform.OS === 'android') {
    language = NativeModules.I18nManager.localeIdentifier.replace(/_.*/, '');
} else if(Platform.OS === 'ios') {
    if(NativeModules.SettingsManager){
        language = NativeModules.SettingsManager.settings.AppleLocale.replace(/_.*/, '');
    }
}
if(languages.indexOf(language) == -1){
    language = 'en';
}

const initialState = {
    intl: {
        defaultLocale: 'en',
        locale: language,
        messages: locales[language],
        textComponent: Text
    }
}
const middlewares = [];
export const store = applyMiddleware(...middlewares)(createStore)(reducers, initialState);

import Index from './index';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="index" component={Index} initial={true} title="R3" />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
