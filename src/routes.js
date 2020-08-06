import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ClassList from './components/ClassList'

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={ClassList} path="/classList/:class"/>

    </Switch>
)

