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
    invalid: false,
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({ loginForm: pathname.replace('/', '') === 'login' });
    ReactDOM.findDOMNode(this.emailField).addEventListener(
      'blur',
      this.validateEmail
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
  }

  validateEmail = () => {
    const { email } = this.state;
    if (email) {
      this.setState({ invalid: !validator.isEmail(email) });
    } else {
      this.setState({ invalid: false });
    }
  };

  togglePasswordVisibility = () => {
    this.setState(state => ({
      passwordInputType:
        state.passwordInputType === 'password' ? 'text' : 'password',
    }));
  };

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { loginForm, name, email, password } = this.state;
    const { login, registerUser } = this.props;
    if (loginForm) return login({ email, password });
    return registerUser({ email, password, name });
  };

  render() {
    const {
      loginForm,
      name,
      email,
      password,
      passwordInputType,
      invalid,
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
                invalid={invalid}
              />
              <FormFeedback>
                Please enter email in the right format
              </FormFeedback>
            </FormGroup>
            <FormGroup id="password_form_group">
              <Label for="password">Password</Label>
              <Input
                type={passwordInputType}
                id="password"
                name="password"
                value={password}
                onChange={this.handleTextChange}
              />
              <Button
                color="link"
                onClick={this.togglePasswordVisibility}
                className="show-password-btn"
              >
                {passwordInputType === 'password' ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </FormGroup>

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
            <Button color="primary">Submit</Button>
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
