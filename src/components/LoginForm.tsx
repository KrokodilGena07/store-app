import React, { FC } from 'react';
import { IUser } from '../models/IUser';
import { useTypedSelector } from '../hooks/redux';

interface LoginFormProps {
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    user: IUser;
    setUser: (user: IUser) => void;
}

const LoginForm: FC<LoginFormProps> = ({submit, user, setUser}) => {
    const {isLoading, error} = useTypedSelector(state => state.authReducer);
    
    return (
        <div className='CenterContainer'>
            <form
                className='LoginPageForm ShadowElement FlexColumn'
                onSubmit={e => submit(e)}
            >
                <label 
                    htmlFor="username"
                    className='PrimaryText'
                >
                    <h3>username</h3>
                </label>
                <input 
                    type="text"
                    id='username'
                    className='Input BorderElement FormInput'
                    value={user.username}
                    onChange={e => setUser({...user, username: e.target.value})}
                />
                <label 
                    htmlFor="password"
                    className='PrimaryText'
                >
                    <h3>password</h3>
                </label>
                <input 
                    type="password"
                    id='password'
                    className='Input BorderElement FormInput'
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                />
                {error &&
                    <h4 className='FormErrorText'>{error}</h4>
                }
                <button className='Btn PrimaryBtn FormBtn'>
                    {isLoading ? <>Loading...</> : <>submit</>}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;