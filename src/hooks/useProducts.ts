import { useMemo } from "react";
import { IProduct } from "../models/IProduct";
import { IFilter, SortType } from "../models/IFilter";
import { sort } from "../utils/sort";

const useSortedProducts = (products: IProduct[] | undefined, filter: IFilter) => {
    const sortedProducts = useMemo(() => {
        if (products) {
            switch (filter.sort) {
                case SortType.DEFAULT:
                    return products;
                case SortType.EXPENSIVE:
                    return sort(products, (a, b) => b.price - a.price);
                case SortType.CHEAPER:
                    return sort(products, (a, b) => a.price - b.price);
                case SortType.HIGHER:
                    return sort(products, (a, b) => b.rating.rate - a.rating.rate);
                case SortType.BELOW:
                    return sort(products, (a, b) => a.rating.rate - b.rating.rate);
            }
        }return products;
    }, [products, filter.sort]);

    return sortedProducts;
};

const useFilteredAndSortedProducts = (products: IProduct[] | undefined, filter: IFilter) => {
    const sortedProducts = useSortedProducts(products, filter);

    const filteredAndSortedProducts = useMemo(() => {

        return sortedProducts?.filter(product => 
            (product.category === filter.type) 
            || 
            (filter.type === 'all' && sortedProducts)
        );

    }, [sortedProducts, filter.type]);

    return filteredAndSortedProducts;
};

export const useProducts = (products: IProduct[] | undefined, filter: IFilter) => {
    const filteredAndSortedProducts = useFilteredAndSortedProducts(products, filter);

    const resultProducts = useMemo(() => {

        return filteredAndSortedProducts?.filter(product => 
            (product.description.toLowerCase().includes(filter.searchQuery.toLowerCase())) 
            || 
            (filter.searchQuery === '' && filteredAndSortedProducts)
        );
        
    }, [filteredAndSortedProducts, filter.searchQuery]);

    return resultProducts ? resultProducts : products;
}