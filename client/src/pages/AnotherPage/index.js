import React from 'react';
import { Link } from 'react-router-dom';

const AnotherPage = () => {
  return (
    <div>
      <h1>Another page</h1>
      <Link to="/">Shopping list</Link>
    </div>
  );
};

export default AnotherPage;
