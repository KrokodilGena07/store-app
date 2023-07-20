import React, { FC } from 'react';
import styles from "./Loader.module.css";

const Loader: FC = () => {
    return (
        <div className='CenterContainer'>
            <span className={styles.Loader}></span>
        </div>
    );
};

export default Loader;