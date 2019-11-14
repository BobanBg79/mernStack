import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidUpdate() {
    if (this.props.token) {
      console.log('success end, navigate');
      this.props.history.push('/');
    }
  }

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log('start');
    this.props.login({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleTextChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={this.handleTextChange}
            />
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
