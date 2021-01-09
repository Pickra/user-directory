import React, { FunctionComponent } from 'react';
import { Button } from '../Buttons/Button';

interface Props {
    errors: {
        [key: string]: {
            name: string;
            close: () => void;
        };
    }
}

export const ErrorNotification: FunctionComponent<Props> = ({ errors }) => {
    const errorList = Object.keys(errors)
        .map(key => {
            const err = errors[key];
            if (!err.name) { return undefined; }

            return <li className='errors__item' key={key}>
                {err.name}
                <Button onClick={err.close} />
            </li>;
        })
        .filter(Boolean);
            
    const hasErrors = !!errorList.length;
    const ulClasses = `errors${!!hasErrors ? ' errors--active' : ''}`;

    return <ul className={ulClasses} aria-live='polite'>{errorList}</ul>;
};
