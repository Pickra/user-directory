import React, { FunctionComponent } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<Props> = ({ children, ...rest }) => {
    const { className, ...props } = rest;
    const btnClasses = `button${className ? ` ${className}` : ''}`;

    return <button {...props} className={btnClasses}>{children}</button>;
};