import React, {Component} from 'react';
import {Provider} from 'react-intl-redux';
import {createStore, applyMiddleware} from 'redux';
import {addLocaleData} from 'react-intl';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import * as locales from '../../locales';
import reducers from '../../reducers';

import Index from './index';
import Other from './other';

// Locale
addLocaleData([...en, ...ja]);
let language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;
const languages = ['en', 'ja'];
if(languages.indexOf(language) == -1) {
    language = 'en';
}
const initialState = {
    intl: {
        defaultLocale: 'en',
        locale: language,
        messages: locales[language]
    }
}

// Routing
const middlewares = [];
export const store = applyMiddleware(...middlewares)(createStore)(reducers, initialState);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Index} />
                        <Route path="/other" component={Other} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

