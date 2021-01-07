import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps } from "@reach/router";

export const Home: FunctionComponent<RouteComponentProps> = () => <main className='home'>
    <h1>Welcome To The User Directory!</h1>
    <p>We're all dragons and unicorns here.</p>
    <Link className='home__link' to='users/1'>Let's go see the users</Link>
</main>;