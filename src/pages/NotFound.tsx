import React from 'react';
import { history } from '../redux/create';

const NotFound: React.FC = () => (
  <div>
    <h1>NotFound {history.location}</h1>
  </div>
);

export default NotFound;
