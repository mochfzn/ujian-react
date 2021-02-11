import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import "./style.css"
import logo from "./images/cbi.png"
import {Button, Password, Text} from '../../component';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }
    
    render() { 
        if(this.props.isLogin) {
            return <Redirect to="/data-prajurit" />
        }

        const { username, password } = this.state;
        return ( 
            <div className="login">
                <div className="header">            
                    <img src={logo} className="image" alt="image" width="80px"/>
                    <span>SIGN IN</span>
                </div>
                <div className="form">
                    <div className="field">
                        <Text name="username" className="input" id="username" value={username} placeholder="Username" onChange={this.setValue} />
                    </div>
                    <div className="field">
                        <Password value={password} className="input" name="password" id="password" placeholder="Password" onChange={this.setValue} />
                    </div>
                    <Button name="login" id="login" className="button" value="Login" onClick={() => this.props.doLogin(username, password)} />
                </div>
                <div className="footer"></div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.Auth.statusLogin
    }
}

const mapDispatchToProps = dispatch => ({
    changeLogin: () => dispatch({ type: "LOGIN_SUCCESS" })
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);