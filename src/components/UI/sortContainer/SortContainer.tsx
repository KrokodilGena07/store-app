import React, { FC } from 'react';
import { IFilter, SortType } from '../../../models/IFilter';
import styles from "./SortContainer.module.css";

interface SortContainerProps {
    options: {value: SortType, title: string}[];
    filter: IFilter,
    setFilter: (filter: IFilter) => void;
    isRate?: boolean;
}

const SortContainer: FC<SortContainerProps> = ({options, filter, setFilter, isRate=false}) => {
    const selectPrice = (price: SortType) => {
        setFilter({...filter, sort: price});
    };

    return (
        <div className={`${styles.SortContainer} ${isRate && styles.RateBox}`}>
            {options.map(sort => 
                <h4
                    className={`${styles.SortItem} ${sort.value === filter.sort && styles.SelectedSort}`}
                    onClick={() => selectPrice(sort.value)}
                    key={sort.value}
                >
                    {sort.title}
                </h4>
                
            )}
        </div>
    );
};

export default SortContainer;