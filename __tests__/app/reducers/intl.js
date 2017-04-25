import {initialState, intlReducer, UPDATE} from 'react-intl-redux';
import * as locales from '../../../src/app/locales';

describe('texts reducer', () => {
    it('should return the correct messages', () => {
        expect(intlReducer(initialState, {
            type: UPDATE,
            payload: {
                locale: 'ja',
                messages: locales['ja']
            }
        })).toEqual(
            {
                locale: "ja",
                messages: locales['ja']
            }
        );
    });
});