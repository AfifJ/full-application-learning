import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../redux/Users/usersApiSlices.js';
import { setCredentials } from '../redux/Users/authSlice.js';
import { toast } from 'react-toastify';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile Updated")
      } catch (err) {
        toast.error(err?.data?.message || 'Error');
      }
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={submitHandler} method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirm-password"
            type="password"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Update Profile
        </button>
        {isLoading && <div>Loading...</div>}
      </form>
    </div>
  );
};

export default Profile;
