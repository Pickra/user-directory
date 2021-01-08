import React, { FunctionComponent, useRef } from 'react';
import { Button } from '../Buttons/Button';
import { Input } from '../Inputs/Input';

interface Props {
    page: number;
    className?: string;
    onPrevClick: () => void;
    onNextClick: () => void;
    onSpecificPageClick: (page: number) => void;
}

export const Paginator: FunctionComponent<Props> = ({
    className, page, onNextClick, onPrevClick, onSpecificPageClick
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const paginatorClasses = `paginator${className && className ? ` ${className}`: ''}`;
    
    const onInputPage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current || !inputRef.current.value) { return; }
        onSpecificPageClick(+inputRef.current.value);
    };

    return <div>
        <span className='paginator-container'>
            <div className={paginatorClasses}>
                <Button
                    onClick={onPrevClick}
                    className='button--primary'
                    disabled={page === 1}
                >Prev Page</Button>
                <form className='paginator__input' onSubmit={onInputPage}>
                    <Input
                        type='number'
                        ref={inputRef}
                        labelText='Set Page #'
                    />
                    <Button type='submit' className='button--action'>Go!</Button>
                </form>
                <Button onClick={onNextClick} className='button--primary'>Next Page</Button>
            </div>
        </span>
    </div>;
};
