
import React from 'react';
import styles from './style.css';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';


export default class HomePage extends React.Component {
    render() {
        return (
            <div className={bootstrap.container}>
                <div className={styles.sbContent}>
                    <h3 className={styles.sbTitle}>React Js Boilerplate</h3>
                    <p>play with react.</p>
                </div>
            </div>
        );
    }
}   