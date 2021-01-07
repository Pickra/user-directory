import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps } from "@reach/router";

export const Home: FunctionComponent<RouteComponentProps> = () => <section className='home'>
    <h1>Welcome To The User Directory!</h1>
    <p>We're all draons and unicorns here.</p>
    <Link to='users/1'>Let's go see the users!</Link>
</section>;