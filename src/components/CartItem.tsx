import React, { FC } from 'react';
import { IProduct } from '../models/IProduct';
import starIcon from "../svg/starIcon.svg";
import { useActions } from '../hooks/redux';

interface CartItemProps {
    product: IProduct;
}

const CartItem: FC<CartItemProps> = ({product}) => {
    const {removeProduct} = useActions();

    return (
        <div className='CartItem ShadowElement'>
            <img 
                src={product.image} 
                alt="cartImg"
                className='CartItemImg'
            />
            <div className='FlexItemContent CartContent'>
                <div>
                    <h2 className='CartTextItem PrimaryText'>{product.title}</h2>
                    <h3 className='CartTextItem SecondaryText'>{product.description}</h3>
                    <h2 className='CartTextItem PrimaryText'>{product.price}</h2>
                    <div className='RatingContainer'>
                        <h2>
                            {product.rating.rate}
                        </h2>
                        <img src={starIcon} alt="star" />
                    </div>
                </div>
                <div className='CartBtns'>
                    <button 
                        className='Btn PrimaryBtn CartBtn'
                        onClick={() => removeProduct(product.id)}
                    >
                        Buy
                    </button>
                    <button 
                        className='Btn SecondaryBtn CartBtn'
                        onClick={() => removeProduct(product.id)}
                    >
                        Remove from cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;