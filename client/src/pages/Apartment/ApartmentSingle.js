import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { apartmentOperations } from '../../modules/apartment';

class ApartmentSingle extends Component {
  state = {
    apartment_name: '',
    capacity: '',
    formValidationMsgs: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getSingleApartment(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.token) {
    //   this.props.history.push('/');
    // }
  }

  handleTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formValidationMsgs: [] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createApartment, history } = this.props;
    const { apartment_name, capacity } = this.state;
    createApartment({ apartment_name, capacity })
      .then(res => {
        console.log('component level SUCCESS: ', res);
        history.push('/apartments');
      })
      .catch(err => {
        console.log('component level err: ', err.response);
        // const errorMsgs = Object.keys(err.response.data.errors).map(error =>
        //   err.response.data.errors[error].message.replace('Path', 'Field')
        // );
        // this.setState({ formValidationMsgs: errorMsgs });
      });
  };

  render() {
    const { apartment_name, capacity, formValidationMsgs } = this.state;
    return (
      <Container>
        <div className="form-wrapper">
          <Form onSubmit={this.handleSubmit}>
            <h1 className="h1">Create app</h1>
            <FormGroup>
              <Label for="name">Apartment name *</Label>
              <Input
                type="text"
                id="apartment_name"
                name="apartment_name"
                value={apartment_name}
                onChange={this.handleTextChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="capacity">Capacity *</Label>
              <Input
                type="number"
                id="capacity"
                name="capacity"
                value={capacity}
                onChange={this.handleTextChange}
              />
            </FormGroup>
            {!!formValidationMsgs.length && (
              <Alert color="danger">
                {formValidationMsgs.map(message => (
                  <div key={message}>{message}</div>
                ))}
              </Alert>
            )}

            <Button color="primary">Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

const mapState = state => {
  const { loading, apartmentFormMessages } = state.apartments;
  return { loading, apartmentFormMessages };
};
const mapDispatch = {
  createApartment: apartmentOperations.createApartment,
  getSingleApartment: apartmentOperations.getSingleApartment,
};

export default connect(mapState, mapDispatch)(ApartmentSingle);
