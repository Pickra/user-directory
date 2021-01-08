import React, { FunctionComponent } from 'react';

export const defaultLoaderText = 'are we there yet?';

interface Props {
    show: boolean;
    text?: string;
}

export const Loader: FunctionComponent<Props> = ({ show, text = defaultLoaderText }) => {
    return <p className='loader-container' aria-live='polite'>
        {show ? <span className='loader'>{text}</span> : ''}
    </p>;
};