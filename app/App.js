import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './index.css';

import Routes from './Routes';

const App = () => (
    <Router>
        <div className="app-container">
            {Routes}
        </div>
    </Router>
);

export default App;

