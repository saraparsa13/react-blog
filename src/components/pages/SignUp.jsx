import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    // state = {
    //     username: '',
    //     password: ''
    // }

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     const { username, password } = this.state
    //     this.setState({
    //         username: this.username,
    //         password: this.password
    //     })
    // }


    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center border m-5 p-4">
                <form className="d-flex flex-column align-items-center">
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Link to="/">Create Account?</Link>
                    <div>
                        <Link to="/">
                            <button type="submit" class="btn btn-primary m-1">Sign up</button>
                        </Link>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp