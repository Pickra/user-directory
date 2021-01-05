import { UserData } from './User';

export const first = '🌮';
export const last = '🐈';
export const dob = { age: 5 };

export const mockUsers = { 1: [
    { name: { first, last }, dob, gender: '', phone: '', picture: '', email: '' } as unknown as UserData
]};
