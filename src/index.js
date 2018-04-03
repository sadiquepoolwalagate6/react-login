import React, { Component } from 'react';
import validator from 'validator';
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
        usernameLabel:  'Email Address',
        passwordLabel:   'Password',
        inputClass:   'form-input',
        errorClass:   'error-text',
        submitButtonClass:  'submit-button',

       }
    };
    if(this.props.config){
        this.state.config ={
          handleSubmit :this.props.config.handleSubmit,
          parentClass: this.props.config.parentClass ? this.props.config.parentClass : 'loginWrapper',
          passwordPattern: this.props.config.passwordPattern ? this.props.config.passwordPattern : '^(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{7,}\S$',
          usernameLabel: this.props.config.usernameLabel ? this.props.config.usernameLabel : 'Email',
          passwordLabel: this.props.config.passwordLabel ? this.props.config.passwordLabel : 'Password',
          inputClass: this.props.config.inputClass ? this.props.config.inputClass : 'form-input',
          errorClass: this.props.config.errorClass ? this.props.config.errorClass : 'error-text',
          submitButtonClass: this.props.config.submitButtonClass ? this.props.config.errorClass : 'submit-button',

         }
  }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


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
      alert('PLease define submit handle function in config')
    }
    const user = {
      email: this.state.email.value,
      password: this.state.password.value
    };

    if (
      validator.isEmail(user.email) &&
      user.email &&
      this.state.passPattern.test(user.password) &&
      user.password
    ) {
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
            <div>
              <label>{config.usernameLabel}</label>
              <input
                name="email"
                type="text"
                className={config.inputClass}
                value={this.state.email.value}
                onChange={this.handleChange}
              />
              {this.state.email.error && (
                <div className={config.errorClass}>Please enter valid email</div>
              )}
            </div>
            <div>
              <label>{config.passwordLabel}</label>
              <input
                name="password"
                type="text"
                className={config.inputClass}
                value={this.state.password.value}
                onChange={this.handleChange}
              />
              {this.state.password.error && (
                <div className={config.errorClass}>Please enter valid Password</div>
              )}
            </div>
          <button type="submit" className={config.submitButtonClass}>Submit</button>
        </form>

      </div>
    );
  }
}


export default Login;
