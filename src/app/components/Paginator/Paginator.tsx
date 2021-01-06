import React, { FunctionComponent } from 'react';
import { Button } from '../Button';

interface Props {
    page: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    className?: string;
}

export const Paginator: FunctionComponent<Props> = ({ page, className, onNextClick, onPrevClick }) => {
    const classes = `paginator${className ? ` ${className}`: ''}`;

    return <p className={classes}>
        <Button onClick={onPrevClick}>Prev Page</Button>
        <span>Page # {page}</span>
        <Button onClick={onNextClick}>Next Page</Button>
    </p>;
};
