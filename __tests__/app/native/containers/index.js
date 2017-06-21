import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-intl-redux';
import {MemoryRouter} from 'react-router-native';

import {store} from '../../../../src/app/native/containers/app';
import Index from '../../../../src/app/native/containers/index';

describe('native index container', () => {
    it('should be rendered correctly', () => {
        const tree = renderer.create(<Provider store={store}><MemoryRouter><Index/></MemoryRouter></Provider>);
    });
});
