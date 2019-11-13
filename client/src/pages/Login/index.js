import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit: ', e);
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

export default Login;
