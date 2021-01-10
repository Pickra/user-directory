import React, { FunctionComponent } from 'react';
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
}) => <li className='user'>
    <h2 className='user__name'>{first} {last}</h2>
    <div className='user__header'>
        <img role='presentation' className='user__img' src={large} />
    </div>
    <Details title={`${first} ${last} Details`}>
        <ul className='details__content user__details'>
            <li className='user__stat'><strong>Email:</strong> {email}</li>
            <li className='user__stat'><strong>Phone:</strong> {phone}</li>
            <li className='user__stat'><strong>Age:</strong> {age}</li>
            <li className='user__stat'><strong>Gender:</strong> {gender}</li>
        </ul>
    </Details>
</li>;

interface UserListProps {
    data: UserData[];
}

export const UserList: FunctionComponent<UserListProps> = ({ data }) => {
    const showLoader = !data || !data.length;

    const userList = !showLoader
        ? data.map(d => <User {...d} key={d.email} />)
        : '';

    return <section>
        <Loader show={showLoader} />
        <ul className='users' aria-live='polite'>{userList}</ul>
    </section>;
};
