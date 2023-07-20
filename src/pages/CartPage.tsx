import React, { FC } from 'react';
import Header from '../components/UI/header/Header';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/redux';
import "../styles/CartPage.css";
import CartItem from '../components/CartItem';

const CartPage: FC = () => {
    const cart = useTypedSelector(state => state.cartReducer.cart);
    const isAuth = useTypedSelector(state => state.authReducer.isAuth);

    return (
        <div>
            <Header
                menuOptions={[
                    {title: 'Products', link: RouteNames.PRODUCT_PAGE},
                    {title: 'Home', link: RouteNames.HOME}
                ]}
            />
            <div>
                {cart.length && isAuth ?
                    cart.map(product => 
                        <CartItem
                            product={product}
                            key={product.id}
                        />
                    )
                    :
                    <div className='CenterContainer NotFoundText'>
                        <h1>{isAuth ? <>Cart is void</> : <>Login to view cart!</>}</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default CartPage;