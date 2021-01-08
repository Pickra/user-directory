import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

const children = 'children';

describe('<Button />', () => {
    it('should render children', () => {
        const { getByText } = render(<Button>{children}</Button>);
        getByText(children);
    });

    it('should have a "button" class by default', () => {
        const { container } = render(<Button>{children}</Button>);
        expect(container.firstChild).toHaveClass('button');
        expect(container.firstChild).not.toHaveClass('button--disabled');
    });

    it('should have a "button--disabled" class when the button is disabled', () => {
        const { container } = render(<Button disabled>{children}</Button>);
        expect(container.firstChild).toHaveClass('button--disabled');
    });

    it('should have disabled text when the button is disabled', () => {
        const { getByText } = render(<Button disabled>{children}</Button>);
        getByText('Disabled');
    });
});
