import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.passwordInput = React.createRef()
        this.usernameInput = React.createRef()
    }



    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            username: this.usernameInput.current.value,
            password: this.passwordInput.current.value
        })

        console.log(123)
        // fetch('/api/login', { method: "POST", body: user })
        //     .then()
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="d-flex flex-column justify-content-center align-items-center border m-5 p-4">
                <form className="d-flex flex-column align-items-center">
                    <div className="form-group">
                        <input defaultValue={username} ref={this.usernameInput} name="username" type="text" className="form-control" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input defaultValue={password} ref={this.passwordInput} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Link to="/signup">Already have an account?</Link>
                    <div>
                        <Link to="/">
                            <button onClick={ this.onSubmit } type="submit" className="btn btn-primary m-1">Login</button>
                        </Link>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login