import React, {Component} from "react";
import Header from './Header';

class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginForm/>
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <div id="wrapper">
        <h1>Login</h1>
        <p>
          <label for="username" className="uname" data-icon="u"> 用户名 </label>
          <input id="username" name="username" required="required" type="text"
                 placeholder="UserName"/>
        </p>
        <p>
          <label for="password" className="youpasswd" data-icon="p"> 密码 </label>
          <input id="password" name="password" required="required" type="password" placeholder="Password" />
        </p>
        <p className="keeplogin">
          <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
          <label for="loginkeeping">保存密码</label>
        </p>
        <p className="login button">
          <input type="submit" value="Login" />
        </p>
        <p className="text-right">
          忘记密码
        </p>
      </div>
    )
  }
}

export default Login ;