import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { apartmentOperations } from '../../modules/apartment';

class ApartmentSingle extends Component {
  state = {
    name: '',
    capacity: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getExistingApartment(id);
    }
  }

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
    const { name, capacity } = this.state;
    createApartment({ name, capacity });
  };

  render() {
    const { name, capacity } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1 className="h1">Create apartment</h1>
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
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapState = state => {
  return {};
};
const mapDispatch = {
  createApartment: apartmentOperations.createApartment,
  getExistingApartment: apartmentOperations.getExistingApartment,
};

export default connect(mapState, mapDispatch)(ApartmentSingle);
