import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }




    onSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)

        fetch('/api/accounts/signup/', { method: 'POST', body: JSON.stringify(this.state), headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => localStorage.setItem('token', data.token))

        this.props.history.push('/')
    }

    render() {
        const { username, password, email } = this.state
        return (
            <div className="d-flex flex-column justify-content-center align-items-center border m-5 p-4">
                <form className="d-flex flex-column align-items-center">
                    <div className="form-group">
                        <input onChange={this.onChange} value={username} name="username" type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={password} name="password" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={email} name="email" type="email" className="form-control" placeholder="email" />
                    </div>

                    <Link to="/login">Already have an account?</Link>
                    <div>

                        <button onClick={this.onSubmit} type="submit" className="btn btn-primary m-1">Sign up</button>

                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp