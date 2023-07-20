import React, { FC, useState } from 'react';
import { IFilter } from '../../../models/IFilter';
import styles from "./Dropdown.module.css";

interface DropdownProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
    options: string[] | undefined;
    defaultValue: string;
}

const Dropdown: FC<DropdownProps> = ({filter, setFilter, defaultValue, options=[]}) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    
    return (
        <div
            className={`${styles.Dropdown} BorderElement`}
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        >
            <div>
                <h3>{filter.type}</h3>
            </div>
            <div className={dropdownIsOpen ? styles.DropdownList : styles.DropdownNone}>
                <option 
                    value={defaultValue}
                    className={styles.DropdownListItem}
                    onClick={() => setFilter({...filter, type: defaultValue})}
                >
                    {defaultValue}
                </option>
                {options.map(opt => 
                    <option 
                        value={opt}
                        key={opt}
                        className={styles.DropdownListItem}
                        onClick={() => setFilter({...filter, type: opt})}
                    >
                        {opt}
                    </option>
                )}
                </div>
        </div>
    );
};

export default Dropdown;