import {updateIntl} from 'react-intl-redux';
import * as locales from '../locales';

export function changeLocale(locale) {
    const messages = locales[locale];
    return updateIntl({locale, messages});
}

