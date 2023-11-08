import React from 'react';
import { render } from '@testing-library/react';

import { ZAppContent } from './ZAppContent';

describe('ZAppContent', () => {
    it('should pass scrollId to scroll container', () => {
        const { container } = render(<ZAppContent scrollId="test-scroll-id" />);
        expect(container.querySelector('#test-scroll-id')).toBeTruthy();
    });
});
