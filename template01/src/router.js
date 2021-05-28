import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestPage from './Pages/Homepage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={TestPage} />
        </Switch>
    )
}

export default Routes;