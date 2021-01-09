import React from 'react';
import { act, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { User, UserList } from './User';
import { first, last, dob, mockUsers } from './UserTestHelpers';
import { defaultLoaderText } from '../shared/components/Loader/Loader';
import { UserPage } from './UserPage';

expect.extend(toHaveNoViolations)

const user = mockUsers[1][0]; // the first object in the array, of the 1st property in mockUsers

describe('<User />', () => {
    it('should render a user', () => {
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

describe('<UserPage />', () => {
    it('should be accessible', async () => {
        const { container } = render(<UserPage
            pageNumber={1}
            users={[user]}
            downloadCsv={jest.fn()}
            onPrevPage={jest.fn()}
            onNextPage={jest.fn()}
            onSpecificPageClick={jest.fn()}
        />);

        await act(async() => {
            const results = await axe(container);        
            expect(results).toHaveNoViolations();
        });
    });
});
