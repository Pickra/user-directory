import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Details } from '../shared/components/Details/Details';
import { Loader } from '../shared/components/Loader/Loader';

export interface UserData {
    gender: 'string';
    name: { first: string; last: string; };
    email: string;
    picture: { large: string; },
    phone: string;
    dob: { age: number; };
    className?: string;
}

export const User: FunctionComponent<UserData> = ({
    gender,
    email,
    phone,
    dob: { age },
    name: { first, last },
    picture: { large }
}) => {
    const userRef = useRef<HTMLLIElement>(null);
    const [width, setWidth] = useState('');

    useEffect(() => {
        setTimeout(() => {
            if (userRef.current) {
                const { width } = userRef.current.getBoundingClientRect();
                setWidth(`${width - 48}px`);
            }
        }, 50);
    }, [userRef.current]);


    return <li className='user' ref={userRef}>
        <div className='user__header'>
            <h2 className='user__name'>{first} {last}</h2>
            <img className='user__img' src={large} alt={`${first} ${last}`} />
        </div>
        <Details title={`${first} ${last} details`}>
            <ul className='details__content user__details' style={{ width: width }}>
                <li className='user__stat'>email: {email}</li>
                <li className='user__stat'>phone: {phone}</li>
                <li className='user__stat'>age: {age}</li>
                <li className='user__stat'>gender: {gender}</li>
            </ul>
        </Details>
    </li>
};

interface UsersProps {
    data: UserData[];
}

export const Users: FunctionComponent<UsersProps> = ({ data }) => {
    const showLoader = !data || !data.length;

    const userList = !showLoader
        ? data.map(d => <User {...d} key={d.email} />)
        : '';

    return <section>
        <Loader show={showLoader} />
        <ul className='users' aria-live='polite'>{userList}</ul>
    </section>;
};
