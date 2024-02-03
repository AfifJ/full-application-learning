import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/Users/usersApiSlices';
import { logout } from '../redux/Users/authSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="d-flex px-5 justify-content-between border-bottom py-2">
      <div>
        <Link className="btn" to="/">
          Home
        </Link>
      </div>
      <div className="d-flex gap-3">
        {userInfo ? (
          <>
            <div className="btn fw-bold">{userInfo.name}</div>
            <Link className="btn" to="/profile">
              Profile
            </Link>
            <button className="btn btn-outline-primary" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
