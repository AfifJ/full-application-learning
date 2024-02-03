const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input id="confirm-password" type="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
