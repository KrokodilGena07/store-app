import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/redux';

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer);
    
    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;