import React, { FC } from 'react';
import { IProduct } from '../models/IProduct';
import starIcon from "../svg/starIcon.svg";
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useActions, useTypedSelector } from '../hooks/redux';

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
    const navigate = useNavigate();
    const {cart} = useTypedSelector(state => state.cartReducer);
    const {addProduct} = useActions();

    return (
        <div className='ProductItem ShadowElement FlexItemContent FlexCenter'>
            <div>
                <img src={product.image} alt="" style={{width: '10vw'}}/>
                <h2 className='ProductTitle SecondaryText'>
                    {product.title}
                </h2>
                <h2 className='ProductPrice PrimaryText'>
                    {product.price}
                </h2>
                <div className='ProductRate RatingContainer'>
                    <h3>
                        {product.rating.rate}
                    </h3>
                    <img src={starIcon} alt="star" />
                </div>
            </div>
            <div className='ProductBtns FlexColumn'>
                <button 
                    className='Btn PrimaryBtn ProductBtn'
                    onClick={() => navigate(RouteNames.PRODUCT_ID_PAGE.replace(':id', String(product.id)))}
                >
                    Open
                </button>
                <button
                    className='SecondaryBtn Btn ProductBtn'
                    onClick={() => addProduct(product)}
                >
                    {cart.find(p => p.id === product.id) ? <>In a cart</> : <>Add to cart</>}
                </button>
            </div>
        </div>
    );
};

export default ProductItem;