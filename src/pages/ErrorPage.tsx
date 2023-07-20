import React, { FC } from 'react';
import Header from '../components/UI/header/Header';
import { Link } from 'react-router-dom';
import { RouteNames } from '../router';
import "../styles/ErrorPage.css";

const ErrorPage: FC = () => {
    return (
        <div>
            <Header/>
            <div className='ErrorPage CenterContainer'>
                <h1 className='ErrorPageTitle'>Page not found</h1>
                <h2 className='ErrorPageText'>404</h2>
                <Link 
                    to={RouteNames.HOME}
                    className='ErrorPageLink'
                >
                    <h2>Home</h2>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;