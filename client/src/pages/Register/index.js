import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { registerUser } = this.props;
    const { email, password, name } = this.state;
    registerUser({ email, password, name });
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
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
          {this.props.loading && (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
        </Form>
      </Container>
    );
  }
}

const mapState = state => {
  const { loading } = state.auth;
  return { loading };
};

const mapDispatch = {
  registerUser: authOperations.registerUser,
};

export default connect(mapState, mapDispatch)(Register);
