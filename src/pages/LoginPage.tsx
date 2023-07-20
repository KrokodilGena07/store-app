import React, { FC, useState } from 'react';
import "../styles/LoginPage.css";
import Header from '../components/UI/header/Header';
import { RouteNames } from '../router';
import { IUser } from '../models/IUser';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/redux';
import LoginForm from '../components/LoginForm';

const LoginPage: FC = () => {
    const [user, setUser] = useState<IUser>({username: 'johnd', password: 'm38rmF$'});
    const navigate = useNavigate();
    const {login} = useActions();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(user.username, user.password, navigate);
    };

    return (
        <div>
            <Header 
                btn={{title: 'Home', route: RouteNames.HOME}}
            />
            <LoginForm
                submit={submit}
                user={user}
                setUser={setUser}
            />
        </div>
    );
};

export default LoginPage;