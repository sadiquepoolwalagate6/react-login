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
      }
    };
    console.log(validator);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('props',props);
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
    } else if (validator.isAlphanumeric(value) && name == 'password') {
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

    if (
      validator.isEmail(this.state.email.value) &&
      this.state.email.value &&
      validator.isAlphanumeric(
        this.state.password.value && this.state.password.value
      )
    ) {
     // const { login } = this.props.actions;
      const user = {
        email: this.state.email.value,
        password: this.state.password.value
      };
     // login(user);
    } else {
      alert('Please enter all requierd field');
      return;
    }
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              <label>Email *</label>
              <br />
              <input
                name="email"
                type="text"
                value={this.state.email.value}
                onChange={this.handleChange}
              />
              {this.state.email.error && (
                <div className="required">Please enter valid email</div>
              )}
            </div>
            <div>
              <label>Password *</label>
              <br />
              <input
                name="password"
                type="text"
                value={this.state.password.value}
                onChange={this.handleChange}
              />
              {this.state.password.error && (
                <div className="required">Please enter valid Password</div>
              )}
            </div>

          </label>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}


export default Login;
