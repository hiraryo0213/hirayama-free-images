import React, { Component, FunctionComponent } from 'react';
import { HashRouter, Switch, Route, match } from 'react-router-dom';
import Top from '../components/templates/top';
import Detail from '../components/templates/detail';

// const Detail: FunctionComponent<{ match: match<{ id: string }> }> = ({ match }) => (
//   <>{match.params.id}</>
// );

const Router = () => (
    <HashRouter basename="/">
        <div className="App">
            <Switch>
                <Route exact path="/" component={Top} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </div>
    </HashRouter>
);

export default Router;
