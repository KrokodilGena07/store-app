import React, { FC } from 'react';
import { IFilter, SortType } from '../../../models/IFilter';
import Dropdown from '../dropdown/Dropdown';
import SortContainer from '../sortContainer/SortContainer';
import { useFetchCategoriesQuery } from '../../../store/reducers/product/productApi';
import styles from "./Sidebar.module.css";

interface SidebarProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

const Sidebar: FC<SidebarProps> = ({filter, setFilter}) => {
    const {data: categories} = useFetchCategoriesQuery('products');
    
    return (
        <aside className={`${styles.Sidebar} ShadowElement FlexColumn`}>
            <label 
                htmlFor="searchQuery"
                className={`${styles.ProductLabel} PrimaryText`}
            >
                <h2>Searcher</h2>
            </label>
            <input
                type="text"
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
                className={`${styles.SearchInput} Input BorderElement`}
                id='searchQuery'
                placeholder='Search...'
            />
            <label className={`${styles.ProductLabel} PrimaryText`}>
                <h2>Filter</h2>
            </label>
            <Dropdown
                filter={filter}
                setFilter={setFilter}
                defaultValue='all'
                options={categories}
            />
            <label className={`${styles.ProductLabel} PrimaryText`}>
                    <h2>Sort by price</h2>
                </label>
                <SortContainer
                    filter={filter}
                    setFilter={setFilter}
                    options={[
                        {value: SortType.DEFAULT, title: 'Default'},
                        {value: SortType.EXPENSIVE, title: 'Expensive'},
                        {value: SortType.CHEAPER, title: 'Cheaper'}
                    ]}
                />
                <label className={`${styles.ProductLabel} PrimaryText`}>
                    <h2>Sort by rate</h2>
                </label>
                <SortContainer
                    filter={filter}
                    setFilter={setFilter}
                    options={[
                        {value: SortType.HIGHER, title: 'Higher'},
                        {value: SortType.BELOW, title: 'Below'},
                    ]}
                    isRate={true}
                />
        </aside>
    );
};

export default Sidebar;