import React, { FunctionComponent } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<Props> = ({ children, ...rest }) => {
    const { className, disabled, onClick, ...props } = rest;
    const disabledText = disabled ? <span className='visually-hidden'>Disabled </span> : '';
    
    const btnClasses = () => {
        let classes = `button`;
        if (className) { classes = `${classes} ${className}`; }
        if (disabled) { classes = `${classes} button--disabled`; }

        return classes;
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || typeof onClick !== 'function') { return; }
        onClick(e);
    }

    return <button {...props} className={btnClasses()} onClick={handleClick}>
        {disabledText}
        {children}
    </button>;
};