import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Auth from './components/Auth/Auth';


export default (
    <Switch>
        <Route exact path='/new' component={Form} />
        <Route exact path='/post/:postid' component={Post} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Auth}/>
    </Switch>
)