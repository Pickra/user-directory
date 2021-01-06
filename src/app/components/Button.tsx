import React, { FunctionComponent } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<Props> = ({ children, ...rest }) => <button {...rest}>
    {children}
</button>;