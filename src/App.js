import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect } from 'react-router-dom'

import './App.css'

import Posts from './components/posts/Posts'
import PostDetail from './components/pages/PostDetail'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import PrivateRoute from './components/PrivateRoute'
import ContextProvider from './context'
import Header from './components/layout/Header'

const App = () => {
    return (
        <ContextProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Posts} />
                        <PrivateRoute exact path="/posts/:id" component={PostDetail} />
                    </Switch>
                </div>
            </Router>

        </ContextProvider>
    )
}

export default App
