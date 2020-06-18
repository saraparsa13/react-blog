import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {

        e.preventDefault()

        fetch('/api/accounts/login/', { method: 'POST', body: JSON.stringify(this.state), headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => {
                localStorage.getItem('token') === data.token ? console.log('welcome kon') : console.log('signup kon')
            })

        this.props.history.push('/')
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="d-flex flex-column justify-content-center align-items-center border m-5 p-4">
                <form className="d-flex flex-column align-items-center">
                    <div className="form-group">
                        <input onChange={this.onChange} name="username" value={username} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} name="password" value={password} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <Link to="/signup">Don't have an account?</Link>
                    <div>
                        <button onClick={this.onSubmit} type="submit" className="btn btn-primary m-1">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login