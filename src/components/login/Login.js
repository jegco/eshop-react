import React from 'react';
import './Login.css';
import UserService from '../../services/UserService'

class LoginComponent extends React.Component {
    constructor() {
        super()
    }

    async componentDidMount() {
        const response = await UserService.getUsers()
    }

    render() {
        return (
            <form className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel-login">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="login-form">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div>
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" onClick={this.login} />
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

    login() {
        this.users.forEach(user => {
            if (user.email === this.user.email && user.password === this.user.password) {
              this.router.navigateByUrl('/home');
            }
          });
    }
}

export default LoginComponent;