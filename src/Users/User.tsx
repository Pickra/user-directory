import React, { FunctionComponent } from 'react';

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
}) => <li>
    <h2>{first} {last}</h2>
    <img src={large} alt={`${first} ${last}`} />
    <span>email: {email}</span>
    <span>phone: {phone}</span>
    <span>age: {age}</span>
    <span>gender: {gender}</span>
</li>;