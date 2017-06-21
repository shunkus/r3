import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-intl-redux';
import {MemoryRouter} from 'react-router-dom';

import {store} from '../../../../src/app/web/containers/app';
import Index from '../../../../src/app/web/containers/index';

describe('web index container', () => {
    it('should be rendered correctly', () => {
        const tree = renderer.create(<Provider store={store}><MemoryRouter><Index/></MemoryRouter></Provider>);
    });
});
