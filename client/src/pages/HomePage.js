import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Link to="/shopping-list">Shopping list</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/shopping-list">Make reservation</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/apartments/create">Create apartment</Link>
      </ListGroupItem>
    </ListGroup>
  );
};

export default HomePage;
