import React, { FC } from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../router';
import { useActions, useTypedSelector } from '../../../hooks/redux';

interface HeaderProps {
    btn?: {title: string, route: RouteNames};
    menuOptions?: {title: string, link: RouteNames}[];
}

const Header: FC<HeaderProps> = ({btn, menuOptions=[
    {title: 'Products', link: RouteNames.PRODUCT_PAGE},
    {title: 'Cart', link: RouteNames.CART}
]}) => {
    const {isAuth} = useTypedSelector(state => state.authReducer);
    const navigate = useNavigate();
    const {logout} = useActions();
    
    return (
        <header className={`${styles.Header} FlexCenter`}>
            <Link 
                to={RouteNames.HOME}
                className={styles.HeaderLogo}
            >
                <h1>StoreApp</h1>
            </Link>
            <div className='FlexCenter'>
                {menuOptions.map(opt =>
                    <Link 
                        to={opt.link}
                        className={styles.MenuItem}
                        key={opt.link}
                    >
                        <h2>{opt.title}</h2>
                    </Link>
                )}
                <div className={styles.HeaderLine}/>
                <button 
                    className={`Btn PrimaryBtn ${styles.HeaderBtn}`}
                    onClick={isAuth ? 
                        logout
                        :
                        () => navigate(btn ? btn.route : RouteNames.LOGIN)
                    }
                >
                    <h2>
                        {isAuth ? 
                            <>{btn ? btn.title : <>Logout</>}</> 
                            : 
                            <>{btn ? btn.title : <>Login</>}</> 
                        }
                    </h2>
                </button>
            </div>
        </header>
    );
};

export default Header;