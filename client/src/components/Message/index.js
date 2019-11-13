import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';

const Message = ({ message, type }) => {
  if (!message) return null;
  return (
    <div id="message">
      <Alert color={type}>{message}</Alert>
    </div>
  );
};
const mapState = state => {
  const { message, type } = state.messages;
  return { message, type };
};

export default connect(mapState)(Message);
