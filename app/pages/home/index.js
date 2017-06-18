
import React from 'react';
import classNames from 'classnames';

import styles from './style.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import fontAwesome from 'font-awesome/css/font-awesome.css';

import logo from './logo.svg';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sbContent}>
                    <h3 className={styles.sbTitle}>React Js Boilerplate</h3>
                    <p className={styles.sbSubTitle}>play with react.</p>
                    <img src={logo} className={styles.sbLogo} alt="logo" />
                </div>
                <div className={bootstrap.container}>
                    <ul className={classNames(styles.sbInline, styles.sbSocialIntro)}>
                        <li>
                            <a href="https://github.com/ouranoshong/react-js-boilerplate" className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-danger'])}><i className={classNames(fontAwesome.fa, fontAwesome['fa-github'], fontAwesome['fa-fw'])}></i> <span className="network-name">Github</span></a>
                        </li>
                    </ul>
                </div>
            </div>


        );
    }
}   