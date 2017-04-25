import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-intl-redux';

import {store} from '../../../../src/app/web/containers/app';
import Instructions from '../../../../src/app/web/components/instructions';

describe('web instructions component', () => {
    it('should be rendered correctly', () => {
        const tree = renderer.create(<Provider store={store}><Instructions/></Provider>);
    });
});
