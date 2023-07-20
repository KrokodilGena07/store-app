import React, { FC } from 'react';
import Header from '../components/UI/header/Header';
import "../styles/HomePage.css";

const HomePage: FC = () => {
    return (
        <div>
            <Header/>
            <div className='HomePageContent'>
                <h1 className='HomePagePrimaryText PrimaryText'>
                    StoreApp - the best fake store app
                </h1>
                <h2 className='SecondaryText'>
                    It's app created by React
                </h2>
            </div>
        </div>
    );
};

export default HomePage;