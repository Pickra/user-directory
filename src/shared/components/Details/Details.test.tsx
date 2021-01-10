import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Details } from './Details';

expect.extend(toHaveNoViolations);

describe('<Details />', () => {
    it('should be accessible', async () => {
        const { container } = render(<Details title='🐈'><div>simply the best</div></Details>);

        const results = await axe(container);        
        expect(results).toHaveNoViolations();
    });
});
