import {combineReducers} from 'redux';
import {intlReducer} from 'react-intl-redux';

let rootReducer = combineReducers({
    intl: intlReducer,
});

export default rootReducer;
