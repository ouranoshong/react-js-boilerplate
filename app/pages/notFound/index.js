
import React from 'react';

import styles from './style.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div className={bootstrap.container}>
                <div className={styles['nb-error']}>
                    <div className={styles['error-code']}>404</div>
                    <h3 className={bootstrap['font-bold']}>We couldn&apos;t find the page..</h3>

                    <div className={styles['nb-desc']}>
                        <p>
                            Sorry, but the page you are looking for was either not found or does not exist.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
} 