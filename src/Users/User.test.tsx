import React from 'react';
import { render } from '@testing-library/react';
import { User, UserList } from './User';
import { first, last, dob, mockUsers } from './UserTestHelpers';
import { defaultLoaderText } from '../shared/components/Loader/Loader';

describe('<User />', () => {
    it('should render a user', () => {
        const user = mockUsers[1][0]; // the first object in the array, of the 1st property in mockUsers
        const { getByText } = render(<User {...user} />)

        expect(getByText(`${first} ${last}`)).toBeInTheDocument();
        getByText((content) => content === `${dob.age}`);
    });
});

describe('<UserList />', () => {
    it('should render a loader when there are no users', () => {
       const { getByText } = render(<UserList data={[]} />);
       expect(getByText(defaultLoaderText)).toBeInTheDocument();
    });
});
