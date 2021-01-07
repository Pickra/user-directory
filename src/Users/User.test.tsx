import React from 'react';
import { render } from '@testing-library/react';
import { User, Users } from './User';
import { first, last, dob, mockUsers } from './UserTestHelpers';
import { defaultLoaderText } from '../shared/components/Loader/Loader';

describe('<User />', () => {
    it('should render a user', () => {
        const user = mockUsers[1][0]; // the first object in the array, of the 1st property in mockUsers
        const { getByText } = render(<User {...user} />)

        expect(getByText(`${first} ${last}`)).toBeInTheDocument();
        expect(getByText(`age: ${dob.age}`)).toBeInTheDocument();
    });
});

describe('<Users />', () => {
    it('should render a loader when there are no users', () => {
       const { getByText } = render(<Users data={[]} />);
       expect(getByText(defaultLoaderText)).toBeInTheDocument();
    });
});
