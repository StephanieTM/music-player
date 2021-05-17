import React from 'react';
import { Link } from 'react-router-dom';

export default function HelloWorld(): JSX.Element {
  return (
    <div>
      <Link to="/us/the-song">Our Song</Link>
    </div>
  );
}
