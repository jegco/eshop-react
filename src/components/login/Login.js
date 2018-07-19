import React from 'react';
import './Login.css';

class LoginComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="panel-login">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="login-form">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" required pattern=".{6,}" />
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
            </div>
        )
    }
}

export default LoginComponent;