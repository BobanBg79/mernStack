import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
    passwirdInputType: 'password',
  };

  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push('/');
    }
  }

  showPassword = () => {};

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  render() {
    const { email, password, passwirdInputType } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Emal</Label>
            <Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleTextChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type={passwirdInputType}
              id="password"
              name="password"
              value={password}
              onChange={this.handleTextChange}
            />
            <Button onClick={this.showPassword}>
              <i className="far fa-apple-alt"></i>
            </Button>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <div>
          <span>New?</span>
        </div>
        <Link to="/register">Create your account</Link>
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
};

export default connect(mapState, mapDispatch)(Login);
