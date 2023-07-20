import React, { FC, useState } from 'react';
import { IProduct } from '../models/IProduct';
import starIcon from "../svg/starIcon.svg";
import { useActions, useTypedSelector } from '../hooks/redux';

interface FullProductItemProps {
    product: IProduct;
}

const FullProductItem: FC<FullProductItemProps> = ({product}) => {
    const {cart} = useTypedSelector(state => state.cartReducer);
    const {removeProduct, addProduct} = useActions();
    const [btnText, setBtnText] = useState('Buy');
    
    return (
        <div className='CenterContainer'>
            <div className='FullProduct ShadowElement'>
            <img 
                    src={product.image} 
                    alt="cartImg"
                    className='FullProductImg'
                />
                <div className='FlexItemContent'>
                    <div>
                        <h1 className='FullProductItem PrimaryText'>{product.title}</h1>
                        <h2 className='FullProductItem SecondaryText'>{product.description}</h2>
                        <h2 className='FullProductItem PrimaryText'>{product.price}</h2>
                        <div className='RatingContainer'>
                            <h2>
                                {product.rating.rate}
                            </h2>
                            <img src={starIcon} alt="star" />
                        </div>
                    </div>
                    <div className='FulProductBtns'>
                        <button 
                            className='Btn PrimaryBtn FullProductBtn'
                            onClick={() => setBtnText('Bought')}
                        >
                            {btnText}
                        </button>
                        <button 
                            className='Btn SecondaryBtn FullProductBtn'
                            onClick={
                                cart.find(p => p.id === product.id) ? 
                                    () => removeProduct(product.id) 
                                : 
                                    () => addProduct(product)
                            }
                        >
                            {cart.find(p => p.id === product.id) ? <>Remove from cart</> : <>Add to cart</>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullProductItem;