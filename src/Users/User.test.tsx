import React from 'react';
import { render } from '@testing-library/react';
import { User, UserData } from './User';

const first = '🌮';
const last = '🐈';
const dob = { age: 5 };
const user = { name: { first, last }, dob, gender: '', phone: '', picture: '', email: '' } as unknown as UserData;

describe('<User />', () => {
    it('should render a user', () => {
        const { getByText } = render(<User {...user} />)
        expect(getByText(`${first} ${last}`)).toBeInTheDocument();
        expect(getByText(`age: ${dob.age}`)).toBeInTheDocument();
    })
});