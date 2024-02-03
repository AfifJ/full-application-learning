import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="d-flex px-5 justify-content-between border-bottom py-2">
      <div>
        <Link className='btn' to="/">Home</Link>
      </div>
      <div className="d-flex gap-3">
        <Link className='btn btn-primary' to="/register">Register</Link>
        <Link className='btn btn-outline-primary' to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
