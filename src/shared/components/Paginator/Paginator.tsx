import React, { FunctionComponent, useRef } from 'react';
import { Button } from '../Buttons/Button';

interface Props {
    page: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    onSpecificPageClick: (page: number) => void;
    classes?: { paginator?: string; input?: string;};
}

export const Paginator: FunctionComponent<Props> = ({
    classes, page, onNextClick, onPrevClick, onSpecificPageClick
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const paginatorClasses = `paginator${classes && classes.paginator ? ` ${classes.paginator}`: ''}`;
    const inputClasses = `input${classes && classes.input ? ` ${classes.paginator}`: ''}`;
    
    const onInputPage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current || !inputRef.current.value) { return; }
        onSpecificPageClick(+inputRef.current.value);
    };

    return <div>
        <span className='paginator-container'>
            <p className={paginatorClasses}>
                <Button onClick={onPrevClick} className='button--primary' disabled={page === 1}>
                    Prev Page
                </Button>
                <span>Page # {page}</span>
                <Button onClick={onNextClick} className='button--primary'>Next Page</Button>
            </p>
        </span>
        <form onSubmit={onInputPage}>
            <label>
                <span>Select Page #</span>
                <input className={inputClasses} ref={inputRef}/>
            </label>
            <Button type='submit' className='button--action'>Go!</Button>
        </form>
    </div>;
};
