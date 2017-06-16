import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
    <Router>
        <div className="container">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            <hr />
            {Routes}
        </div>
    </Router>
);

export default App;

