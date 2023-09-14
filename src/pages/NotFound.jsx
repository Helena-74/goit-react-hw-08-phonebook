import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>Error 404. Sorry, page wasn't found</p> {''}<Link to="HOME_ROUTE">Back to the Home page</Link> 
    </div>
  );
};

export default NotFound; 