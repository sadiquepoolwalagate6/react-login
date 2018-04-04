import React, { Component } from 'react';
import validator from 'validator';
import css from './login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        error: false,
        touch: false,
        value: ''
      },
      password: {
        error: false,
        touch: false,
        value: ''
      },
      passPattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{7,}\S$/,

      config: {
        handleSubmit:'',
        parentClass: 'loginWrapper',
        passwordPattern: '^(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{7,}\S$',
        usernameLabel:  'Email',
        passwordLabel:   'Password',

       }
    };
    if(this.props.config){
        this.state.config ={
          handleSubmit :      this.props.config.handleSubmit,
          parentClass:        this.props.config.parentClass ? this.props.config.parentClass+' loginWrapper' : 'loginWrapper',
          passwordPattern:    this.props.config.passwordPattern ? this.props.config.passwordPattern : '^(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{7,}\S$',
          usernameLabel:      this.props.config.usernameLabel ? this.props.config.usernameLabel : 'Email',
          passwordLabel:      this.props.config.passwordLabel ? this.props.config.passwordLabel : 'Password',
          usernameErrorText:  this.props.config.usernameErrorText ? this.props.config.usernameErrorText : 'Please enter valid email',
          passwordErrorText:  this.props.config.passwordErrorText ? this.props.config.passwordErrorText : 'Please enter valid password',
         }
  }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(name, value) {

    if (validator.isEmail(value) && name == 'email') {
      this.setState({
        [name]: {
          error: false,
          touch: true,
          value: value
        }
      });
    } else if (this.state.passPattern.test(value) && name == 'password') {
      this.setState({
        [name]: {
          error: false,
          touch: true,
          value: value
        }
      });
    } else {
      this.setState({
        [name]: {
          error: true,
          touch: true,
          value: value
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.config.handleSubmit){
      alert('Please define submit handle function in config');
      return false;
    }
    const user = {
      email: this.state.email.value,
      password: this.state.password.value
    };
    let error = false;
    if(!validator.isEmail(user.email)){
      this.handleChange('email', user.email);
      error = true;
    }
    if(!this.state.passPattern.test(user.password)){
      this.handleChange('password', user.password);
      error = true;
    }
    if (error === false) {
      if(this.state.config.handleSubmit){
        this.state.config.handleSubmit(user, 'success');
      }
    } else {
      if(this.state.config.handleSubmit){
        this.state.config.handleSubmit(user, 'error');
      }
      return;
    }



  }

  render() {
    const { config } = this.state;
    return (
      <div className={config.parentClass}>
       <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>{config.usernameLabel}</label>
          <input
                name="email"
                type="text"
                className='form-control'
                value={this.state.email.value}
                onChange={event => {this.handleChange(event.target.name, event.target.value)}}
              />
              {this.state.email.error && (
                <div className='error-text'>{config.usernameErrorText}</div>
              )}
        </div>
        <div className="form-group">
          <label>{config.passwordLabel}</label>
          <input
                name="password"
                type="password"
                className='form-control'
                value={this.state.password.value}
                onChange={event => {this.handleChange(event.target.name, event.target.value)}}
              />
               {this.state.password.error && (
                <div className='error-text'>{config.passwordErrorText}</div>
              )}

        </div>

      <button type="submit" className='btn' >Submit</button>






        </form>

      </div>
    );
  }
}


export default Login;
