import {UPDATE} from 'react-intl-redux';
import * as locales from '../../../src/app/locales';
import * as actions from '../../../src/app/actions';

describe('actions', () => {
    it('should change the locale correctly', () => {
        const expectedAction = {
            type: UPDATE,
            payload: {
                locale: 'ja',
                messages: locales['ja']
            }
        }
        expect(actions.changeLocale('ja')).toEqual(expectedAction);
    });
});