import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Views
import HomeView from '../views/HomeView';
import NotFoundView from '../views/NotFoundView';

const MainRoutes = () => (
    <Switch>
      <Route exact path="/" component={HomeView} />

      <Route component={NotFoundView} /> 
    </Switch>
)

export default MainRoutes;
