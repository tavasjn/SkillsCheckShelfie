import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Dashboard/Dashboard';
import AddItem from './Components/Form/Form';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add' component={AddItem} />
    </Switch>
)