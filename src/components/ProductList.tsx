import React, { FC } from 'react';
import { IProduct } from '../models/IProduct';
import ProductItem from './ProductItem';

interface ProductListProps {
    products: IProduct[] | undefined
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <>
            {products?.length ?
                <main className='ProductPageMain'>
                    {products.map(product =>
                        <ProductItem product={product} key={product.id}/>
                    )}
                </main>
                :
                <div className='CenterContainer'>
                    <h2 className='NotFoundText'>
                        Products not found!
                    </h2>
                </div>
            }
        </>
    );
};

export default ProductList;