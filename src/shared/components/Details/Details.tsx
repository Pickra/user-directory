import React, { FunctionComponent } from 'react';

interface Props {
    children: React.ReactNode | React.ReactNode[];
    title: string;
}

export const Details: FunctionComponent<Props> = ({ title, children, ...rest }) => {
    return <details className='details' {...rest}>
        <summary tabIndex={0}>{title}</summary>
        {children}
    </details>;
};
