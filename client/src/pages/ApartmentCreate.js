import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { apartmentOperations } from '../modules/apartment';
import { apartmentStatus } from '../constants';

class ApartmentCreate extends Component {
  state = {
    name: '',
    capacity: '',
    status: apartmentStatus[1],
  };

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.token) {
    //   this.props.history.push('/');
    // }
  }

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createApartment } = this.props;
    const { name, capacity, status } = this.state;
    createApartment({ name, capacity, status });
  };

  render() {
    const { name, capacity, status } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Apartment name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleTextChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="capacity">Capacity</Label>
            <Input
              type="number"
              id="capacity"
              name="capacity"
              value={capacity}
              onChange={this.handleTextChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              type="select"
              name="status"
              id="status"
              value={status}
              onChange={this.handleTextChange}
            >
              {apartmentStatus.map(status => (
                <option>{status}</option>
              ))}
            </Input>
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

const mapState = state => {};
const mapDispatch = {
  createApartment: apartmentOperations.createApartment,
};

export default connect(mapState, mapDispatch)(ApartmentCreate);
