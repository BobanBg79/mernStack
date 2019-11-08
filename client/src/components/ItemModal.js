import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { itemOperations } from '../modules/items';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const newItem = {
      name,
    };
    this.props.createItem(newItem);
    this.setState({ modal: false });
  };

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Button
          color="danger"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add item
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add item to the shopping list
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Addshopping item"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
              onClick={this.onSubmit}
            >
              Add item
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatch = {
  createItem: itemOperations.createItem,
};

export default connect(
  null,
  mapDispatch
)(ItemModal);
