import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContaminationLevel from './ContaminationLevel';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ContaminationLevel}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}