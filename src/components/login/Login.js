import React from 'react';
import './Login.css';
import UserService from '../../services/UserService';

class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state = {username: "", password: ""}
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <form className="container-fluid login-container" onSubmit={this.login}>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel-login">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="login-form">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabIndex="1" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabIndex="2" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div>
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    async login(event) {
        event.preventDefault();
        const response = await UserService.getUsers()
        const exist = response.data.find(user => user.email === this.state.username && user.password === this.state.password);
        if( exist ) {
            this.props.history.push('/shop');
        }
    }

    handleChange(event) {
        const {target: {name, value}} = event
        this.setState({
            [name]:value
        })
    }
}

export default LoginComponent;