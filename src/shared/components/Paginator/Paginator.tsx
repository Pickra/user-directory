import React, { FunctionComponent, useRef } from 'react';
import { Button } from '../Button';

interface Props {
    page: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    onSpecificPageClick: (page: number) => void;
    classes?: { paginator?: string; input?: string;};
}

export const Paginator: FunctionComponent<Props> = ({ page, classes, onNextClick, onPrevClick, onSpecificPageClick }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const paginatorClasses = `paginator${classes && classes.paginator ? ` ${classes.paginator}`: ''}`;
    const inputClasses = `input${classes && classes.input ? ` ${classes.paginator}`: ''}`;
    const disablePrevButton = page === 1;
    
    const onInputPage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current || !inputRef.current.value) { return; }
        onSpecificPageClick(+inputRef.current.value);
    };

    return <div>
        <p className={paginatorClasses}>
            <Button onClick={onPrevClick} disabled={disablePrevButton}>Prev Page</Button>
            <span>Page # {page}</span>
            <Button onClick={onNextClick}>Next Page</Button>
        </p>
        <form onSubmit={onInputPage}>
            <label>
                <span>Select Page #</span>
                <input className={inputClasses} defaultValue={page} ref={inputRef}/>
            </label>
            <Button type='submit'>Go!</Button>
        </form>
    </div>;
};
