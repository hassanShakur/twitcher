import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>twitcher</Link>
        </li>
        <li>
          <Link to='/'>all</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
