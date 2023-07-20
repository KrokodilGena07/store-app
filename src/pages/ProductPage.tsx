import React, { FC, useState } from 'react';
import Header from '../components/UI/header/Header';
import { RouteNames } from '../router';
import "../styles/ProductPage.css";
import { useFetchProductsQuery } from '../store/reducers/product/productApi';
import ProductList from '../components/ProductList';
import Loader from '../components/UI/loader/Loader';
import { IFilter, SortType } from '../models/IFilter';
import { useProducts } from '../hooks/useProducts';
import Sidebar from '../components/UI/sidebar/Sidebar';

const ProductPage: FC = () => {
    const [filter, setFilter] = useState<IFilter>({type: 'all', searchQuery: '', sort: SortType.DEFAULT});
    const {data: products, isLoading, isError, refetch} = useFetchProductsQuery(20);
    const resultProducts = useProducts(products, filter);

    return (
        <div>
            <Header menuOptions={[
                {title: 'Home', link: RouteNames.HOME},
                {title: 'Cart', link: RouteNames.CART}
            ]}/>
                {isLoading ?
                    <Loader/>
                    :
                    isError ? <div className='CenterContainer'>
                        <button 
                            className='ProductBtn ProductPrimaryBtn'
                            onClick={refetch}
                        >
                            Server error, refetch products
                        </button>
                    </div>
                    :
                    <div className='ProductPageContent'>
                        <Sidebar
                            filter={filter}
                            setFilter={setFilter}
                        />
                        <ProductList products={resultProducts}/>
                    </div>
                }
        </div>
    );
};

export default ProductPage;