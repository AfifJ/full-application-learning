import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Auth</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
