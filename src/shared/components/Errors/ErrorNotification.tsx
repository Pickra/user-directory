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
    const errorList = Object.values(errors)
        .filter(val => !!val.name)
        .map(val => <li className='errors__item' key={val.name}>
            <strong>{val.name}</strong>
            <Button className='button--danger' onClick={val.close}>Close</Button>
        </li>);

    const hasErrors = !!errorList.length;
    const ulClasses = `errors${!!hasErrors ? ' errors--active' : ''}`;

    return <ul className={ulClasses} aria-live='polite'>{errorList}</ul>;
};
