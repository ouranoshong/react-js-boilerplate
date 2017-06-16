import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/notFound';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>
);