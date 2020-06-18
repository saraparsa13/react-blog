import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Posts from './components/posts/Posts'
import PostDetail from './components/pages/PostDetail'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
    return (
        <Router> 
            <div className="App">
                <Switch>
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/login" component={ Login } />
                    <PrivateRoute exact path="/" component={ Posts } />
                    <PrivateRoute exact path="/posts/:id" component={ PostDetail } />
                </Switch>
            </div>
        </Router>
    )
}

export default App
