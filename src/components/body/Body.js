import React from 'react';
import Home from './Home';
import Gallery from './Gallery'
import { Redirect, Route, Switch } from 'react-router';

const body = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/Gallery' exact component={Gallery} />
                <Redirect from='/' to='/home' />
            </Switch>
           
        </div>
    );
}
export default body;