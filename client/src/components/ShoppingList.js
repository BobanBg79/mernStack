import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemOperations } from '../modules/items';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  deleteItem = id => () => {
    this.props.deleteItem(id);
  };

  render() {
    const { items, loading } = this.props;
    return (
      <Container>
        <Link to="/anotherpage">Link to another page</Link>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} className="show fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    onClick={this.deleteItem(_id)}
                    disabled={loading}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapState = state => {
  const { items, loading } = state.item;
  return { items, loading };
};

const mapDispatch = {
  getItems: itemOperations.getItems,
  deleteItem: itemOperations.deleteItem,
};

export default connect(mapState, mapDispatch)(ShoppingList);
