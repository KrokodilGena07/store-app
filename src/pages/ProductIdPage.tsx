import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from '../store/reducers/product/productApi';
import Header from '../components/UI/header/Header';
import Loader from '../components/UI/loader/Loader';
import '../styles/ProductIdPage.css';
import FullProductItem from '../components/FullProductItem';

const ProductIdPage: FC = () => {
    const params = useParams();
    const {data: product, isLoading, isError} = useFetchProductByIdQuery(Number(params.id));

    return (
        <div>
            <Header/>
            {isLoading ?
                <Loader/>
                :
                isError ?
                    <div className='CenterContainer NotFoundText'>
                        <h1>Error!</h1>
                    </div>
                    :
                    product ?
                        <FullProductItem product={product}/>
                    :
                        <div className='CenterContainer NotFoundText'>
                            <h1>Product not found!</h1>
                        </div>
            }
        </div>
    );
};

export default ProductIdPage;