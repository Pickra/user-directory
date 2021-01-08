import React, { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: React.ReactNode;
    classes?: { label?: string, input?: string; };
}

export const Input = forwardRef<HTMLInputElement, Props>((
    { classes, labelText, ...rest },
    ref
) => {
    const labelClasses = `${classes && classes.label ? ` ${classes.label}`: ''}`;
    const inputClasses = `input${classes && classes.input ? ` ${classes.input}`: ''}`;

    return <label className={labelClasses}>
        <span className='input__label-text'>{labelText}</span>
        <input className={inputClasses} ref={ref} {...rest} />
    </label>;
});
