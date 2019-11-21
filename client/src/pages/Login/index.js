import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Container,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import validator from 'validator';

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordInputType: 'password',
    invalidEmail: false,
    invalidPassword: false,
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({ loginForm: pathname.replace('/', '') === 'login' });
    ReactDOM.findDOMNode(this.emailField).addEventListener(
      'blur',
      this.validateEmail
    );
    ReactDOM.findDOMNode(this.passwordField).addEventListener(
      'blur',
      this.validatePassword
    );
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.emailField).removeEventListener(
      'blur',
      this.validateEmail
    );
    ReactDOM.findDOMNode(this.passwordField).removeEventListener(
      'blur',
      this.validatePassword
    );
  }

  validateEmail = () => {
    const { email } = this.state;
    this.setState({ invalidEmail: !validator.isEmail(email) });
    return !validator.isEmail(email);
  };
  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      invalidPassword: !validator.isLength(password, { min: 7 }),
    });
    return !validator.isLength(password, { min: 7 });
  };

  togglePasswordVisibility = () => {
    this.setState(state => ({
      passwordInputType:
        state.passwordInputType === 'password' ? 'text' : 'password',
    }));
  };

  handleTextChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const invalidEmail = this.validateEmail();
    const invalidPassword = this.validatePassword();

    if (!invalidEmail && !invalidPassword) {
      const { loginForm, name, email, password } = this.state;
      const { login, registerUser } = this.props;
      if (loginForm) return login({ email, password });
      return registerUser({ email, password, name });
    }
  };

  render() {
    const {
      loginForm,
      name,
      email,
      password,
      passwordInputType,
      invalidEmail,
      invalidPassword,
    } = this.state;
    return (
      <Container>
        <div className="form-wrapper">
          <Form onSubmit={this.handleSubmit} id="auth_form">
            <h1 className="h1">{loginForm ? 'Login' : 'Sign Up'}</h1>
            {!loginForm && (
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleTextChange}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                ref={el => (this.emailField = el)}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={this.handleTextChange}
                className="input"
                invalid={invalidEmail}
              />
              <FormFeedback>
                Please enter email in the right format
              </FormFeedback>
            </FormGroup>
            <FormGroup id="password_form_group">
              <Label for="password">Password</Label>
              <Input
                ref={el => (this.passwordField = el)}
                type={passwordInputType}
                id="password"
                name="password"
                value={password}
                onChange={this.handleTextChange}
                invalid={invalidPassword}
              />
              <Button
                color="link"
                onClick={this.togglePasswordVisibility}
                className="show-password-btn"
              >
                {passwordInputType === 'password' ? <FaEye /> : <FaEyeSlash />}
              </Button>
              <FormFeedback>
                Please enter password of the right length
              </FormFeedback>
              <FormText>Password must be at least 7 characters long</FormText>
            </FormGroup>

            <div className="my-4">
              {loginForm ? (
                <FormGroup>
                  <FormText>Don't have accout?</FormText>
                  <Link to="/register">Create your account</Link>{' '}
                </FormGroup>
              ) : (
                <FormGroup>
                  <FormText>You already have an account?</FormText>
                  <Link to="/login">Log in</Link>
                </FormGroup>
              )}
            </div>
            <Button color="primary" className="w-50">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

const mapState = state => {
  const { token } = state.auth;
  return { token };
};

const mapDispatch = {
  login: authOperations.login,
  registerUser: authOperations.registerUser,
};

export default connect(mapState, mapDispatch)(Login);
